import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2Icon } from 'lucide-react'
import { type ComponentProps } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <Button>Click me</Button>
 * <Button variant="secondary" size="lg">Click me</Button>
 * <Button variant="ghost" size="sm" rounded="full">Click me</Button>
 */

const buttonVariants = cva(
  'flex items-center justify-center gap-2 border not-disabled:cursor-pointer focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border-blue-500 bg-blue-500 text-white not-disabled:hover:border-blue-700 not-disabled:hover:bg-blue-700',
        secondary:
          'border-gray-500 bg-gray-500 text-white not-disabled:hover:border-gray-700 not-disabled:hover:bg-gray-700',
        ghost:
          'border-transparent bg-transparent text-gray-500 not-disabled:hover:bg-gray-100',
        outline: 'border-gray-500 text-gray-500 not-disabled:hover:bg-gray-100'
      },
      size: {
        xs: 'px-2 py-1 text-xs font-semibold [&_svg]:size-4',
        sm: 'px-2 py-1 text-sm font-semibold [&_svg]:size-4',
        md: 'px-2.5 py-1.5 text-sm font-semibold [&_svg]:size-4',
        lg: 'px-3 py-2 text-sm font-semibold [&_svg]:size-4',
        xl: 'px-3.5 py-2.5 text-sm font-semibold [&_svg]:size-4'
      },
      radius: {
        full: 'rounded-full',
        xs: 'rounded-xs',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

interface ButtonProps
  extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export function Button({
  variant,
  size,
  radius,
  loading,
  className,
  children,
  ...props
}: ButtonProps) {
  const _radius = radius ?? size ?? 'md'
  const _disabled = props.disabled || loading

  return (
    <button
      {...props}
      disabled={_disabled}
      className={cn(
        buttonVariants({ variant, size, radius: _radius, className })
      )}>
      {loading && <Loader2Icon className="animate-spin" />}
      {children}
    </button>
  )
}
