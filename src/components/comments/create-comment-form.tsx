import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch } from 'react-hook-form'
import { useFragment, useMutation, useRelayEnvironment } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'
import * as yup from 'yup'
import { type createCommentFormFragment$key } from './__generated__/createCommentFormFragment.graphql'
import { type createCommentFormMutation } from './__generated__/createCommentFormMutation.graphql'

const CreateCommentFormFragment = graphql`
  fragment createCommentFormFragment on Node {
    id
  }
`

const CreateCommentFormMutation = graphql`
  mutation createCommentFormMutation(
    $connections: [ID!]!
    $input: CreateCommentInput!
  ) {
    createComment(input: $input) {
      errors
      commentEdge @appendEdge(connections: $connections) {
        node {
          id
          content
          createdAt
        }
      }
    }
  }
`

const MAX_LIMIT = 500
const schema = yup.object({
  content: yup
    .string()
    .required('Content is required')
    .max(MAX_LIMIT, `Content must be at most ${MAX_LIMIT} characters`)
})

interface CreateCommentFormProps {
  commentable: createCommentFormFragment$key
}

export function CreateCommentForm({ commentable }: CreateCommentFormProps) {
  const env = useRelayEnvironment()
  const data = useFragment(CreateCommentFormFragment, commentable)
  const [createComment, isCreatingComment] =
    useMutation<createCommentFormMutation>(CreateCommentFormMutation)
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content: ''
    }
  })
  const content = useWatch({ control, name: 'content' })

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        const connections = ['Post_comments']
          .map((key) => ConnectionHandler.getConnectionID(data.id, key))
          .filter((id) => env.getStore().getSource().get(id))

        createComment({
          variables: {
            connections,
            input: {
              content: formData.content,
              commentableId: data.id
            }
          },
          optimisticResponse: {
            createComment: {
              errors: [],
              commentEdge: {
                node: {
                  id: new Date().toISOString(),
                  content: formData.content,
                  createdAt: new Date().toISOString()
                }
              }
            }
          }
        })
      })}>
      <div>
        <textarea
          {...register('content')}
          maxLength={MAX_LIMIT}
          className="w-full rounded-lg border border-gray-200"
          rows={5}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          {content.length}/{MAX_LIMIT}
        </div>
        <button
          disabled={isCreatingComment}
          className="rounded-lg bg-blue-500 px-4 py-1 font-medium text-white">
          Comment
        </button>
      </div>
    </form>
  )
}
