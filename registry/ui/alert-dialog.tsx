import { type ComponentProps } from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"

import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type AlertDialogProps = AlertDialogPrimitive.Root.Props

type AlertDialogTriggerProps = AlertDialogPrimitive.Trigger.Props

type AlertDialogPortalProps = AlertDialogPrimitive.Portal.Props

type AlertDialogOverlayProps = AlertDialogPrimitive.Backdrop.Props

type AlertDialogContentProps = AlertDialogPrimitive.Popup.Props & {
  size?: "default" | "sm"
}

type AlertDialogHeaderProps = ComponentProps<"div">

type AlertDialogFooterProps = ComponentProps<"div">

type AlertDialogMediaProps = ComponentProps<"div">

type AlertDialogTitleProps = AlertDialogPrimitive.Title.Props

type AlertDialogDescriptionProps = AlertDialogPrimitive.Description.Props

type AlertDialogActionProps = ButtonProps

type AlertDialogCancelProps = AlertDialogPrimitive.Close.Props &
  Pick<ButtonProps, "variant" | "size">

function AlertDialog(props: AlertDialogProps) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger(props: AlertDialogTriggerProps) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal(props: AlertDialogPortalProps) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay(props: AlertDialogOverlayProps) {
  const { className, ...rest } = props

  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
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

function AlertDialogContent(props: AlertDialogContentProps) {
  const { className, size = "default", ...rest } = props

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={(state) =>
          cn(
            "group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-xl bg-popover p-6 text-popover-foreground shadow-xl ring-1 ring-border duration-200 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            typeof className === "function" ? className(state) : className
          )
        }
        {...rest}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader(props: AlertDialogHeaderProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col items-start gap-1 text-left", className)}
      {...rest}
    />
  )
}

function AlertDialogFooter(props: AlertDialogFooterProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn("grid grid-cols-2 gap-3 pt-2", className)}
      {...rest}
    />
  )
}

function AlertDialogMedia(props: AlertDialogMediaProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-background text-destructive shadow-xs ring-1 ring-border ring-inset *:[svg:not([class*='size-'])]:size-5",
        className
      )}
      {...rest}
    />
  )
}

function AlertDialogTitle(props: AlertDialogTitleProps) {
  const { className, ...rest } = props

  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
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

function AlertDialogDescription(props: AlertDialogDescriptionProps) {
  const { className, ...rest } = props

  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={(state) =>
        cn(
          "text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

function AlertDialogAction(props: AlertDialogActionProps) {
  return <Button data-slot="alert-dialog-action" {...props} />
}

function AlertDialogCancel(props: AlertDialogCancelProps) {
  const { variant = "outline", size = "default", ...rest } = props

  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      render={<Button variant={variant} size={size} />}
      {...rest}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  type AlertDialogActionProps,
  type AlertDialogCancelProps,
  type AlertDialogContentProps,
  type AlertDialogDescriptionProps,
  type AlertDialogFooterProps,
  type AlertDialogHeaderProps,
  type AlertDialogMediaProps,
  type AlertDialogOverlayProps,
  type AlertDialogPortalProps,
  type AlertDialogProps,
  type AlertDialogTitleProps,
  type AlertDialogTriggerProps,
}
