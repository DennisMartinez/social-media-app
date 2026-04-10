import { Avatar as BaseAvatar } from '@base-ui/react/avatar'
import { cva, type VariantProps } from 'class-variance-authority'
import { useState } from 'react'
import { cn } from '../../utils'

const avatarVariants = cva(
  'flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-50 text-blue-900 select-none',
  {
    variants: {
      size: {
        sm: 'h-6 w-6 text-sm font-medium',
        md: 'h-10 w-10 text-sm font-medium',
        lg: 'h-16 w-16 text-base font-medium'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

interface AvatarProps
  extends BaseAvatar.Root.Props, VariantProps<typeof avatarVariants> {
  name: string
  url?: string | null
}

export function Avatar({ size, name, url, className, ...props }: AvatarProps) {
  const [showAvatar, setShowAvatar] = useState(!!url)

  return (
    <BaseAvatar.Root
      {...props}
      className={cn(avatarVariants({ size, className }))}>
      {showAvatar && url && (
        <BaseAvatar.Image
          src={url}
          width="40"
          height="40"
          className="size-full object-cover"
          onError={() => setShowAvatar(false)}
          onDragStart={(e) => e.preventDefault()}
        />
      )}
      <BaseAvatar.Fallback>{getInitials(name)}</BaseAvatar.Fallback>
    </BaseAvatar.Root>
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
