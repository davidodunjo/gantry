import { type ComponentProps } from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar"
import { Check } from "@untitledui/icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type MenubarProps = MenubarPrimitive.Props

function Menubar(props: MenubarProps) {
  const { className, ...rest } = props

  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={(state) =>
        cn(
          "flex min-h-10 items-center gap-1 rounded-lg bg-background p-1 shadow-xs ring-1 ring-border ring-inset",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type MenubarMenuProps = ComponentProps<typeof DropdownMenu>

function MenubarMenu(props: MenubarMenuProps) {
  return <DropdownMenu data-slot="menubar-menu" {...props} />
}

type MenubarGroupProps = ComponentProps<typeof DropdownMenuGroup>

function MenubarGroup(props: MenubarGroupProps) {
  return <DropdownMenuGroup data-slot="menubar-group" {...props} />
}

type MenubarPortalProps = ComponentProps<typeof DropdownMenuPortal>

function MenubarPortal(props: MenubarPortalProps) {
  return <DropdownMenuPortal data-slot="menubar-portal" {...props} />
}

type MenubarTriggerProps = ComponentProps<typeof DropdownMenuTrigger>

function MenubarTrigger(props: MenubarTriggerProps) {
  const { className, ...rest } = props

  return (
    <DropdownMenuTrigger
      data-slot="menubar-trigger"
      className={(state) =>
        cn(
          "flex items-center rounded-md px-3 py-1.5 text-sm font-semibold outline-hidden select-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset aria-expanded:bg-muted",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type MenubarContentProps = ComponentProps<typeof DropdownMenuContent>

function MenubarContent(props: MenubarContentProps) {
  const {
    className,
    align = "start",
    alignOffset = -4,
    sideOffset = 8,
    ...rest
  } = props

  return (
    <DropdownMenuContent
      data-slot="menubar-content"
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={(state) =>
        cn(
          "data-[side=bottom]:slide-in-from-top-0.5 data-[side=inline-end]:slide-in-from-left-0.5 data-[side=inline-start]:slide-in-from-right-0.5 data-[side=left]:slide-in-from-right-0.5 data-[side=right]:slide-in-from-left-0.5 data-[side=top]:slide-in-from-bottom-0.5 min-w-62 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type MenubarItemProps = ComponentProps<typeof DropdownMenuItem>

function MenubarItem(props: MenubarItemProps) {
  const { className, inset, variant = "default", ...rest } = props

  return (
    <DropdownMenuItem
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={(state) =>
        cn(
          "group/menubar-item min-h-9 gap-2 rounded-md px-2.5 py-2 text-sm font-semibold focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive!",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type MenubarCheckboxItemProps = MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}

function MenubarCheckboxItem(props: MenubarCheckboxItemProps) {
  const { className, children, inset, ...rest } = props

  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-inset={inset}
      className={(state) =>
        cn(
          "relative flex min-h-9 cursor-pointer items-center gap-2 rounded-md py-2 ps-8 pe-2.5 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <span className="pointer-events-none absolute start-2.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
        <MenuPrimitive.CheckboxItemIndicator>
          <Check />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

type MenubarRadioGroupProps = ComponentProps<typeof DropdownMenuRadioGroup>

function MenubarRadioGroup(props: MenubarRadioGroupProps) {
  return <DropdownMenuRadioGroup data-slot="menubar-radio-group" {...props} />
}

type MenubarRadioItemProps = MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}

function MenubarRadioItem(props: MenubarRadioItemProps) {
  const { className, children, inset, ...rest } = props

  return (
    <MenuPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-inset={inset}
      className={(state) =>
        cn(
          "relative flex min-h-9 cursor-pointer items-center gap-2 rounded-md py-2 ps-8 pe-2.5 text-sm font-semibold outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <span className="pointer-events-none absolute start-2.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
        <MenuPrimitive.RadioItemIndicator>
          <Check />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

type MenubarLabelProps = ComponentProps<typeof DropdownMenuLabel> & {
  inset?: boolean
}

function MenubarLabel(props: MenubarLabelProps) {
  const { className, inset, ...rest } = props

  return (
    <DropdownMenuLabel
      data-slot="menubar-label"
      data-inset={inset}
      className={(state) =>
        cn(
          "px-1.5 py-1 text-sm font-medium data-inset:ps-8",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type MenubarSeparatorProps = ComponentProps<typeof DropdownMenuSeparator>

function MenubarSeparator(props: MenubarSeparatorProps) {
  const { className, ...rest } = props

  return (
    <DropdownMenuSeparator
      data-slot="menubar-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...rest}
    />
  )
}

type MenubarShortcutProps = ComponentProps<typeof DropdownMenuShortcut>

function MenubarShortcut(props: MenubarShortcutProps) {
  const { className, ...rest } = props

  return (
    <DropdownMenuShortcut
      data-slot="menubar-shortcut"
      className={cn(
        "ms-auto font-mono text-xs text-muted-foreground group-focus/menubar-item:text-accent-foreground",
        className
      )}
      {...rest}
    />
  )
}

type MenubarSubProps = ComponentProps<typeof DropdownMenuSub>

function MenubarSub(props: MenubarSubProps) {
  return <DropdownMenuSub data-slot="menubar-sub" {...props} />
}

type MenubarSubTriggerProps = ComponentProps<typeof DropdownMenuSubTrigger> & {
  inset?: boolean
}

function MenubarSubTrigger(props: MenubarSubTriggerProps) {
  const { className, inset, ...rest } = props

  return (
    <DropdownMenuSubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={(state) =>
        cn(
          "min-h-9 gap-2 rounded-md px-2.5 py-2 text-sm font-semibold focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-inset:ps-8 data-open:bg-accent data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type MenubarSubContentProps = ComponentProps<typeof DropdownMenuSubContent>

function MenubarSubContent(props: MenubarSubContentProps) {
  const { className, ...rest } = props

  return (
    <DropdownMenuSubContent
      data-slot="menubar-sub-content"
      className={(state) =>
        cn(
          "data-[side=bottom]:slide-in-from-top-0.5 data-[side=left]:slide-in-from-right-0.5 data-[side=right]:slide-in-from-left-0.5 data-[side=top]:slide-in-from-bottom-0.5 min-w-62 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border duration-150 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
