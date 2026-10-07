import { type ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type EmptyProps = ComponentProps<"div">

function Empty(props: EmptyProps) {
  const { className, ...rest } = props

  return (
    <div
      {...rest}
      data-slot="empty"
      className={cn(
        "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-xl p-8 text-center text-balance",
        className
      )}
    />
  )
}

type EmptyHeaderProps = ComponentProps<"div">

function EmptyHeader(props: EmptyHeaderProps) {
  const { className, ...rest } = props

  return (
    <div
      {...rest}
      data-slot="empty-header"
      className={cn("flex max-w-sm flex-col items-center gap-2", className)}
    />
  )
}

const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-background text-muted-foreground shadow-xs ring-1 ring-border ring-inset [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

type EmptyMediaProps = ComponentProps<"div"> &
  VariantProps<typeof emptyMediaVariants>

function EmptyMedia(props: EmptyMediaProps) {
  const { className, variant = "default", ...rest } = props

  return (
    <div
      {...rest}
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant }), className)}
    />
  )
}

type EmptyTitleProps = ComponentProps<"div">

function EmptyTitle(props: EmptyTitleProps) {
  const { className, ...rest } = props

  return (
    <div
      {...rest}
      data-slot="empty-title"
      className={cn("font-heading text-lg font-semibold", className)}
    />
  )
}

type EmptyDescriptionProps = ComponentProps<"p">

function EmptyDescription(props: EmptyDescriptionProps) {
  const { className, ...rest } = props

  return (
    <p
      {...rest}
      data-slot="empty-description"
      className={cn(
        "text-sm/6 text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      )}
    />
  )
}

type EmptyContentProps = ComponentProps<"div">

function EmptyContent(props: EmptyContentProps) {
  const { className, ...rest } = props

  return (
    <div
      {...rest}
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance",
        className
      )}
    />
  )
}

export {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  type EmptyContentProps,
  type EmptyDescriptionProps,
  type EmptyHeaderProps,
  type EmptyMediaProps,
  type EmptyProps,
  type EmptyTitleProps,
}
