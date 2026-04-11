import { type ComponentProps } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <Alert>
 *   <AlertIcon>
 *     <XIcon />
 *   </AlertIcon>
 *   <AlertBody>
 *     <AlertTitle>There was an error</AlertTitle>
 *     <AlertContent>We couldn't sign you into your account</AlertContent>
 *   </AlertBody>
 * </Alert>
 */

export function Alert({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('rounded-md bg-red-50 p-4', className)}>
      <div className="flex gap-3">{children}</div>
    </div>
  )
}

export function AlertIcon({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('shrink-0 [&_svg]:size-5 [&_svg]:text-red-400', className)}
    />
  )
}

export function AlertBody({ className, ...props }: ComponentProps<'div'>) {
  return <div {...props} className={cn('flex flex-col gap-2', className)}></div>
}

export function AlertTitle({ className, ...props }: ComponentProps<'strong'>) {
  return (
    <strong
      {...props}
      className={cn('text-sm font-medium text-red-800', className)}
    />
  )
}

export function AlertContent({ className, ...props }: ComponentProps<'div'>) {
  return <div {...props} className={cn('text-sm text-red-700', className)} />
}
