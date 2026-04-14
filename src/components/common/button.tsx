import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2Icon } from 'lucide-react'
import { type ComponentProps, type ElementType, type MouseEvent } from 'react'
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
  'flex items-center justify-center rounded-full border not-aria-disabled:cursor-pointer focus-visible:outline-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'border-blue-500 bg-blue-500 text-white not-aria-disabled:hover:border-blue-600 not-aria-disabled:hover:bg-blue-600',
        secondary:
          'border-gray-500 bg-gray-500 text-white not-aria-disabled:hover:border-gray-600 not-aria-disabled:hover:bg-gray-600',
        ghost:
          'border-transparent bg-transparent text-gray-500 not-aria-disabled:hover:bg-gray-100',
        outline:
          'border-gray-300 text-gray-500 not-aria-disabled:hover:bg-gray-100'
      },
      size: {
        xs: 'gap-1 px-2 py-1 text-xs font-semibold [&_svg]:size-4',
        sm: 'gap-2 px-2 py-1 text-sm font-semibold [&_svg]:size-4',
        md: 'gap-2 px-2.5 py-1.5 text-sm font-semibold [&_svg]:size-4',
        lg: 'gap-2 px-3 py-2 text-sm font-semibold [&_svg]:size-4',
        xl: 'gap-2 px-3.5 py-2.5 text-sm font-semibold [&_svg]:size-4'
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
  as = 'button',
  variant,
  size,
  loading,
  disabled,
  className,
  children,
  onClick,
  ...props
}: PolymorphicButtonProps<C>) {
  const _disabled = disabled || loading
  const Component = as || 'button'

  return (
    <Component
      {...props}
      disabled={as !== 'button' ? undefined : _disabled}
      aria-disabled={_disabled}
      tabIndex={_disabled ? -1 : 0}
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={(e: MouseEvent<C>) => {
        if (_disabled) {
          e.preventDefault()
          return
        }

        onClick?.(e)
      }}>
      {loading && (
        <Loader2Icon className="animate-spin" data-testid="button-loader" />
      )}
      {children}
    </Component>
  )
}
