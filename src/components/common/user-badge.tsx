import { type ComponentProps } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <UserBadge user={user}>
 *   <UserBadgeIcon>
 *     <UserAvatar user={user} />
 *   </UserBadgeIcon>
 *   <UserBadgeInfo>
 *     <UserBadgeTitle>{user.name}</UserBadgeTitle>
 *     <UserBadgeSubtitle>{user.email}</UserBadgeSubtitle>
 *   </UserBadgeInfo>
 *   <UserBadgeAction>
 *     <Button>Follow</Button>
 *   </UserBadgeAction>
 * </UserBadge>
 */

export function UserBadge({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('flex w-full min-w-0 items-center gap-4', className)}
    />
  )
}

export function UserBadgeIcon({ className, ...props }: ComponentProps<'div'>) {
  return <div {...props} className={cn('shrink-0', className)} />
}

export function UserBadgeInfo({ className, ...props }: ComponentProps<'div'>) {
  return <div {...props} className={cn('truncate', className)} />
}

export function UserBadgeTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('truncate font-medium text-gray-900', className)}
    />
  )
}

export function UserBadgeSubtitle({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('truncate text-sm text-gray-500', className)}
    />
  )
}

export function UserBadgeAction({
  className,
  ...props
}: ComponentProps<'div'>) {
  return <div {...props} className={cn('ml-auto', className)} />
}
