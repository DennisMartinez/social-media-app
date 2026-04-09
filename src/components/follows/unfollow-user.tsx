import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Button } from '../common/button'
import { type unfollowUserFragment$key } from './__generated__/unfollowUserFragment.graphql'

const UnfollowUserFragment = graphql`
  fragment unfollowUserFragment on User {
    id
    isFollowing
  }
`

const UnfollowUserMutation = graphql`
  mutation unfollowUserMutation($input: UnfollowUserInput!) {
    unfollowUser(input: $input) {
      errors
      unfollowedUser {
        id
        isFollowing
      }
    }
  }
`

interface UnfollowUserProps {
  user: unfollowUserFragment$key
}

export function UnfollowUser({ user }: UnfollowUserProps) {
  const data = useFragment(UnfollowUserFragment, user)
  const [unfollowUser, isPending] = useMutation(UnfollowUserMutation)

  return (
    <Button
      variant="outline"
      disabled={isPending || !data.isFollowing}
      onClick={() => {
        unfollowUser({
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
      }}>
      Unfollow
    </Button>
  )
}
