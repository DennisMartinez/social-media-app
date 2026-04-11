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

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 overflow-hidden rounded-lg bg-white p-4',
        className
      )}
      {...props}
    />
  )
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
