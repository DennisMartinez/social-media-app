import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     Card body content goes here.
 *   </CardBody>
 *   <CardFooter>
 *     Card footer content goes here.
 *   </CardFooter>
 * </Card>
 */

const cardVariants = cva('flex flex-col gap-4 overflow-hidden bg-white', {
  variants: {
    size: {
      md: 'rounded-xl p-4',
      lg: 'rounded-2xl p-6',
      xl: 'rounded-3xl p-8'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

interface CardProps
  extends ComponentProps<'div'>, VariantProps<typeof cardVariants> {}

export function Card({ size, className, ...props }: CardProps) {
  return <div className={cn(cardVariants({ size, className }))} {...props} />
}

// Here for simplicity, CardHeader, CardBody, and CardFooter are just divs, but you can customize them as needed.
export function CardHeader(props: ComponentProps<'div'>) {
  return <div {...props} />
}

export function CardTitle({ className, ...props }: ComponentProps<'h2'>) {
  return <h2 className={cn('text-sm font-medium', className)} {...props} />
}

export function CardBody(props: ComponentProps<'div'>) {
  return <div {...props} />
}

export function CardFooter(props: ComponentProps<'div'>) {
  return <div {...props} />
}
