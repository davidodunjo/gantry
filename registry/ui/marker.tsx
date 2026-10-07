import { type ComponentProps } from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const markerVariants = cva(
  "group/marker relative flex min-h-4 w-full items-center gap-3 text-start text-sm font-medium text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [a]:underline [a]:underline-offset-3 [a]:hover:text-foreground",
  {
    variants: {
      variant: {
        default: "",
        separator:
          "before:me-1 before:h-px before:min-w-0 before:flex-1 before:bg-border after:ms-1 after:h-px after:min-w-0 after:flex-1 after:bg-border",
        border: "border-b border-border pb-2",
      },
    },
  }
)

type MarkerProps = useRender.ComponentProps<"div"> &
  VariantProps<typeof markerVariants>

function Marker(props: MarkerProps) {
  const { className, variant = "default", render, ...rest } = props

  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      { className: cn(markerVariants({ variant }), className) },
      rest
    ),
    render,
    state: {
      slot: "marker",
      variant,
    },
  })
}

type MarkerIconProps = ComponentProps<"span">

function MarkerIcon(props: MarkerIconProps) {
  const { className, ...rest } = props

  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn(
        "size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...rest}
    />
  )
}

type MarkerContentProps = ComponentProps<"span">

function MarkerContent(props: MarkerContentProps) {
  const { className, ...rest } = props

  return (
    <span
      data-slot="marker-content"
      className={cn(
        "min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...rest}
    />
  )
}

export { Marker, MarkerIcon, MarkerContent, markerVariants, type MarkerProps }
