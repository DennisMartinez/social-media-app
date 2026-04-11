import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <Label htmlFor="username">Username</Label>
 * <Label htmlFor="email">Email</Label>
 * <Label htmlFor="password">Password</Label>
 */

const labelVariants = cva('inline-flex gap-1', {
  variants: {
    variant: {
      default: 'text-gray-900'
    },
    size: {
      md: 'text-sm/6 font-medium'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

interface LabelProps
  extends ComponentProps<'label'>, VariantProps<typeof labelVariants> {}

export function Label({ variant, size, className, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={cn(labelVariants({ variant, size, className }))}
    />
  )
}
