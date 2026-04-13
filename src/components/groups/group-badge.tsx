import { useFragment } from 'react-relay'
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
import { type groupBadgeFragment$key } from './__generated__/groupBadgeFragment.graphql'
import { type groupBadgeViewerFragment$key } from './__generated__/groupBadgeViewerFragment.graphql'
import { GroupMembershipButton } from './group-membership-button'

const GroupBadgeViewerFragment = graphql`
  fragment groupBadgeViewerFragment on User {
    groupCount
    ...groupMembershipButtonViewerFragment
  }
`

const GroupBadgeFragment = graphql`
  fragment groupBadgeFragment on Group {
    id
    name
    bio
    ...profileAvatarFragment
    ...groupMembershipButtonFragment
  }
`

interface GroupBadgeProps {
  viewer: groupBadgeViewerFragment$key
  group: groupBadgeFragment$key
}

export function GroupBadge({ viewer, group }: GroupBadgeProps) {
  const data = useFragment(GroupBadgeFragment, group)
  const viewerData = useFragment(GroupBadgeViewerFragment, viewer)

  return (
    <ProfileBadge>
      <ProfileBadgeIcon>
        <ProfileAvatar node={data} />
      </ProfileBadgeIcon>
      <ProfileBadgeInfo>
        <ProfileBadgeTitle>{data.name}</ProfileBadgeTitle>
        <ProfileBadgeSubtitle>{data.bio}</ProfileBadgeSubtitle>
      </ProfileBadgeInfo>
      <ProfileBadgeAction>
        <GroupMembershipButton viewer={viewerData} group={data} />
      </ProfileBadgeAction>
    </ProfileBadge>
  )
}
