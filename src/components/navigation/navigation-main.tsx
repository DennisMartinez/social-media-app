import { Newspaper, UserIcon, UsersIcon } from 'lucide-react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Card, CardBody, CardHeader, CardTitle } from '../common/card'
import { type navigationMainFragment$key } from './__generated__/navigationMainFragment.graphql'
import { NavigationItem } from './navigation-item'

const NavigationMainFragment = graphql`
  fragment navigationMainFragment on User {
    id
  }
`

interface NavigationMainProps {
  viewer: navigationMainFragment$key
}

export function NavigationMain({ viewer }: NavigationMainProps) {
  const data = useFragment(NavigationMainFragment, viewer)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Main</CardTitle>
      </CardHeader>
      <CardBody>
        <ul className="flex flex-col gap-4">
          <NavigationItem to="/">
            <Newspaper />
            Feed
          </NavigationItem>
          <NavigationItem to={`/users/${data.id}`}>
            <UserIcon />
            Profile
          </NavigationItem>
          <NavigationItem to="/groups">
            <UsersIcon />
            Groups
          </NavigationItem>
        </ul>
      </CardBody>
    </Card>
  )
}
