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
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger
} from '../common/dropdown'
import { type postMenuDestroyMutation } from './__generated__/postMenuDestroyMutation.graphql'
import { type postMenuFragment$key } from './__generated__/postMenuFragment.graphql'
import { type postMenuViewerFragment$key } from './__generated__/postMenuViewerFragment.graphql'

const PostMenuViewerFragment = graphql`
  fragment postMenuViewerFragment on User {
    ...useFollowsFollowerFragment
  }
`

const PostMenuFragment = graphql`
  fragment postMenuFragment on Post {
    id
    viewerHasLiked
    viewerCanDestroy
    user {
      id
      viewerIsFollowing
      viewerCanFollow
      ...useFollowsFolloweeFragment
    }
    ...useLikesLikeableFragment
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
  viewer: postMenuViewerFragment$key
  post: postMenuFragment$key
}

export function PostMenu({ viewer, post }: PostMenuProps) {
  const data = useFragment(PostMenuFragment, post)
  const viewerData = useFragment(PostMenuViewerFragment, viewer)
  const [like] = useLike(data)
  const [unlike] = useUnlike(data)
  const [follow] = useFollow({ follower: viewerData, followee: data.user })
  const [unfollow] = useUnfollow({ follower: viewerData, followee: data.user })
  const [destroyPost] = useMutation<postMenuDestroyMutation>(
    PostMenuDestroyMutation
  )

  return (
    <Dropdown>
      <DropdownTrigger
        disabled={!data.viewerCanDestroy && !data.user.viewerCanFollow}
        className="flex size-8 items-center justify-center rounded-full text-gray-500 not-data-disabled:hover:bg-gray-100 data-popup-open:bg-gray-100">
        <EllipsisIcon />
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownMenuItem
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
        </DropdownMenuItem>
        {data.user.viewerCanFollow && (
          <DropdownMenuItem
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
          </DropdownMenuItem>
        )}
        {data.viewerCanDestroy && (
          <DropdownMenuItem
            variant="danger"
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
          </DropdownMenuItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}
