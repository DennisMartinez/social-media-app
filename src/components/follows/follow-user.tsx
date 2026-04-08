import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
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
    <button
      disabled={isPending || data.isFollowing}
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:opacity-50"
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
    </button>
  )
}
