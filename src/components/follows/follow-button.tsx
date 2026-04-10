import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Button } from '../common/button'
import { type followButtonCreateMutation } from './__generated__/followButtonCreateMutation.graphql'
import { type followButtonDestroyMutation } from './__generated__/followButtonDestroyMutation.graphql'
import { type followButtonFragment$key } from './__generated__/followButtonFragment.graphql'

const FollowButtonFragment = graphql`
  fragment followButtonFragment on User {
    id
    isFollowing
    currentUser {
      id
    }
  }
`

const FollowButtonCreateMutation = graphql`
  mutation followButtonCreateMutation($input: FollowUserInput!) {
    followUser(input: $input) {
      errors
      followedUser {
        id
        isFollowing
      }
    }
  }
`

const FollowButtonDestroyMutation = graphql`
  mutation followButtonDestroyMutation($input: UnfollowUserInput!) {
    unfollowUser(input: $input) {
      errors
      unfollowedUser {
        id
        isFollowing
      }
    }
  }
`

interface FollowButtonProps {
  followee: followButtonFragment$key
}

export function FollowButton({ followee }: FollowButtonProps) {
  const data = useFragment(FollowButtonFragment, followee)
  const [follow, isPending] = useMutation<followButtonCreateMutation>(
    FollowButtonCreateMutation
  )
  const [unfollow, isUnfollowPending] =
    useMutation<followButtonDestroyMutation>(FollowButtonDestroyMutation)

  if (data.currentUser.id === data.id) {
    return null
  }

  return (
    <Button
      size="sm"
      variant={data.isFollowing ? 'outline' : 'primary'}
      disabled={isPending || isUnfollowPending}
      onClick={() => {
        if (data.isFollowing) {
          unfollow({
            variables: {
              input: {
                userId: data.id
              }
            },
            optimisticResponse: {
              unfollowUser: {
                errors: null,
                unfollowedUser: {
                  id: data.id,
                  isFollowing: false
                }
              }
            }
          })
          return
        }

        follow({
          variables: {
            input: {
              userId: data.id
            }
          },
          optimisticResponse: {
            followUser: {
              errors: null,
              followedUser: {
                id: data.id,
                isFollowing: true
              }
            }
          }
        })
      }}>
      {data.isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  )
}
