import { Menu } from '@base-ui/react'
import {
  EllipsisIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TrashIcon,
  UserMinusIcon,
  UserPlusIcon
} from 'lucide-react'
import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { useFollow, useUnfollow } from '../../hooks/use-follows'
import { useLike, useUnlike } from '../../hooks/use-likes'
import { type postMenuDestroyMutation } from './__generated__/postMenuDestroyMutation.graphql'
import { type postMenuFragment$key } from './__generated__/postMenuFragment.graphql'

const PostMenuFragment = graphql`
  fragment postMenuFragment on Post {
    ...useLikesLikeableFragment
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

interface PostMenuProps {
  post: postMenuFragment$key
}

export function PostMenu({ post }: PostMenuProps) {
  const data = useFragment(PostMenuFragment, post)
  const [destroyPost, isDestroyingPost] = useMutation<postMenuDestroyMutation>(
    PostMenuDestroyMutation
  )
  const [follow, isPendingFollow] = useFollow()
  const [unfollow, isPendingUnfollow] = useUnfollow()

  const [like, isPendingLike] = useLike(data)
  const [unlike, isPendingUnlike] = useUnlike(data)

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
            <Menu.Item
              disabled={isPendingLike || isPendingUnlike}
              className="flex cursor-default items-center gap-2 px-4 py-2 text-sm data-disabled:cursor-not-allowed data-disabled:opacity-50 data-highlighted:bg-gray-100 data-highlighted:text-gray-900"
              onClick={() => {
                if (data.viewerHasLiked) {
                  unlike({ likeableId: data.id })
                  return
                }

                like({ likeableId: data.id })
              }}>
              {data.viewerHasLiked ? (
                <>
                  <ThumbsDownIcon className="size-4" />
                  Unlike Post
                </>
              ) : (
                <>
                  <ThumbsUpIcon className="size-4" />
                  Like Post
                </>
              )}
            </Menu.Item>
            {data.user.viewerCanFollow && (
              <Menu.Item
                disabled={isPendingFollow || isPendingUnfollow}
                className="flex cursor-default items-center gap-2 px-4 py-2 text-sm data-disabled:cursor-not-allowed data-disabled:opacity-50 data-highlighted:bg-gray-100 data-highlighted:text-gray-900"
                onClick={() => {
                  if (data.user.viewerIsFollowing) {
                    unfollow({ userId: data.user.id })
                    return
                  }

                  follow({ userId: data.user.id })
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
