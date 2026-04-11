import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  type ReactNode
} from 'react'
import { Label } from './label'

/**
 * Usage:
 *
 * <FormField label="Username" required error="Username is required">
 *   <Input placeholder="Enter your username" />
 * </FormField>
 *
 * <FormField label="Email">
 *   {({ id }) => (
 *     <Input id={id} type="email" placeholder="Enter your email" />
 *   )}
 * </FormField>
 *
 * <FormField label="Password" required error="Password is required">
 *   <Input type="password" placeholder="Enter your password" />
 * </FormField>
 */

interface ChildrenProps {
  id: string
  required?: boolean
}

interface FormFieldProps {
  label?: ReactNode
  error?: ReactNode
  required?: boolean
  children: ReactNode | ((props: ChildrenProps) => ReactNode)
}

export function FormField({
  label,
  error,
  required,
  children
}: FormFieldProps) {
  const _id = useId()
  const id = `field-field-${_id}`
  const childrenProps: ChildrenProps = {
    id,
    required
  }

  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <span className="text-red-600">*</span>}
        </Label>
      )}
      {typeof children === 'function'
        ? children(childrenProps)
        : Children.map(children, (child) => {
            if (!isValidElement(child)) return child
            return cloneElement(child, childrenProps)
          })}
      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
