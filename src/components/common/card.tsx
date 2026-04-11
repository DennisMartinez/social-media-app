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
 *
 * <Card variant="default" size="lg">
 *   <CardHeader>
 *     <CardTitle>Large Card</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     This is a larger card with more padding and rounded corners.
 *   </CardBody>
 * </Card>
 */

const cardVariants = cva('flex flex-col gap-4', {
  variants: {
    variant: {
      default: 'bg-white'
    },
    size: {
      md: 'rounded-xl p-4',
      lg: 'rounded-2xl p-6',
      xl: 'rounded-3xl p-8'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

interface CardProps
  extends ComponentProps<'div'>, VariantProps<typeof cardVariants> {}

export function Card({ variant, size, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(cardVariants({ variant, size, className }))}
    />
  )
}

// Here for simplicity, CardHeader, CardBody, and CardFooter are just divs, but you can customize them as needed.
export function CardHeader(props: ComponentProps<'div'>) {
  return <div {...props} />
}

export function CardTitle({ className, ...props }: ComponentProps<'h2'>) {
  return <h2 {...props} className={cn('text-sm font-medium', className)} />
}

export function CardBody(props: ComponentProps<'div'>) {
  return <div {...props} />
}

export function CardFooter(props: ComponentProps<'div'>) {
  return <div {...props} />
}
