import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Button } from '../common/button'
import { type followUserFragment$key } from './__generated__/followUserFragment.graphql'

const FollowUserFragment = graphql`
  fragment followUserFragment on User {
    id
    isFollowing
  }
`

const FollowUserMutation = graphql`
  mutation followUserMutation($input: FollowUserInput!) {
    followUser(input: $input) {
      errors
      followedUser {
        id
        isFollowing
      }
    }
  }
`

interface FollowUserProps {
  user: followUserFragment$key
}

export function FollowUser({ user }: FollowUserProps) {
  const data = useFragment(FollowUserFragment, user)
  const [followUser, isPending] = useMutation(FollowUserMutation)

  return (
    <Button
      disabled={isPending || data.isFollowing}
      onClick={() => {
        followUser({
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
      Follow
    </Button>
  )
}
