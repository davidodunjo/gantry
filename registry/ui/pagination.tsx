import { type ComponentProps } from "react"
import { ArrowLeft, ArrowRight, DotsHorizontal } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PaginationProps = ComponentProps<"nav">

function Pagination(props: PaginationProps) {
  const { className, ...rest } = props

  return (
    <nav
      aria-label="pagination"
      {...rest}
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
    />
  )
}

type PaginationContentProps = ComponentProps<"ul">

function PaginationContent(props: PaginationContentProps) {
  const { className, ...rest } = props

  return (
    <ul
      {...rest}
      data-slot="pagination-content"
      className={cn("flex items-center gap-0.5", className)}
    />
  )
}

type PaginationItemProps = ComponentProps<"li">

function PaginationItem(props: PaginationItemProps) {
  return <li {...props} data-slot="pagination-item" />
}

type PaginationLinkProps = ComponentProps<"a"> &
  Pick<ComponentProps<typeof Button>, "size"> & {
    isActive?: boolean
  }

function PaginationLink(props: PaginationLinkProps) {
  const { className, isActive, size = "icon-sm", ...rest } = props

  return (
    <Button
      variant="ghost"
      size={size}
      className={cn(
        "aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:hover:bg-transparent [&_svg]:opacity-65 [&_svg]:transition-opacity [&_svg]:duration-100 [&_svg]:ease-linear hover:[&_svg]:opacity-80",
        isActive && "bg-muted text-foreground",
        className
      )}
      nativeButton={false}
      render={
        <a
          aria-current={isActive ? "page" : undefined}
          {...rest}
          data-slot="pagination-link"
          data-active={isActive}
        />
      }
    />
  )
}

type PaginationPreviousProps = PaginationLinkProps & { text?: string }

function PaginationPrevious(props: PaginationPreviousProps) {
  const { className, text = "Previous", ...rest } = props

  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      {...rest}
      className={cn("gap-2 rtl:[&_svg]:rotate-180", className)}
    >
      <ArrowLeft data-icon="inline-start" />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  )
}

type PaginationNextProps = PaginationLinkProps & { text?: string }

function PaginationNext(props: PaginationNextProps) {
  const { className, text = "Next", ...rest } = props

  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      {...rest}
      className={cn("gap-2 rtl:[&_svg]:rotate-180", className)}
    >
      <span className="hidden sm:block">{text}</span>
      <ArrowRight data-icon="inline-end" />
    </PaginationLink>
  )
}

type PaginationEllipsisProps = ComponentProps<"span">

function PaginationEllipsis(props: PaginationEllipsisProps) {
  const { className, ...rest } = props

  return (
    <span
      aria-hidden
      {...rest}
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-9 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
        className
      )}
    >
      <DotsHorizontal />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  type PaginationContentProps,
  type PaginationEllipsisProps,
  type PaginationItemProps,
  type PaginationLinkProps,
  type PaginationNextProps,
  type PaginationPreviousProps,
  type PaginationProps,
}
