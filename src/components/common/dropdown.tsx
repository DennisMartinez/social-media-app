import { Menu } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2Icon } from 'lucide-react'
import { cn } from '../../utils'

/**
 * Usage:
 *
 * <Dropdown>
 *   <DropdownTrigger>Open menu</DropdownTrigger>
 *   <DropdownMenu>
 *     <DropdownMenuItem>Menu item 1</DropdownMenuItem>
 *     <DropdownMenuItem>Menu item 2</DropdownMenuItem>
 *     <DropdownMenuItem>Menu item 3</DropdownMenuItem>
 *   </DropdownMenu>
 * </Dropdown>
 */

export function Dropdown(props: Menu.Root.Props) {
  return <Menu.Root {...props} />
}

export function DropdownTrigger({ className, ...props }: Menu.Trigger.Props) {
  return (
    <Menu.Trigger
      {...props}
      className={cn(
        'shrink-0 not-data-disabled:cursor-pointer data-disabled:cursor-not-allowed data-disabled:opacity-50',
        className
      )}
    />
  )
}

interface DropdownMenuProps extends Menu.Popup.Props {
  align?: Menu.Positioner.Props['align']
  side?: Menu.Positioner.Props['side']
  sideOffset?: Menu.Positioner.Props['sideOffset']
  alignOffset?: Menu.Positioner.Props['alignOffset']
}

export function DropdownMenu({
  sideOffset = 8,
  align,
  side,
  alignOffset,
  className,
  children,
  ...props
}: DropdownMenuProps) {
  return (
    <Menu.Portal>
      <Menu.Positioner
        className="outline-hidden"
        sideOffset={sideOffset}
        align={align}
        side={side}
        alignOffset={alignOffset}>
        <Menu.Popup
          {...props}
          className={cn(
            'overflow-hidden rounded-lg bg-white shadow',
            className
          )}>
          <div className="max-h-60 overflow-auto">{children}</div>
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  )
}

const dropdownMenuItemVariants = cva(
  'flex cursor-default items-center gap-2 not-data-disabled:cursor-pointer data-disabled:cursor-not-allowed data-disabled:opacity-50 [&_svg]:size-4',
  {
    variants: {
      variant: {
        primary: 'text-gray-900 data-highlighted:bg-gray-100',
        danger: 'text-red-900 data-highlighted:not-data-disabled:bg-red-100'
      },
      size: {
        md: 'px-4 py-2 text-sm'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

interface DropdownMenuItemProps
  extends Menu.Item.Props, VariantProps<typeof dropdownMenuItemVariants> {
  loading?: boolean
}

export function DropdownMenuItem({
  variant,
  size,
  loading,
  className,
  children,
  ...props
}: DropdownMenuItemProps) {
  const _disabled = props.disabled || loading

  return (
    <Menu.Item
      {...props}
      disabled={_disabled}
      className={cn(dropdownMenuItemVariants({ variant, size, className }))}>
      {loading && <Loader2Icon className="animate-spin" />}
      {children}
    </Menu.Item>
  )
}
