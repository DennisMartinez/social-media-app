import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <Badge variant="primary">Primary</Badge>
 * <Badge variant="secondary" size="sm">Secondary</Badge>
 */

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full border',
  {
    variants: {
      variant: {
        primary: 'border-blue-100 bg-blue-100 text-blue-700',
        secondary: 'border-gray-100 bg-gray-100 text-gray-700',
        success: 'border-green-100 bg-green-100 text-green-700',
        warning: 'border-yellow-100 bg-yellow-100 text-yellow-700',
        danger: 'border-red-100 bg-red-100 text-red-700',
        outline: 'border border-gray-300 bg-transparent text-gray-700'
      },
      size: {
        xs: 'px-1 py-0.5 text-xs font-medium [&_svg]:size-3',
        sm: 'px-1 py-0.5 text-xs font-medium [&_svg]:size-3',
        md: 'px-2 py-1 text-xs font-medium [&_svg]:size-4',
        lg: 'px-3 py-1.5 text-sm font-medium [&_svg]:size-5',
        xl: 'px-4 py-2 text-sm font-medium [&_svg]:size-6'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

interface BadgeProps
  extends ComponentProps<'span'>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={cn(badgeVariants({ variant, size, className }))}
    />
  )
}
