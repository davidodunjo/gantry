import { type ComponentProps } from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { XClose } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type SheetProps = SheetPrimitive.Root.Props

type SheetTriggerProps = SheetPrimitive.Trigger.Props

type SheetCloseProps = SheetPrimitive.Close.Props

type SheetPortalProps = SheetPrimitive.Portal.Props

type SheetOverlayProps = SheetPrimitive.Backdrop.Props

type SheetContentProps = SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}

type SheetHeaderProps = ComponentProps<"div">

type SheetFooterProps = ComponentProps<"div">

type SheetTitleProps = SheetPrimitive.Title.Props

type SheetDescriptionProps = SheetPrimitive.Description.Props

function Sheet(props: SheetProps) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger(props: SheetTriggerProps) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose(props: SheetCloseProps) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal(props: SheetPortalProps) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay(props: SheetOverlayProps) {
  const { className, ...rest } = props

  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={(state) =>
        cn(
          "fixed inset-0 z-50 bg-black/60 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

function SheetContent(props: SheetContentProps) {
  const {
    className,
    children,
    side = "right",
    showCloseButton = true,
    ...rest
  } = props

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={(state) =>
          cn(
            "fixed z-50 flex flex-col gap-6 overflow-y-auto bg-popover bg-clip-padding text-sm text-popover-foreground shadow-xl transition duration-300 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-100 data-[side=right]:sm:max-w-100",
            typeof className === "function" ? className(state) : className
          )
        }
        {...rest}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-3 right-3"
                size="icon-sm"
              />
            }
          >
            <XClose />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader(props: SheetHeaderProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1 px-6 pe-14 pt-6", className)}
      {...rest}
    />
  )
}

function SheetFooter(props: SheetFooterProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-3 border-t p-6", className)}
      {...rest}
    />
  )
}

function SheetTitle(props: SheetTitleProps) {
  const { className, ...rest } = props

  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={(state) =>
        cn(
          "font-heading text-lg leading-7 font-semibold text-foreground",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

function SheetDescription(props: SheetDescriptionProps) {
  const { className, ...rest } = props

  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={(state) =>
        cn(
          "text-sm text-muted-foreground",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  type SheetCloseProps,
  type SheetContentProps,
  type SheetDescriptionProps,
  type SheetFooterProps,
  type SheetHeaderProps,
  type SheetOverlayProps,
  type SheetPortalProps,
  type SheetProps,
  type SheetTitleProps,
  type SheetTriggerProps,
}
