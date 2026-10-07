import { type ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "group/alert relative grid w-full gap-1 rounded-xl border p-4 text-start text-sm shadow-xs has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "border-destructive/30 bg-destructive/5 text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type AlertProps = ComponentProps<"div"> & VariantProps<typeof alertVariants>

function Alert(props: AlertProps) {
  const { className, variant, ...rest } = props

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...rest}
    />
  )
}

type AlertTitleProps = ComponentProps<"div">

function AlertTitle(props: AlertTitleProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-semibold group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...rest}
    />
  )
}

type AlertDescriptionProps = ComponentProps<"div">

function AlertDescription(props: AlertDescriptionProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...rest}
    />
  )
}

type AlertActionProps = ComponentProps<"div">

function AlertAction(props: AlertActionProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="alert-action"
      className={cn(
        "mt-2 flex items-center gap-3 group-has-[>svg]/alert:col-start-2 [&>a]:h-auto [&>a]:p-0 [&>button]:h-auto [&>button]:p-0",
        className
      )}
      {...rest}
    />
  )
}

export {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  type AlertActionProps,
  type AlertDescriptionProps,
  type AlertProps,
  type AlertTitleProps,
}
