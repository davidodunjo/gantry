"use client"

import { type ComponentProps, type ReactNode } from "react"
import { Check, SearchLg } from "@untitledui/icons"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type CommandProps = ComponentProps<typeof CommandPrimitive>

function Command(props: CommandProps) {
  const { className, ...rest } = props

  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex size-full flex-col overflow-hidden rounded-xl bg-popover text-popover-foreground",
        className
      )}
      {...rest}
    />
  )
}

type CommandDialogProps = Omit<ComponentProps<typeof Dialog>, "children"> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
  children: ReactNode
}

function CommandDialog(props: CommandDialogProps) {
  const {
    title = "Command Palette",
    description = "Search for a command to run...",
    children,
    className,
    showCloseButton = false,
    ...rest
  } = props

  return (
    <Dialog {...rest}>
      <DialogContent
        className={cn(
          "top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0",
          className
        )}
        showCloseButton={showCloseButton}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

type CommandInputProps = ComponentProps<typeof CommandPrimitive.Input>

function CommandInput(props: CommandInputProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-14 items-center gap-2 border-b border-border px-4"
    >
      <SearchLg
        aria-hidden="true"
        className="size-5 shrink-0 text-muted-foreground"
      />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "h-full w-full bg-transparent text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...rest}
      />
    </div>
  )
}

type CommandListProps = ComponentProps<typeof CommandPrimitive.List>

function CommandList(props: CommandListProps) {
  const { className, ...rest } = props

  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",
        className
      )}
      {...rest}
    />
  )
}

type CommandEmptyProps = ComponentProps<typeof CommandPrimitive.Empty>

function CommandEmpty(props: CommandEmptyProps) {
  const { className, ...rest } = props

  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("py-6 text-center text-sm", className)}
      {...rest}
    />
  )
}

type CommandGroupProps = ComponentProps<typeof CommandPrimitive.Group>

function CommandGroup(props: CommandGroupProps) {
  const { className, ...rest } = props

  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...rest}
    />
  )
}

type CommandSeparatorProps = ComponentProps<typeof CommandPrimitive.Separator>

function CommandSeparator(props: CommandSeparatorProps) {
  const { className, ...rest } = props

  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-1 h-px bg-border", className)}
      {...rest}
    />
  )
}

type CommandItemProps = ComponentProps<typeof CommandPrimitive.Item>

function CommandItem(props: CommandItemProps) {
  const { className, children, ...rest } = props

  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "group/command-item relative flex min-h-11 cursor-default items-center gap-2 rounded-md px-2.5 py-2 text-sm font-semibold outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground",
        className
      )}
      {...rest}
    >
      {children}
      <Check className="ms-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
    </CommandPrimitive.Item>
  )
}

type CommandShortcutProps = ComponentProps<"span">

function CommandShortcut(props: CommandShortcutProps) {
  const { className, ...rest } = props

  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ms-auto shrink-0 rounded border px-1 py-0.5 font-mono text-xs whitespace-nowrap text-muted-foreground group-data-selected/command-item:text-foreground",
        className
      )}
      {...rest}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  type CommandDialogProps,
  type CommandProps,
}
