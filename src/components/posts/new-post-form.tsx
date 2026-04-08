import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch } from 'react-hook-form'
import { useFragment, useMutation } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'
import * as yup from 'yup'
import { type newPostFormFragment$key } from './__generated__/newPostFormFragment.graphql'
import { type newPostFormMutation } from './__generated__/newPostFormMutation.graphql'

const NewPostFormFragment = graphql`
  fragment newPostFormFragment on User {
    id
  }
`

const NewPostFormMutation = graphql`
  mutation newPostFormMutation($connections: [ID!]!, $input: CreatePostInput!) {
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

const schema = yup
  .object({
    content: yup.string().required().max(500)
  })
  .required()

const MAX_LIMIT = 500

interface NewPostFormProps {
  user: newPostFormFragment$key
}

export function NewPostForm({ user }: NewPostFormProps) {
  const data = useFragment(NewPostFormFragment, user)
  const [createPost, isCreatingPost] =
    useMutation<newPostFormMutation>(NewPostFormMutation)
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
        const connectionId = ConnectionHandler.getConnectionID(
          data.id,
          'User_posts'
        )

        reset()
        createPost({
          variables: {
            connections: [connectionId],
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
