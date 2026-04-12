import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'

/**
 * Usage:
 *
 * <Tooltip>
 *   <TooltipTrigger>Hover me</TooltipTrigger>
 *   <TooltipContent>Tooltip content</TooltipContent>
 * </Tooltip>
 *
 * <Tooltip delay={500} closeDelay={200}>
 *   <TooltipTrigger>Hover me</TooltipTrigger>
 *   <TooltipContent align="start" side="top" sideOffset={10} alignOffset={5}>
 *     Tooltip content
 *   </TooltipContent>
 * </Tooltip>
 */

interface TooltipProps extends BaseTooltip.Root.Props {
  delay?: BaseTooltip.Provider.Props['delay']
  closeDelay?: BaseTooltip.Provider.Props['closeDelay']
}

export function Tooltip({ delay, closeDelay, ...props }: TooltipProps) {
  return (
    <BaseTooltip.Provider delay={delay} closeDelay={closeDelay}>
      <BaseTooltip.Root {...props} />
    </BaseTooltip.Provider>
  )
}

export function TooltipTrigger(props: BaseTooltip.Trigger.Props) {
  return <BaseTooltip.Trigger {...props} />
}

interface TooltipContentProps extends BaseTooltip.Popup.Props {
  align?: BaseTooltip.Positioner.Props['align']
  side?: BaseTooltip.Positioner.Props['side']
  sideOffset?: BaseTooltip.Positioner.Props['sideOffset']
  alignOffset?: BaseTooltip.Positioner.Props['alignOffset']
}

export function TooltipContent({
  align,
  side,
  sideOffset = 5,
  alignOffset,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner
        align={align}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignOffset}>
        <BaseTooltip.Popup
          {...props}
          className="relative rounded-lg bg-gray-900 px-2 py-1 text-xs text-white">
          <BaseTooltip.Arrow className="absolute -bottom-1 -z-1 size-2 rotate-45 bg-gray-900" />
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  )
}
