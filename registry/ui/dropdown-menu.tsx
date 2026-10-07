import { type ComponentProps } from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { Check, ChevronRight } from "@untitledui/icons"

import { cn } from "@/lib/utils"

type DropdownMenuProps = MenuPrimitive.Root.Props

function DropdownMenu(props: DropdownMenuProps) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

type DropdownMenuPortalProps = MenuPrimitive.Portal.Props

function DropdownMenuPortal(props: DropdownMenuPortalProps) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

type DropdownMenuTriggerProps = MenuPrimitive.Trigger.Props

function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

type DropdownMenuContentProps = MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >

function DropdownMenuContent(props: DropdownMenuContentProps) {
  const {
    align = "start",
    alignOffset = 0,
    side = "bottom",
    sideOffset = 4,
    className,
    ...rest
  } = props

  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={(state) =>
            cn(
              "data-[side=bottom]:slide-in-from-top-0.5 data-[side=inline-end]:slide-in-from-left-0.5 data-[side=inline-start]:slide-in-from-right-0.5 data-[side=left]:slide-in-from-right-0.5 data-[side=right]:slide-in-from-left-0.5 data-[side=top]:slide-in-from-bottom-0.5 z-50 max-h-(--available-height) w-(--anchor-width) min-w-62 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border duration-150 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95",
              typeof className === "function" ? className(state) : className
            )
          }
          {...rest}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

type DropdownMenuGroupProps = MenuPrimitive.Group.Props

function DropdownMenuGroup(props: DropdownMenuGroupProps) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

type DropdownMenuLabelProps = MenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}

function DropdownMenuLabel(props: DropdownMenuLabelProps) {
  const { className, inset, ...rest } = props

  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
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

type DropdownMenuItemProps = MenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: "default" | "destructive"
}

function DropdownMenuItem(props: DropdownMenuItemProps) {
  const { className, inset, variant = "default", ...rest } = props

  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={(state) =>
        cn(
          "group/dropdown-menu-item relative flex min-h-9 cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type DropdownMenuSubProps = MenuPrimitive.SubmenuRoot.Props

function DropdownMenuSub(props: DropdownMenuSubProps) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

type DropdownMenuSubTriggerProps = MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}

function DropdownMenuSubTrigger(props: DropdownMenuSubTriggerProps) {
  const { className, inset, children, ...rest } = props

  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={(state) =>
        cn(
          "flex min-h-9 cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children}
      <ChevronRight className="ms-auto" />
    </MenuPrimitive.SubmenuTrigger>
  )
}

type DropdownMenuSubContentProps = ComponentProps<typeof DropdownMenuContent>

function DropdownMenuSubContent(props: DropdownMenuSubContentProps) {
  const {
    align = "start",
    alignOffset = -3,
    side = "right",
    sideOffset = 0,
    className,
    ...rest
  } = props

  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "data-[side=bottom]:slide-in-from-top-0.5 data-[side=left]:slide-in-from-right-0.5 data-[side=right]:slide-in-from-left-0.5 data-[side=top]:slide-in-from-bottom-0.5 w-auto min-w-48 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      )}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...rest}
    />
  )
}

type DropdownMenuCheckboxItemProps = MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}

function DropdownMenuCheckboxItem(props: DropdownMenuCheckboxItemProps) {
  const { className, children, inset, ...rest } = props

  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={(state) =>
        cn(
          "relative flex min-h-9 cursor-pointer items-center gap-2 rounded-md py-2 ps-2.5 pe-8 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <span
        className="pointer-events-none absolute end-2.5 flex items-center justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <Check />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

type DropdownMenuRadioGroupProps = MenuPrimitive.RadioGroup.Props

function DropdownMenuRadioGroup(props: DropdownMenuRadioGroupProps) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

type DropdownMenuRadioItemProps = MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}

function DropdownMenuRadioItem(props: DropdownMenuRadioItemProps) {
  const { className, children, inset, ...rest } = props

  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={(state) =>
        cn(
          "relative flex min-h-9 cursor-pointer items-center gap-2 rounded-md py-2 ps-2.5 pe-8 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <span
        className="pointer-events-none absolute end-2.5 flex items-center justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <Check />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

type DropdownMenuSeparatorProps = MenuPrimitive.Separator.Props

function DropdownMenuSeparator(props: DropdownMenuSeparatorProps) {
  const { className, ...rest } = props

  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
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

type DropdownMenuShortcutProps = ComponentProps<"span">

function DropdownMenuShortcut(props: DropdownMenuShortcutProps) {
  const { className, ...rest } = props

  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ms-auto shrink-0 font-mono text-xs whitespace-nowrap text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      {...rest}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
