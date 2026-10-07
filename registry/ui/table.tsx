import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

type TableProps = ComponentProps<"table"> & { size?: "sm" | "md" }

function Table(props: TableProps) {
  const { className, size = "md", ...rest } = props

  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        {...rest}
        data-slot="table"
        data-size={size}
        className={cn("group/table w-full caption-bottom text-sm", className)}
      />
    </div>
  )
}

type TableHeaderProps = ComponentProps<"thead">

function TableHeader(props: TableHeaderProps) {
  const { className, ...rest } = props

  return (
    <thead
      {...rest}
      data-slot="table-header"
      className={cn("bg-muted/40 [&_tr]:border-b", className)}
    />
  )
}

type TableBodyProps = ComponentProps<"tbody">

function TableBody(props: TableBodyProps) {
  const { className, ...rest } = props

  return (
    <tbody
      {...rest}
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
    />
  )
}

type TableFooterProps = ComponentProps<"tfoot">

function TableFooter(props: TableFooterProps) {
  const { className, ...rest } = props

  return (
    <tfoot
      {...rest}
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
    />
  )
}

type TableRowProps = ComponentProps<"tr">

function TableRow(props: TableRowProps) {
  const { className, ...rest } = props

  return (
    <tr
      {...rest}
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
    />
  )
}

type TableHeadProps = ComponentProps<"th">

function TableHead(props: TableHeadProps) {
  const { className, ...rest } = props

  return (
    <th
      {...rest}
      data-slot="table-head"
      className={cn(
        "h-11 px-6 text-start align-middle text-xs font-medium whitespace-nowrap text-muted-foreground group-data-[size=sm]/table:h-9 group-data-[size=sm]/table:px-5 [&:has([role=checkbox])]:pe-0",
        className
      )}
    />
  )
}

type TableCellProps = ComponentProps<"td">

function TableCell(props: TableCellProps) {
  const { className, ...rest } = props

  return (
    <td
      {...rest}
      data-slot="table-cell"
      className={cn(
        "h-18 px-6 py-4 align-middle whitespace-nowrap group-data-[size=sm]/table:h-16 group-data-[size=sm]/table:px-5 group-data-[size=sm]/table:py-3 [&:has([role=checkbox])]:pe-0",
        className
      )}
    />
  )
}

type TableCaptionProps = ComponentProps<"caption">

function TableCaption(props: TableCaptionProps) {
  const { className, ...rest } = props

  return (
    <caption
      {...rest}
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
    />
  )
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  type TableBodyProps,
  type TableCaptionProps,
  type TableCellProps,
  type TableFooterProps,
  type TableHeadProps,
  type TableHeaderProps,
  type TableProps,
  type TableRowProps,
}
