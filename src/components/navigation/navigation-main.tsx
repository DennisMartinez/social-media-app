import { Newspaper, UserIcon, UsersIcon } from 'lucide-react'
import { Card, CardBody, CardHeader, CardTitle } from '../common/card'
import { NavigationItem } from './navigation-item'

export function NavigationMain() {
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
          <NavigationItem to="/profile">
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
