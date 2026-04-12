import { useFragment } from 'react-relay'
import { Link } from 'react-router'
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
    id
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
        <Link to={`/users/${data.id}`}>
          <UserAvatar user={data} />
        </Link>
      </UserBadgeIcon>
      <UserBadgeInfo>
        <UserBadgeTitle>
          <Link to={`/users/${data.id}`}>{data.name}</Link>
        </UserBadgeTitle>
        <UserBadgeSubtitle>{data.email}</UserBadgeSubtitle>
      </UserBadgeInfo>
      <UserBadgeAction>
        <FollowButton followee={data} />
      </UserBadgeAction>
    </UserBadge>
  )
}
