import { type ComponentProps } from 'react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { useFollow, useUnfollow } from '../../hooks/use-follows'
import { Button } from '../common/button'
import { type followButtonFolloweeFragment$key } from './__generated__/followButtonFolloweeFragment.graphql'
import { type followButtonFollowerFragment$key } from './__generated__/followButtonFollowerFragment.graphql'

const FollowButtonFollowerFragment = graphql`
  fragment followButtonFollowerFragment on User {
    ...useFollowsFollowerFragment
  }
`

const FollowButtonFolloweeFragment = graphql`
  fragment followButtonFolloweeFragment on User {
    id
    viewerIsFollowing
    viewerCanFollow
    ...useFollowsFolloweeFragment
  }
`

interface FollowButtonProps extends Omit<
  ComponentProps<typeof Button>,
  'children'
> {
  follower: followButtonFollowerFragment$key
  followee: followButtonFolloweeFragment$key
}

export function FollowButton({
  follower,
  followee,
  onClick,
  ...props
}: FollowButtonProps) {
  const followerData = useFragment(FollowButtonFollowerFragment, follower)
  const followeeData = useFragment(FollowButtonFolloweeFragment, followee)
  const [follow] = useFollow({ follower: followerData, followee: followeeData })
  const [unfollow] = useUnfollow({
    follower: followerData,
    followee: followeeData
  })

  if (!followeeData.viewerCanFollow) {
    return null
  }

  return (
    <Button
      {...props}
      size="xs"
      variant={followeeData.viewerIsFollowing ? 'outline' : 'primary'}
      {...props}
      onClick={(e) => {
        if (followeeData.viewerIsFollowing) {
          unfollow({ userId: followeeData.id })
          onClick?.(e)
          return
        }

        follow({ userId: followeeData.id })
        onClick?.(e)
      }}>
      {followeeData.viewerIsFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  )
}
