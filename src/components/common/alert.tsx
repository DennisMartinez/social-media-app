import { cva, type VariantProps } from 'class-variance-authority'
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
 *
 * <Alert variant="warning">
 *   <AlertIcon>
 *     <CheckIcon />
 *   </AlertIcon>
 *   <AlertBody>
 *     <AlertTitle>Success!</AlertTitle>
 *     <AlertContent>Your account has been created.</AlertContent>
 *   </AlertBody>
 * </Alert>
 */

const alertVariants = cva('rounded-md p-4', {
  variants: {
    variant: {
      default:
        'bg-blue-50 **:data-alert-content:text-blue-700 **:data-alert-icon:text-blue-400 **:data-alert-title:text-blue-800',
      danger:
        'bg-red-50 **:data-alert-content:text-red-700 **:data-alert-icon:text-red-400 **:data-alert-title:text-red-800',
      warning:
        'bg-yellow-50 **:data-alert-content:text-yellow-700 **:data-alert-icon:text-yellow-400 **:data-alert-title:text-yellow-800',
      success:
        'bg-green-50 **:data-alert-content:text-green-700 **:data-alert-icon:text-green-400 **:data-alert-title:text-green-800'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

interface AlertProps
  extends ComponentProps<'div'>, VariantProps<typeof alertVariants> {}

export function Alert({ variant, className, children, ...props }: AlertProps) {
  return (
    <div {...props} className={cn(alertVariants({ variant, className }))}>
      <div className="flex gap-3">{children}</div>
    </div>
  )
}

export function AlertIcon({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      data-alert-icon
      className={cn('shrink-0 [&_svg]:size-5', className)}
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
      data-alert-title
      className={cn('text-sm font-medium', className)}
    />
  )
}

export function AlertContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div {...props} data-alert-content className={cn('text-sm', className)} />
  )
}
