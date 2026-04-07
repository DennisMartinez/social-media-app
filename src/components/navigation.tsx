import type { PropsWithChildren } from 'react'
import { useFragment } from 'react-relay'
import { NavLink } from 'react-router'
import { graphql } from 'relay-runtime'
import { cn } from '../utils'
import type { navigationQuery$key } from './__generated__/navigationQuery.graphql'
import { SignOutButton } from './sign-out-button'

const NavigationQuery = graphql`
  fragment navigationQuery on Query {
    currentUser {
      id
      name
    }
  }
`

interface NavigationProps {
  query: navigationQuery$key
}

export function Navigation({ query }: NavigationProps) {
  const data = useFragment(NavigationQuery, query)

  return (
    <nav>
      <div>welcome, {data.currentUser?.name}</div>
      <ul>
        <NavItem to="/">Feed</NavItem>
        <NavItem to="/profile">Profile</NavItem>
        <NavItem to="/followers">Followers</NavItem>
        <NavItem to="/following">Following</NavItem>
        <NavItem to="/likes">Likes</NavItem>
        <NavItem to="/comments">Comments</NavItem>
        <NavItem to="/settings">Settings</NavItem>
        <NavItem to="/feedback">Feedback</NavItem>
      </ul>
      <SignOutButton />
    </nav>
  )
}

interface NavItemProps {
  to: string
}

function NavItem({ to, children }: PropsWithChildren<NavItemProps>) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            'flex rounded-lg p-2 text-2xl font-medium tracking-wide hover:bg-gray-100',
            {
              'bg-gray-100': isActive
            }
          )
        }>
        {children}
      </NavLink>
    </li>
  )
}
