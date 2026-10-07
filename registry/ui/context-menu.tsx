import { type ComponentProps } from "react"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"
import { Check, ChevronRight } from "@untitledui/icons"

import { cn } from "@/lib/utils"

type ContextMenuProps = ContextMenuPrimitive.Root.Props

function ContextMenu(props: ContextMenuProps) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

type ContextMenuPortalProps = ContextMenuPrimitive.Portal.Props

function ContextMenuPortal(props: ContextMenuPortalProps) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

type ContextMenuTriggerProps = ContextMenuPrimitive.Trigger.Props

function ContextMenuTrigger(props: ContextMenuTriggerProps) {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={(state) =>
        cn(
          "select-none",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ContextMenuContentProps = ContextMenuPrimitive.Popup.Props &
  Pick<
    ContextMenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >

function ContextMenuContent(props: ContextMenuContentProps) {
  const {
    className,
    align = "start",
    alignOffset = 4,
    side = "right",
    sideOffset = 0,
    ...rest
  } = props

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-content"
          className={(state) =>
            cn(
              "data-[side=bottom]:slide-in-from-top-0.5 data-[side=inline-end]:slide-in-from-left-0.5 data-[side=inline-start]:slide-in-from-right-0.5 data-[side=left]:slide-in-from-right-0.5 data-[side=right]:slide-in-from-left-0.5 data-[side=top]:slide-in-from-bottom-0.5 z-50 max-h-(--available-height) min-w-62 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border duration-150 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
              typeof className === "function" ? className(state) : className
            )
          }
          {...rest}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  )
}

type ContextMenuGroupProps = ContextMenuPrimitive.Group.Props

function ContextMenuGroup(props: ContextMenuGroupProps) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

type ContextMenuLabelProps = ContextMenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}

function ContextMenuLabel(props: ContextMenuLabelProps) {
  const { className, inset, ...rest } = props

  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={(state) =>
        cn(
          "px-2.5 py-2 text-xs font-medium text-muted-foreground data-inset:ps-8",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ContextMenuItemProps = ContextMenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}

function ContextMenuItem(props: ContextMenuItemProps) {
  const { className, inset, variant = "default", ...rest } = props

  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={(state) =>
        cn(
          "group/context-menu-item relative flex min-h-9 cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:*:[svg]:text-accent-foreground data-[variant=destructive]:*:[svg]:text-destructive",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ContextMenuSubProps = ContextMenuPrimitive.SubmenuRoot.Props

function ContextMenuSub(props: ContextMenuSubProps) {
  return (
    <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
  )
}

type ContextMenuSubTriggerProps = ContextMenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}

function ContextMenuSubTrigger(props: ContextMenuSubTriggerProps) {
  const { className, inset, children, ...rest } = props

  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={(state) =>
        cn(
          "flex min-h-9 cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children}
      <ChevronRight className="ms-auto" />
    </ContextMenuPrimitive.SubmenuTrigger>
  )
}

type ContextMenuSubContentProps = ComponentProps<typeof ContextMenuContent>

function ContextMenuSubContent(props: ContextMenuSubContentProps) {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
      className="shadow-lg"
      side="right"
      {...props}
    />
  )
}

type ContextMenuCheckboxItemProps = ContextMenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}

function ContextMenuCheckboxItem(props: ContextMenuCheckboxItemProps) {
  const { className, children, inset, ...rest } = props

  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={(state) =>
        cn(
          "relative flex min-h-9 cursor-pointer items-center gap-2 rounded-md py-2 ps-2.5 pe-8 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <span className="pointer-events-none absolute end-2.5">
        <ContextMenuPrimitive.CheckboxItemIndicator>
          <Check />
        </ContextMenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

type ContextMenuRadioGroupProps = ContextMenuPrimitive.RadioGroup.Props

function ContextMenuRadioGroup(props: ContextMenuRadioGroupProps) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

type ContextMenuRadioItemProps = ContextMenuPrimitive.RadioItem.Props & {
  inset?: boolean
}

function ContextMenuRadioItem(props: ContextMenuRadioItemProps) {
  const { className, children, inset, ...rest } = props

  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={inset}
      className={(state) =>
        cn(
          "relative flex min-h-9 cursor-pointer items-center gap-2 rounded-md py-2 ps-2.5 pe-8 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <span className="pointer-events-none absolute end-2.5">
        <ContextMenuPrimitive.RadioItemIndicator>
          <Check />
        </ContextMenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

type ContextMenuSeparatorProps = ContextMenuPrimitive.Separator.Props

function ContextMenuSeparator(props: ContextMenuSeparatorProps) {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={(state) =>
        cn(
          "-mx-1 my-1 h-px bg-border",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ContextMenuShortcutProps = ComponentProps<"span">

function ContextMenuShortcut(props: ContextMenuShortcutProps) {
  const { className, ...rest } = props

  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "ms-auto shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground group-focus/context-menu-item:text-accent-foreground",
        className
      )}
      {...rest}
    />
  )
}

export {
  ContextMenu,
  ContextMenuPortal,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
}
