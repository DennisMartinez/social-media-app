import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { useFollow, useUnfollow } from '../../hooks/use-follows'
import { Button } from '../common/button'
import { type followButtonFragment$key } from './__generated__/followButtonFragment.graphql'

const FollowButtonFragment = graphql`
  fragment followButtonFragment on User {
    id
    viewerIsFollowing
    viewerCanFollow
  }
`

interface FollowButtonProps {
  followee: followButtonFragment$key
}

export function FollowButton({ followee }: FollowButtonProps) {
  const data = useFragment(FollowButtonFragment, followee)
  const [follow] = useFollow()
  const [unfollow] = useUnfollow()

  if (!data.viewerCanFollow) {
    return null
  }

  return (
    <Button
      size="xs"
      radius="full"
      variant={data.viewerIsFollowing ? 'outline' : 'primary'}
      onClick={() => {
        if (data.viewerIsFollowing) {
          unfollow({ userId: data.id })
          return
        }

        follow({ userId: data.id })
      }}>
      {data.viewerIsFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  )
}
