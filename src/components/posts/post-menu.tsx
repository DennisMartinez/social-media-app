import { Menu } from '@base-ui/react'
import {
  EllipsisIcon,
  TrashIcon,
  UserMinusIcon,
  UserPlusIcon
} from 'lucide-react'
import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type postMenuDestroyMutation } from './__generated__/postMenuDestroyMutation.graphql'
import type { postMenuFollowMutation } from './__generated__/postMenuFollowMutation.graphql'
import { type postMenuFragment$key } from './__generated__/postMenuFragment.graphql'
import type { postMenuUnfollowMutation } from './__generated__/postMenuUnfollowMutation.graphql'

const PostMenuFragment = graphql`
  fragment postMenuFragment on Post {
    id
    viewerHasLiked
    viewerCanDestroy
    user {
      id
      viewerIsFollowing
      viewerCanFollow
    }
  }
`

const PostMenuDestroyMutation = graphql`
  mutation postMenuDestroyMutation($input: DestroyPostInput!) {
    destroyPost(input: $input) {
      post {
        id @deleteRecord
      }
    }
  }
`

const PostMenuFollowUserMutation = graphql`
  mutation postMenuFollowMutation($input: FollowUserInput!) {
    followUser(input: $input) {
      errors
      followedUser {
        id
        viewerIsFollowing
      }
    }
  }
`

const PostMenuUnfollowUserMutation = graphql`
  mutation postMenuUnfollowMutation($input: UnfollowUserInput!) {
    unfollowUser(input: $input) {
      errors
      unfollowedUser {
        id
        viewerIsFollowing
      }
    }
  }
`

interface PostMenuProps {
  post: postMenuFragment$key
}

export function PostMenu({ post }: PostMenuProps) {
  const data = useFragment(PostMenuFragment, post)
  const [destroyPost, isDestroyingPost] = useMutation<postMenuDestroyMutation>(
    PostMenuDestroyMutation
  )
  const [follow, isTryingToFollow] = useMutation<postMenuFollowMutation>(
    PostMenuFollowUserMutation
  )
  const [unfollow, isTryingToUnfollow] = useMutation<postMenuUnfollowMutation>(
    PostMenuUnfollowUserMutation
  )

  if (!data.viewerCanDestroy && !data.user.viewerCanFollow) {
    return null
  }

  return (
    <Menu.Root>
      <Menu.Trigger className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 data-popup-open:bg-gray-100">
        <EllipsisIcon />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className="outline-hidden" sideOffset={8} align="end">
          <Menu.Popup className="overflow-hidden rounded-lg bg-white shadow">
            {data.user.viewerCanFollow && (
              <Menu.Item
                disabled={isTryingToFollow || isTryingToUnfollow}
                className="flex cursor-default items-center gap-2 px-4 py-2 text-sm data-disabled:cursor-not-allowed data-disabled:opacity-50 data-highlighted:bg-gray-100 data-highlighted:text-gray-900"
                onClick={() => {
                  if (data.user.viewerIsFollowing) {
                    unfollow({
                      variables: {
                        input: {
                          userId: data.user.id
                        }
                      },
                      optimisticResponse: {
                        unfollowUser: {
                          errors: null,
                          unfollowedUser: {
                            id: data.user.id,
                            viewerIsFollowing: false
                          }
                        }
                      }
                    })
                    return
                  }

                  follow({
                    variables: {
                      input: {
                        userId: data.user.id
                      }
                    },
                    optimisticResponse: {
                      followUser: {
                        errors: null,
                        followedUser: {
                          id: data.user.id,
                          viewerIsFollowing: true
                        }
                      }
                    }
                  })
                }}>
                {data.user.viewerIsFollowing ? (
                  <>
                    <UserMinusIcon className="size-4" />
                    Unfollow User
                  </>
                ) : (
                  <>
                    <UserPlusIcon className="size-4" />
                    Follow User
                  </>
                )}
              </Menu.Item>
            )}
            {data.viewerCanDestroy && (
              <Menu.Item
                disabled={isDestroyingPost}
                className="flex cursor-default items-center gap-2 px-4 py-2 text-sm text-red-900 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-highlighted:not-data-disabled:bg-red-100"
                onClick={() => {
                  destroyPost({
                    variables: {
                      input: {
                        postId: data.id
                      }
                    },
                    optimisticResponse: {
                      destroyPost: {
                        post: {
                          id: data.id
                        }
                      }
                    }
                  })
                }}>
                <TrashIcon className="size-4" />
                Delete Post
              </Menu.Item>
            )}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}
