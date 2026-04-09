import {
  MessageCircleIcon,
  Newspaper,
  ThumbsUpIcon,
  UserIcon,
  UserPlusIcon,
  UserRoundPlusIcon
} from 'lucide-react'
import { type PropsWithChildren } from 'react'
import { useFragment } from 'react-relay'
import { NavLink } from 'react-router'
import { graphql } from 'relay-runtime'
import { cn } from '../utils'
import { type navigationFragment$key } from './__generated__/navigationFragment.graphql'
import { SignOutButton } from './sign-out-button'

const NavigationFragment = graphql`
  fragment navigationFragment on Query {
    currentUser {
      id
      name
    }
  }
`

interface NavigationProps {
  query: navigationFragment$key
}

export function Navigation({ query }: NavigationProps) {
  const data = useFragment(NavigationFragment, query)

  return (
    <nav className="sticky top-0 h-dvh w-full flex-col items-start gap-4 border-r bg-gray-50 p-4">
      <div>Social Media</div>
      {/* <div>welcome, {data.currentUser?.name}</div> */}
      <ul>
        <NavItem to="/">
          <Newspaper />
          Feed
        </NavItem>
        <NavItem to="/profile">
          <UserIcon />
          Profile
        </NavItem>
        <NavItem to="/followers">
          <UserRoundPlusIcon />
          Followers
        </NavItem>
        <NavItem to="/following">
          <UserPlusIcon />
          Following
        </NavItem>
        <NavItem to="/likes">
          <ThumbsUpIcon />
          Likes
        </NavItem>
        <NavItem to="/comments">
          <MessageCircleIcon />
          Comments
        </NavItem>
        <NavItem to="/comments">GitHub</NavItem>
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
            'flex items-center gap-4 rounded-lg p-2 text-2xl font-medium tracking-wide hover:bg-gray-200',
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
