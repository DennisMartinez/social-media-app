import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'
import { cn } from '../../utils'

const buttonVariants = cva('', {
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white hover:bg-blue-700',
      secondary: 'bg-gray-500 text-white hover:bg-gray-700',
      ghost: 'bg-transparent text-gray-500 hover:bg-gray-100',
      outline: 'border border-gray-500 text-gray-500 hover:bg-gray-100'
    },
    size: {
      sm: 'rounded px-2 py-1 text-xs font-semibold',
      md: 'rounded px-3 py-1 text-sm font-semibold'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

interface ButtonProps
  extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    />
  )
}
