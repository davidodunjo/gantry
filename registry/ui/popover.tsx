import { type ComponentProps } from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"

import { cn } from "@/lib/utils"

type PopoverProps = PopoverPrimitive.Root.Props

type PopoverTriggerProps = PopoverPrimitive.Trigger.Props

type PopoverContentProps = PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >

type PopoverHeaderProps = ComponentProps<"div">

type PopoverTitleProps = PopoverPrimitive.Title.Props

type PopoverDescriptionProps = PopoverPrimitive.Description.Props

function Popover(props: PopoverProps) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger(props: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent(props: PopoverContentProps) {
  const {
    className,
    align = "center",
    alignOffset = 0,
    side = "bottom",
    sideOffset = 6,
    ...rest
  } = props

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={(state) =>
            cn(
              "data-[side=bottom]:slide-in-from-top-0.5 data-[side=inline-end]:slide-in-from-left-0.5 data-[side=inline-start]:slide-in-from-right-0.5 data-[side=left]:slide-in-from-right-0.5 data-[side=right]:slide-in-from-left-0.5 data-[side=top]:slide-in-from-bottom-0.5 z-50 flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-lg bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-border outline-hidden duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
              typeof className === "function" ? className(state) : className
            )
          }
          {...rest}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

function PopoverHeader(props: PopoverHeaderProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-1 text-sm", className)}
      {...rest}
    />
  )
}

function PopoverTitle(props: PopoverTitleProps) {
  const { className, ...rest } = props

  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={(state) =>
        cn(
          "font-semibold",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

function PopoverDescription(props: PopoverDescriptionProps) {
  const { className, ...rest } = props

  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={(state) =>
        cn(
          "text-muted-foreground",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

export {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  type PopoverContentProps,
  type PopoverDescriptionProps,
  type PopoverHeaderProps,
  type PopoverProps,
  type PopoverTitleProps,
  type PopoverTriggerProps,
}
