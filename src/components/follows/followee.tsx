import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import {
  UserBadge,
  UserBadgeAction,
  UserBadgeIcon,
  UserBadgeInfo,
  UserBadgeSubtitle,
  UserBadgeTitle
} from '../common/user-badge'
import { UserAvatar } from '../users/user-avatar'
import { type followeeFragment$key } from './__generated__/followeeFragment.graphql'
import { FollowButton } from './follow-button'

const FolloweeFragment = graphql`
  fragment followeeFragment on User {
    name
    email
    ...followButtonFragment
    ...userAvatarFragment
  }
`

interface FolloweeProps {
  followee: followeeFragment$key
}

export function Followee({ followee }: FolloweeProps) {
  const data = useFragment(FolloweeFragment, followee)

  return (
    <UserBadge>
      <UserBadgeIcon>
        <UserAvatar user={data} />
      </UserBadgeIcon>
      <UserBadgeInfo>
        <UserBadgeTitle>{data.name}</UserBadgeTitle>
        <UserBadgeSubtitle>{data.email}</UserBadgeSubtitle>
      </UserBadgeInfo>
      <UserBadgeAction>
        <FollowButton followee={data} />
      </UserBadgeAction>
    </UserBadge>
  )
}
