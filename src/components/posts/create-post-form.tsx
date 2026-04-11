import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch } from 'react-hook-form'
import { useFragment, useMutation, useRelayEnvironment } from 'react-relay'
import TextareaAutosize from 'react-textarea-autosize'
import { ConnectionHandler, graphql } from 'relay-runtime'
import * as yup from 'yup'
import { Button } from '../common/button'
import { Input } from '../common/input'
import { UserAvatar } from '../user-avatar'
import { type createPostFormFragment$key } from './__generated__/createPostFormFragment.graphql'
import { type createPostFormMutation } from './__generated__/createPostFormMutation.graphql'

const CreatePostFormFragment = graphql`
  fragment createPostFormFragment on User {
    id
    name
    avatarUrl
    ...userAvatarFragment
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
          ...postFragment
        }
      }
    }
  }
`

const schema = yup.object({
  content: yup
    .string()
    .required('Content is required')
    .max(500, 'Content must be at most 500 characters')
})

const MAX_LIMIT = 500

interface CreatePostFormProps {
  user: createPostFormFragment$key
}

export function CreatePostForm({ user }: CreatePostFormProps) {
  const data = useFragment(CreatePostFormFragment, user)
  const env = useRelayEnvironment()
  const [createPost] = useMutation<createPostFormMutation>(
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

        console.log(data.avatarUrl)

        reset()
        createPost({
          variables: {
            connections,
            input: {
              content: formData.content
            }
          },
          optimisticResponse: {
            createPost: {
              postEdge: {
                node: {
                  __typename: 'Post',
                  id: new Date().toISOString(),
                  content: formData.content,
                  createdAt: new Date().toISOString(),
                  viewerHasLiked: false,
                  viewerCanDestroy: false,
                  commentsCount: 0,
                  likesCount: 0,
                  comments: {
                    edges: [],
                    pageInfo: {
                      endCursor: null,
                      hasNextPage: false
                    }
                  },
                  user: {
                    id: data.id,
                    avatarUrl: data.avatarUrl,
                    name: data.name,
                    viewerIsFollowing: false,
                    viewerCanFollow: false
                  },
                  viewerLike: null
                }
              }
            }
          },
          onError: () => {
            setValue('content', formData.content)
          }
        })
      })}>
      <div className="flex w-full gap-4">
        <UserAvatar user={data} size="sm" />
        <div className="relative w-full">
          <Input
            {...register('content')}
            as={TextareaAutosize}
            placeholder="What's on your mind?"
            maxLength={MAX_LIMIT}
            className="rounded-xl pb-10 outline-transparent focus:outline-blue-500"
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
          />
          <div className="absolute right-2 bottom-2 flex items-center gap-2">
            <div className="text-xs text-gray-400">
              {content.length}/{MAX_LIMIT}
            </div>
            <Button
              variant={content ? 'primary' : 'outline'}
              size="xs"
              disabled={!content}>
              Create Post
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
