import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch } from 'react-hook-form'
import { useFragment, useMutation, useRelayEnvironment } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'
import * as yup from 'yup'
import { type createCommentFormCommentableFragment$key } from './__generated__/createCommentFormCommentableFragment.graphql'
import { type createCommentFormMutation } from './__generated__/createCommentFormMutation.graphql'
import { type createCommentFormUserFragment$key } from './__generated__/createCommentFormUserFragment.graphql'

const CreateCommentFormUserFragment = graphql`
  fragment createCommentFormUserFragment on User {
    id
    name
    avatarUrl
    ...userAvatarFragment
  }
`

const CreateCommentFormCommentableFragment = graphql`
  fragment createCommentFormCommentableFragment on Node {
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
          ...commentFragment
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
  user: createCommentFormUserFragment$key
  commentable: createCommentFormCommentableFragment$key
}

export function CreateCommentForm({
  user,
  commentable
}: CreateCommentFormProps) {
  const env = useRelayEnvironment()
  const userData = useFragment(CreateCommentFormUserFragment, user)
  const commentableData = useFragment(
    CreateCommentFormCommentableFragment,
    commentable
  )
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
          .map((key) =>
            ConnectionHandler.getConnectionID(commentableData.id, key)
          )
          .filter((id) => env.getStore().getSource().get(id))

        createComment({
          variables: {
            connections,
            input: {
              content: formData.content,
              commentableId: commentableData.id
            }
          },
          optimisticResponse: {
            createComment: {
              errors: [],
              commentEdge: {
                node: {
                  id: new Date().toISOString(),
                  content: formData.content,
                  createdAt: new Date().toISOString(),
                  user: {
                    id: userData.id,
                    name: userData.name,
                    avatarUrl: userData.avatarUrl
                  }
                }
              }
            }
          }
        })
      })}>
      <div className="relative grow">
        <input
          type="text"
          className="focus:ring-opacity-50 w-full flex-1 rounded-lg bg-gray-50 px-4 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-500"
          placeholder="Write a comment..."
          {...register('content')}
          maxLength={MAX_LIMIT}
        />
        <button
          disabled={isCreatingComment}
          aria-label="Send comment"
          className="abssolute top-1.5 right-1 flex items-center justify-center rounded bg-slate-500 p-2 text-sm text-white hover:bg-slate-700">
          Send
          {/* <SendIcon className="size-4" /> */}
        </button>
      </div>
    </form>
  )
}
