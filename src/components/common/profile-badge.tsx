import { type ComponentProps } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <ProfileBadge>
 *   <ProfileBadgeIcon>
 *     <ProfileAvatar node={user} />
 *   </ProfileBadgeIcon>
 *   <ProfileBadgeInfo>
 *     <ProfileBadgeTitle>{user.name}</ProfileBadgeTitle>
 *     <ProfileBadgeSubtitle>{user.email}</ProfileBadgeSubtitle>
 *   </ProfileBadgeInfo>
 *   <ProfileBadgeAction>
 *     <Button>Follow</Button>
 *   </ProfileBadgeAction>
 * </ProfileBadge>
 */

export function ProfileBadge({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('flex w-full min-w-0 items-center gap-4', className)}
    />
  )
}

export function ProfileBadgeIcon({
  className,
  ...props
}: ComponentProps<'div'>) {
  return <div {...props} className={cn('shrink-0', className)} />
}

export function ProfileBadgeInfo({
  className,
  ...props
}: ComponentProps<'div'>) {
  return <div {...props} className={cn('truncate', className)} />
}

export function ProfileBadgeTitle({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('truncate font-medium text-gray-900', className)}
    />
  )
}

export function ProfileBadgeSubtitle({
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

export function ProfileBadgeAction({
  className,
  ...props
}: ComponentProps<'div'>) {
  return <div {...props} className={cn('ml-auto shrink-0', className)} />
}
