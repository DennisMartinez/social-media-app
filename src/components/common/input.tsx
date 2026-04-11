import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'
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
  'block w-full outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2',
  {
    variants: {
      variant: {
        default:
          'text-gray-900 outline-gray-300 placeholder:text-gray-400 focus:outline-blue-600',
        danger:
          'text-red-900 outline-red-300 placeholder:text-red-400 focus:outline-red-600'
      },
      size: {
        md: 'rounded-md px-3 py-1.5 text-base sm:text-sm/6'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
)

interface InputProps
  extends
    Omit<ComponentProps<'input'>, 'size'>,
    VariantProps<typeof inputVariants> {}

export function Input({ variant, size, className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(inputVariants({ variant, size, className }))}
    />
  )
}
