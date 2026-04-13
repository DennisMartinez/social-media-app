import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useFragment, useMutation, useRelayEnvironment } from 'react-relay'
import TextareaAutosize from 'react-textarea-autosize'
import { ConnectionHandler, graphql } from 'relay-runtime'
import * as yup from 'yup'
import { Button } from '../common/button'
import { Input } from '../common/input'
import { ProfileAvatar } from '../profiles/profile-avatar'
import { UserGroupsDropdown, type Group } from '../users/user-groups-dropdown'
import { type createPostFormFragment$key } from './__generated__/createPostFormFragment.graphql'
import { type createPostFormMutation } from './__generated__/createPostFormMutation.graphql'

const CreatePostFormFragment = graphql`
  fragment createPostFormFragment on User {
    id
    name
    avatarUrl
    followerCount
    followingCount
    ...profileAvatarFragment
    ...userGroupsDropdownFragment
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
  const env = useRelayEnvironment()
  const data = useFragment(CreatePostFormFragment, user)
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null)
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

        reset()
        createPost({
          variables: {
            connections,
            input: {
              content: formData.content,
              groupId: selectedGroup?.id
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
                    followerCount: data.followerCount,
                    followingCount: data.followingCount,
                    viewerIsFollowing: false,
                    viewerCanFollow: false
                  },
                  group: selectedGroup,
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
        <ProfileAvatar node={data} size="sm" />
        <div className="relative w-full">
          <Input
            {...register('content')}
            as={TextareaAutosize}
            placeholder="What's on your mind?"
            maxLength={MAX_LIMIT}
            className="rounded-xl pb-10 outline-transparent focus:outline-blue-500"
            minRows={3}
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
          />
          <div className="absolute bottom-0 left-0 flex w-full items-center justify-between gap-4 px-2 pb-2">
            <div>
              <UserGroupsDropdown
                user={data}
                onGroupSelect={setSelectedGroup}
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="text-xs text-gray-400">
                {content.length}/{MAX_LIMIT}
              </div>
              <Button
                variant={content ? 'primary' : 'outline'}
                size="xs"
                disabled={!content}>
                Create Post{selectedGroup ? ` in ${selectedGroup.name}` : ''}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
