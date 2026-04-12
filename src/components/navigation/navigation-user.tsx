import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { SignOutButton } from '../auth/sign-out-button'
import { Card, CardBody } from '../common/card'
import {
  UserBadge,
  UserBadgeAction,
  UserBadgeIcon,
  UserBadgeInfo,
  UserBadgeSubtitle,
  UserBadgeTitle
} from '../common/user-badge'
import { UserAvatar } from '../users/user-avatar'
import { type navigationUserFragment$key } from './__generated__/navigationUserFragment.graphql'

const NavigationUserFragment = graphql`
  fragment navigationUserFragment on User {
    id
    name
    email
    ...userAvatarFragment
  }
`

interface NavigationUserProps {
  user: navigationUserFragment$key
}

export function NavigationUser({ user }: NavigationUserProps) {
  const data = useFragment(NavigationUserFragment, user)

  return (
    <Card>
      <CardBody>
        <UserBadge>
          <UserBadgeIcon>
            <UserAvatar user={data} />
          </UserBadgeIcon>
          <UserBadgeInfo>
            <UserBadgeTitle>{data.name}</UserBadgeTitle>
            <UserBadgeSubtitle>{data.email}</UserBadgeSubtitle>
          </UserBadgeInfo>
          <UserBadgeAction>
            <SignOutButton />
          </UserBadgeAction>
        </UserBadge>
      </CardBody>
    </Card>
  )
}
