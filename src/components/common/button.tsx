import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2Icon } from 'lucide-react'
import { type ComponentProps, type ElementType } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <Button>Click me</Button>
 * <Button variant="secondary" size="lg">Click me</Button>
 * <Button variant="ghost" size="sm" rounded="full">Click me</Button>
 * <Button as={Link} size="xs" rounded="md">Click me</Button>
 */

const buttonVariants = cva(
  'flex items-center justify-center gap-2 rounded-full border not-disabled:cursor-pointer focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border-blue-500 bg-blue-500 text-white not-disabled:hover:border-blue-600 not-disabled:hover:bg-blue-600',
        secondary:
          'border-gray-500 bg-gray-500 text-white not-disabled:hover:border-gray-600 not-disabled:hover:bg-gray-600',
        ghost:
          'border-transparent bg-transparent text-gray-500 not-disabled:hover:bg-gray-100',
        outline: 'border-gray-300 text-gray-500 not-disabled:hover:bg-gray-100'
      },
      size: {
        xs: 'px-2 py-1 text-xs font-semibold [&_svg]:size-4',
        sm: 'px-2 py-1 text-sm font-semibold [&_svg]:size-4',
        md: 'px-2.5 py-1.5 text-sm font-semibold [&_svg]:size-4',
        lg: 'px-3 py-2 text-sm font-semibold [&_svg]:size-4',
        xl: 'px-3.5 py-2.5 text-sm font-semibold [&_svg]:size-4'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

type PolymorphicButtonProps<C extends ElementType> = ComponentProps<C> &
  VariantProps<typeof buttonVariants> & {
    as?: C
    loading?: boolean
  }

export function Button<C extends ElementType = 'button'>({
  as,
  variant,
  size,
  loading,
  className,
  children,
  ...props
}: PolymorphicButtonProps<C>) {
  const _disabled = props.disabled || loading
  const Component = as || 'button'

  return (
    <Component
      {...props}
      disabled={_disabled}
      className={cn(buttonVariants({ variant, size, className }))}>
      {loading && <Loader2Icon className="animate-spin" />}
      {children}
    </Component>
  )
}
