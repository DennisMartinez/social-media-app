import type { ComponentProps } from 'react'
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

interface FollowButtonProps extends Omit<
  ComponentProps<typeof Button>,
  'children'
> {
  followee: followButtonFragment$key
}

export function FollowButton({
  followee,
  onClick,
  ...props
}: FollowButtonProps) {
  const data = useFragment(FollowButtonFragment, followee)
  const [follow] = useFollow()
  const [unfollow] = useUnfollow()

  if (!data.viewerCanFollow) {
    return null
  }

  return (
    <Button
      {...props}
      size="xs"
      variant={data.viewerIsFollowing ? 'outline' : 'primary'}
      {...props}
      onClick={(e) => {
        if (data.viewerIsFollowing) {
          unfollow({ userId: data.id })
          onClick?.(e)
          return
        }

        follow({ userId: data.id })
        onClick?.(e)
      }}>
      {data.viewerIsFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  )
}
