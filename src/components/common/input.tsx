import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, type ElementType } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <Input placeholder="Enter your username" />
 * <Input type="email" placeholder="Enter your email" />
 * <Input type="password" placeholder="Enter your password" />
 * <Input variant="danger" placeholder="This is an error" />
 */

const inputVariants = cva(
  'block w-full rounded-full outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-white text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-600',
        secondary:
          'bg-gray-100 text-gray-900 outline-gray-100 placeholder:text-gray-400 focus:outline-gray-600',
        danger:
          'bg-red-100 text-red-900 outline-red-300 placeholder:text-red-400 focus:outline-red-600'
      },
      size: {
        md: 'px-3 py-1.5 text-base sm:text-sm/6'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
)

type PolymorphicInputProps<C extends ElementType> = ComponentProps<C> &
  VariantProps<typeof inputVariants> & {
    as?: C
  }

export function Input<C extends ElementType = 'input'>({
  as,
  variant,
  size,
  className,
  ...props
}: PolymorphicInputProps<C>) {
  const Component = as || 'input'

  return (
    <Component
      {...props}
      className={cn(inputVariants({ variant, size, className }))}
    />
  )
}
