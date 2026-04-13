import { cva, type VariantProps } from 'class-variance-authority'
import { useState, type ComponentProps } from 'react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <Avatar name="John Doe" url="https://example.com/avatar.jpg" />
 * <Avatar name="John Doe" size="lg" />
 * <Avatar name="John Doe" variant="default" size="sm"  />
 */

const avatarVariants = cva(
  'flex shrink-0 items-center justify-center overflow-hidden rounded-full select-none',
  {
    variants: {
      variant: {
        default: 'bg-blue-50 text-blue-900'
      },
      size: {
        xs: 'size-6 text-xs',
        sm: 'size-8 text-sm',
        md: 'size-10 text-base',
        lg: 'size-12 text-lg',
        xl: 'size-14 text-xl'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
)

interface AvatarProps
  extends ComponentProps<'div'>, VariantProps<typeof avatarVariants> {
  name?: string | null
  url?: string | null
}

export function Avatar({
  variant,
  size,
  name,
  url,
  className,
  ...props
}: AvatarProps) {
  const [showAvatar, setShowAvatar] = useState(!!url)

  return (
    <div
      {...props}
      className={cn(avatarVariants({ variant, size, className }))}>
      {showAvatar && url ? (
        <img
          src={url}
          width="40"
          height="40"
          className="size-full object-cover"
          onError={() => setShowAvatar(false)}
          onDragStart={(e) => e.preventDefault()}
        />
      ) : (
        getInitials(name ?? '??')
      )}
    </div>
  )
}

function getInitials(name: string) {
  const names = name.split(' ')

  if (names.length === 1) {
    return names.at(0)?.charAt(0) || ''
  }

  return [names.at(0)?.charAt(0), names.at(-1)?.charAt(0)]
    .filter((item): item is string => !!item)
    .map((char) => char.toUpperCase())
    .join('')
}
