import { type ComponentProps } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { X } from "@untitledui/icons"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-full text-sm font-medium whitespace-nowrap ring-1 ring-input transition-all outline-none ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground has-data-[slot=badge-remove]:gap-0.5 aria-invalid:ring-destructive [&>svg]:pointer-events-none [&>svg]:size-3 [&>svg]:stroke-[3px]",
  {
    variants: {
      size: {
        sm: "gap-1 px-2 py-0.5 text-xs has-data-[slot=badge-dot]:pl-1.5 has-data-[slot=badge-image]:pl-0.75 has-data-[slot=badge-remove]:pr-0.75",
        default:
          "px-2.5 py-0.5 text-sm has-data-[slot=badge-dot]:pl-2 has-data-[slot=badge-image]:pl-1 has-data-[slot=badge-remove]:pr-1",
        lg: "px-3 py-1 text-sm has-data-[slot=badge-dot]:pl-2.5 has-data-[slot=badge-image]:pl-1.5 has-data-[slot=badge-remove]:pr-1.5",
      },
      shape: {
        pill: "rounded-full",
        badge: "rounded-md",
        modern: "rounded-md shadow-xs",
      },
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive ring-destructive/20 dark:bg-destructive/20 [a]:hover:bg-destructive/20",
        outline: "bg-background text-foreground [a]:hover:bg-muted",
        ghost: "ring-transparent hover:bg-muted hover:text-muted-foreground",
        link: "text-primary underline-offset-4 ring-transparent hover:underline",
      },
      iconOnly: { true: "gap-0" },
    },
    compoundVariants: [
      {
        shape: ["badge", "modern"],
        size: "sm",
        className:
          "px-1.5 has-data-[slot=badge-dot]:pl-1.5 has-data-[slot=badge-image]:pl-1",
      },
      {
        shape: ["badge", "modern"],
        size: "default",
        className:
          "px-2 has-data-[slot=badge-dot]:pl-2 has-data-[slot=badge-image]:pl-1.5",
      },
      {
        shape: ["badge", "modern"],
        size: "lg",
        className:
          "rounded-lg px-2.5 has-data-[slot=badge-dot]:pl-2.5 has-data-[slot=badge-image]:pl-2",
      },
      { shape: "modern", className: "bg-background text-foreground" },
      { iconOnly: true, size: "sm", className: "p-1.25" },
      { iconOnly: true, size: "default", className: "p-1.5" },
      { iconOnly: true, size: "lg", className: "p-2" },
    ],
    defaultVariants: { variant: "default", size: "default", shape: "pill" },
  }
)

type BadgeProps = useRender.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>

function Badge(props: BadgeProps) {
  const {
    className,
    variant = "default",
    size = "default",
    shape = "pill",
    iconOnly,
    render,
    ...rest
  } = props

  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(
          badgeVariants({ variant, size, shape, iconOnly }),
          className
        ),
      },
      rest
    ),
    render,
    state: { slot: "badge", variant, size, shape },
  })
}

type BadgeDotProps = ComponentProps<"span">

function BadgeDot(props: BadgeDotProps) {
  const { className, ...rest } = props

  return (
    <span
      {...rest}
      data-slot="badge-dot"
      aria-hidden
      className={cn(
        "size-1.5 shrink-0 rounded-full bg-current opacity-70",
        className
      )}
    />
  )
}

type BadgeImageProps = ComponentProps<"img">

function BadgeImage(props: BadgeImageProps) {
  const { className, alt = "", ...rest } = props

  return (
    <img
      {...rest}
      alt={alt}
      data-slot="badge-image"
      className={cn("size-4 shrink-0 rounded-full object-cover", className)}
    />
  )
}

type BadgeCountProps = ComponentProps<"span">

function BadgeCount(props: BadgeCountProps) {
  const { className, ...rest } = props

  return (
    <span
      {...rest}
      data-slot="badge-count"
      className={cn(
        "rounded-full bg-current/10 px-1 text-[0.85em] leading-4 tabular-nums",
        className
      )}
    />
  )
}

type BadgeRemoveProps = ComponentProps<typeof ButtonPrimitive> & {
  "aria-label": string
}

function BadgeRemove(props: BadgeRemoveProps) {
  const { className, children, ...rest } = props

  return (
    <ButtonPrimitive
      {...rest}
      data-slot="badge-remove"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full p-0.5 text-current opacity-60 transition outline-none group-data-[shape=badge]/badge:rounded-[3px] group-data-[shape=modern]/badge:rounded-[3px] hover:bg-current/10 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-30 [&_svg]:size-3 [&_svg]:stroke-[3px]",
        className
      )}
    >
      {children ?? <X aria-hidden />}
    </ButtonPrimitive>
  )
}

export {
  Badge,
  BadgeCount,
  BadgeDot,
  BadgeImage,
  BadgeRemove,
  badgeVariants,
  type BadgeCountProps,
  type BadgeDotProps,
  type BadgeImageProps,
  type BadgeProps,
  type BadgeRemoveProps,
}
