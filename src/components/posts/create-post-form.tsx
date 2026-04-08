import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch } from 'react-hook-form'
import { useFragment, useMutation, useRelayEnvironment } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'
import * as yup from 'yup'
import type { createPostFormFragment$key } from './__generated__/createPostFormFragment.graphql'
import { type createPostFormMutation } from './__generated__/createPostFormMutation.graphql'

const CreatePostFormFragment = graphql`
  fragment createPostFormFragment on User {
    id
  }
`

const CreatePostFormMutation = graphql`
  mutation createPostFormMutation(
    $connections: [ID!]!
    $input: CreatePostInput!
  ) {
    createPost(input: $input) {
      postEdge @prependEdge(connections: $connections) {
        node {
          id
          content
          createdAt
        }
      }
    }
  }
`

const schema = yup.object({
  content: yup.string().required().max(500)
})

const MAX_LIMIT = 500

interface CreatePostFormProps {
  user: createPostFormFragment$key
}

export function CreatePostForm({ user }: CreatePostFormProps) {
  const data = useFragment(CreatePostFormFragment, user)
  const env = useRelayEnvironment()
  const [createPost, isCreatingPost] = useMutation<createPostFormMutation>(
    CreatePostFormMutation
  )
  const { register, handleSubmit, control, reset, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content: ''
    }
  })
  const content = useWatch({ control, name: 'content' })

  return (
    <form
      onSubmit={handleSubmit((formData) => {
        const connections = ['User_posts', 'User_feed']
          .map((key) => ConnectionHandler.getConnectionID(data.id, key))
          .filter((id) => env.getStore().getSource().get(id))

        reset()
        createPost({
          variables: {
            connections,
            input: formData
          },
          optimisticResponse: {
            createPost: {
              postEdge: {
                node: {
                  id: new Date().toISOString(),
                  content: formData.content,
                  createdAt: new Date().toISOString()
                }
              }
            }
          },
          onError: () => {
            setValue('content', formData.content)
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
          disabled={isCreatingPost}
          className="rounded-lg bg-blue-500 px-4 py-1 font-medium text-white">
          Post
        </button>
      </div>
    </form>
  )
}
