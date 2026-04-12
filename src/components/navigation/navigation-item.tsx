import { type PropsWithChildren } from 'react'
import { NavLink } from 'react-router'
import { cn } from '../../utils'

interface NavigationItemProps {
  to: string
}

export function NavigationItem({
  to,
  children
}: PropsWithChildren<NavigationItemProps>) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            'flex items-center gap-4 text-sm font-semibold tracking-wide [&_svg]:size-5',
            {
              'text-gray-900 hover:text-gray-900 [&_svg]:text-gray-600':
                !isActive,
              'text-blue-500': isActive
            }
          )
        }>
        {children}
      </NavLink>
    </li>
  )
}
