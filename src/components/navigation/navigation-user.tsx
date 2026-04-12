import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Card, CardBody } from '../common/card'
import { SignOutButton } from '../sign-out-button'
import { UserAvatar } from '../user-avatar'
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
        <div className="mt-auto flex w-full gap-4">
          <UserAvatar user={data} />
          <div>
            <p className="text-sm font-medium text-gray-900">{data.name}</p>
            <p className="text-sm text-gray-500">{data.email}</p>
          </div>
          <div className="ml-auto">
            <SignOutButton />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
