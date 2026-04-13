import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { SignOutButton } from '../auth/sign-out-button'
import { Card, CardBody } from '../common/card'
import {
  ProfileBadge,
  ProfileBadgeAction,
  ProfileBadgeIcon,
  ProfileBadgeInfo,
  ProfileBadgeSubtitle,
  ProfileBadgeTitle
} from '../common/profile-badge'
import { ProfileAvatar } from '../profiles/profile-avatar'
import { type navigationAccountFragment$key } from './__generated__/navigationAccountFragment.graphql'

const NavigationAccountFragment = graphql`
  fragment navigationAccountFragment on User {
    id
    name
    email
    ...profileAvatarFragment
  }
`

interface NavigationAccountProps {
  viewer: navigationAccountFragment$key
}

export function NavigationAccount({ viewer }: NavigationAccountProps) {
  const data = useFragment(NavigationAccountFragment, viewer)

  return (
    <Card>
      <CardBody>
        <ProfileBadge>
          <ProfileBadgeIcon>
            <ProfileAvatar node={data} />
          </ProfileBadgeIcon>
          <ProfileBadgeInfo>
            <ProfileBadgeTitle>{data.name}</ProfileBadgeTitle>
            <ProfileBadgeSubtitle>{data.email}</ProfileBadgeSubtitle>
          </ProfileBadgeInfo>
          <ProfileBadgeAction>
            <SignOutButton />
          </ProfileBadgeAction>
        </ProfileBadge>
      </CardBody>
    </Card>
  )
}
