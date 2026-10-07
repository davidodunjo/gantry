import { type ComponentProps } from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { ChevronRight, DotsHorizontal } from "@untitledui/icons"

import { cn } from "@/lib/utils"

type BreadcrumbProps = ComponentProps<"nav">

function Breadcrumb(props: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" {...props} data-slot="breadcrumb" />
}

type BreadcrumbListProps = ComponentProps<"ol">

function BreadcrumbList(props: BreadcrumbListProps) {
  const { className, ...rest } = props

  return (
    <ol
      {...rest}
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-3 text-sm wrap-break-word text-muted-foreground",
        className
      )}
    />
  )
}

type BreadcrumbItemProps = ComponentProps<"li">

function BreadcrumbItem(props: BreadcrumbItemProps) {
  const { className, ...rest } = props

  return (
    <li
      {...rest}
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1", className)}
    />
  )
}

type BreadcrumbLinkProps = useRender.ComponentProps<"a">

function BreadcrumbLink(props: BreadcrumbLinkProps) {
  const { className, render, ...rest } = props

  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn(
          "inline-flex items-center gap-2 rounded-md px-2 py-1 font-medium transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        ),
      },
      rest
    ),
    render,
    state: { slot: "breadcrumb-link" },
  })
}

type BreadcrumbPageProps = ComponentProps<"span">

function BreadcrumbPage(props: BreadcrumbPageProps) {
  const { className, ...rest } = props

  return (
    <span
      aria-current="page"
      {...rest}
      data-slot="breadcrumb-page"
      className={cn(
        "rounded-md bg-muted px-2 py-1 font-semibold text-foreground",
        className
      )}
    />
  )
}

type BreadcrumbSeparatorProps = ComponentProps<"li">

function BreadcrumbSeparator(props: BreadcrumbSeparatorProps) {
  const { className, children, ...rest } = props

  return (
    <li
      role="presentation"
      aria-hidden="true"
      {...rest}
      data-slot="breadcrumb-separator"
      className={cn(
        "text-muted-foreground/70 [&>svg]:size-4 rtl:[&>svg]:rotate-180",
        className
      )}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

type BreadcrumbEllipsisProps = ComponentProps<"span">

function BreadcrumbEllipsis(props: BreadcrumbEllipsisProps) {
  const { className, ...rest } = props

  return (
    <span
      role="presentation"
      aria-hidden="true"
      {...rest}
      data-slot="breadcrumb-ellipsis"
      className={cn(
        "flex size-5 items-center justify-center [&>svg]:size-4",
        className
      )}
    >
      <DotsHorizontal />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  type BreadcrumbEllipsisProps,
  type BreadcrumbItemProps,
  type BreadcrumbLinkProps,
  type BreadcrumbListProps,
  type BreadcrumbPageProps,
  type BreadcrumbProps,
  type BreadcrumbSeparatorProps,
}
