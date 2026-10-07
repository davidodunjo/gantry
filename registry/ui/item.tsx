import { type ComponentProps } from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type ItemGroupProps = ComponentProps<"div">

function ItemGroup(props: ItemGroupProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="item-group"
      {...rest}
      className={cn(
        "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
        className
      )}
    />
  )
}

type ItemSeparatorProps = ComponentProps<typeof Separator>

function ItemSeparator(props: ItemSeparatorProps) {
  const { className, ...rest } = props

  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      {...rest}
      className={(state) =>
        cn(
          "my-2",
          typeof className === "function" ? className(state) : className
        )
      }
    />
  )
}

const itemVariants = cva(
  "group/item flex w-full flex-wrap items-center rounded-lg border text-sm transition-colors duration-100 outline-none focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background [a]:transition-colors [a]:hover:bg-muted",
  {
    variants: {
      variant: {
        default: "border-transparent",
        outline: "border-border bg-card shadow-xs",
        muted: "border-transparent bg-muted/50",
      },
      size: {
        default: "gap-4 p-4",
        sm: "gap-3 p-3",
        xs: "gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

type ItemProps = useRender.ComponentProps<"div"> &
  VariantProps<typeof itemVariants>

function Item(props: ItemProps) {
  const {
    className,
    variant = "default",
    size = "default",
    render,
    ...rest
  } = props

  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      { className: cn(itemVariants({ variant, size }), className) },
      rest
    ),
    render,
    state: { slot: "item", variant, size },
  })
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-10 rounded-lg border border-border bg-background shadow-xs [&_svg:not([class*='size-'])]:size-5",
        image:
          "size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

type ItemMediaProps = ComponentProps<"div"> &
  VariantProps<typeof itemMediaVariants>

function ItemMedia(props: ItemMediaProps) {
  const { className, variant = "default", ...rest } = props

  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      {...rest}
      className={cn(itemMediaVariants({ variant }), className)}
    />
  )
}

type ItemContentProps = ComponentProps<"div">

function ItemContent(props: ItemContentProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="item-content"
      {...rest}
      className={cn(
        "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=item-content]]:flex-none",
        className
      )}
    />
  )
}

type ItemTitleProps = ComponentProps<"div">

function ItemTitle(props: ItemTitleProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="item-title"
      {...rest}
      className={cn(
        "line-clamp-1 flex w-fit items-center gap-2 text-sm leading-5 font-semibold underline-offset-4",
        className
      )}
    />
  )
}

type ItemDescriptionProps = ComponentProps<"p">

function ItemDescription(props: ItemDescriptionProps) {
  const { className, ...rest } = props

  return (
    <p
      data-slot="item-description"
      {...rest}
      className={cn(
        "line-clamp-2 text-start text-sm leading-normal font-normal text-muted-foreground group-data-[size=xs]/item:text-xs [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      )}
    />
  )
}

type ItemActionsProps = ComponentProps<"div">

function ItemActions(props: ItemActionsProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="item-actions"
      {...rest}
      className={cn("flex items-center gap-2", className)}
    />
  )
}

type ItemHeaderProps = ComponentProps<"div">

function ItemHeader(props: ItemHeaderProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="item-header"
      {...rest}
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
    />
  )
}

type ItemFooterProps = ComponentProps<"div">

function ItemFooter(props: ItemFooterProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="item-footer"
      {...rest}
      className={cn(
        "flex basis-full items-center justify-between gap-2",
        className
      )}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
  itemVariants,
  itemMediaVariants,
  type ItemProps,
  type ItemMediaProps,
  type ItemContentProps,
  type ItemActionsProps,
  type ItemGroupProps,
  type ItemSeparatorProps,
  type ItemTitleProps,
  type ItemDescriptionProps,
  type ItemHeaderProps,
  type ItemFooterProps,
}
