"use client"

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"

import { cn } from "@/lib/utils"

type HoverCardProps = PreviewCardPrimitive.Root.Props

type HoverCardTriggerProps = PreviewCardPrimitive.Trigger.Props

type HoverCardContentProps = PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >

function HoverCard(props: HoverCardProps) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger(props: HoverCardTriggerProps) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent(props: HoverCardContentProps) {
  const {
    className,
    side = "bottom",
    sideOffset = 6,
    align = "center",
    alignOffset = 0,
    ...rest
  } = props

  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={(state) =>
            cn(
              "data-[side=bottom]:slide-in-from-top-0.5 data-[side=inline-end]:slide-in-from-left-0.5 data-[side=inline-start]:slide-in-from-right-0.5 data-[side=left]:slide-in-from-right-0.5 data-[side=right]:slide-in-from-left-0.5 data-[side=top]:slide-in-from-bottom-0.5 z-50 w-64 origin-(--transform-origin) rounded-lg bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-border outline-hidden duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
              typeof className === "function" ? className(state) : className
            )
          }
          {...rest}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

export {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  type HoverCardContentProps,
  type HoverCardProps,
  type HoverCardTriggerProps,
}
