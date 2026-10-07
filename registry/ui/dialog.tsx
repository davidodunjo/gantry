"use client"

import { type ComponentProps } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { XClose } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type DialogProps = DialogPrimitive.Root.Props

type DialogTriggerProps = DialogPrimitive.Trigger.Props

type DialogPortalProps = DialogPrimitive.Portal.Props

type DialogCloseProps = DialogPrimitive.Close.Props

type DialogOverlayProps = DialogPrimitive.Backdrop.Props

type DialogContentProps = DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
}

type DialogHeaderProps = ComponentProps<"div">

type DialogFooterProps = ComponentProps<"div"> & {
  showCloseButton?: boolean
}

type DialogTitleProps = DialogPrimitive.Title.Props

type DialogDescriptionProps = DialogPrimitive.Description.Props

function Dialog(props: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal(props: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay(props: DialogOverlayProps) {
  const { className, ...rest } = props

  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={(state) =>
        cn(
          "fixed inset-0 isolate z-50 bg-black/60 duration-200 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

function DialogContent(props: DialogContentProps) {
  const { className, children, showCloseButton = true, ...rest } = props

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={(state) =>
          cn(
            "fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-xl bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-border duration-200 outline-none sm:max-w-120 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            typeof className === "function" ? className(state) : className
          )
        }
        {...rest}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
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
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  )
}

function DialogHeader(props: DialogHeaderProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...rest}
    />
  )
}

function DialogFooter(props: DialogFooterProps) {
  const { className, showCloseButton = false, children, ...rest } = props

  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end",
        className
      )}
      {...rest}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle(props: DialogTitleProps) {
  const { className, ...rest } = props

  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={(state) =>
        cn(
          "font-heading text-lg leading-7 font-semibold",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

function DialogDescription(props: DialogDescriptionProps) {
  const { className, ...rest } = props

  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={(state) =>
        cn(
          "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  type DialogCloseProps,
  type DialogContentProps,
  type DialogDescriptionProps,
  type DialogFooterProps,
  type DialogHeaderProps,
  type DialogOverlayProps,
  type DialogPortalProps,
  type DialogProps,
  type DialogTitleProps,
  type DialogTriggerProps,
}
