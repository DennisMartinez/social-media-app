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
import { type followeeViewerFragment$key } from './__generated__/followeeViewerFragment.graphql'
import { FollowButton } from './follow-button'

const FolloweeViewerFragment = graphql`
  fragment followeeViewerFragment on User {
    ...followButtonFollowerFragment
  }
`

const FolloweeFragment = graphql`
  fragment followeeFragment on User {
    id
    name
    email
    ...followButtonFolloweeFragment
    ...userAvatarFragment
  }
`

interface FolloweeProps {
  viewer: followeeViewerFragment$key
  followee: followeeFragment$key
}

export function Followee({ viewer, followee }: FolloweeProps) {
  const data = useFragment(FolloweeFragment, followee)
  const viewerData = useFragment(FolloweeViewerFragment, viewer)

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
        <FollowButton follower={viewerData} followee={data} />
      </UserBadgeAction>
    </UserBadge>
  )
}
