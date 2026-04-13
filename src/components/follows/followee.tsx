import { useFragment } from 'react-relay'
import { Link } from 'react-router'
import { graphql } from 'relay-runtime'
import {
  ProfileBadge,
  ProfileBadgeAction,
  ProfileBadgeIcon,
  ProfileBadgeInfo,
  ProfileBadgeSubtitle,
  ProfileBadgeTitle
} from '../common/profile-badge'
import { ProfileAvatar } from '../profiles/profile-avatar'
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
    ...profileAvatarFragment
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
    <ProfileBadge>
      <ProfileBadgeIcon>
        <Link to={`/users/${data.id}`}>
          <ProfileAvatar node={data} />
        </Link>
      </ProfileBadgeIcon>
      <ProfileBadgeInfo>
        <ProfileBadgeTitle>
          <Link to={`/users/${data.id}`}>{data.name}</Link>
        </ProfileBadgeTitle>
        <ProfileBadgeSubtitle>{data.email}</ProfileBadgeSubtitle>
      </ProfileBadgeInfo>
      <ProfileBadgeAction>
        <FollowButton follower={viewerData} followee={data} />
      </ProfileBadgeAction>
    </ProfileBadge>
  )
}
