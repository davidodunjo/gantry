"use client"

import { Select as SelectPrimitive } from "@base-ui/react/select"
import { Check, ChevronDown, ChevronUp } from "@untitledui/icons"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

type SelectGroupProps = SelectPrimitive.Group.Props

function SelectGroup(props: SelectGroupProps) {
  const { className, ...rest } = props

  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      {...rest}
      className={(state) =>
        cn(
          "scroll-my-1 px-1.5 py-1",
          typeof className === "function" ? className(state) : className
        )
      }
    />
  )
}

type SelectValueProps = SelectPrimitive.Value.Props

function SelectValue(props: SelectValueProps) {
  const { className, ...rest } = props

  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      {...rest}
      className={(state) =>
        cn(
          "flex flex-1 text-start",
          typeof className === "function" ? className(state) : className
        )
      }
    />
  )
}

type SelectTriggerProps = SelectPrimitive.Trigger.Props & {
  size?: "sm" | "default" | "lg"
}

function SelectTrigger(props: SelectTriggerProps) {
  const { className, size = "default", children, ...rest } = props

  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      {...rest}
      className={(state) =>
        cn(
          "flex w-fit cursor-pointer items-center justify-between gap-2 rounded-lg bg-background px-3 text-base font-medium whitespace-nowrap shadow-xs ring-1 ring-input transition-shadow outline-none select-none ring-inset hover:ring-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive data-placeholder:text-muted-foreground data-popup-open:ring-2 data-popup-open:ring-foreground data-[size=default]:h-10 data-[size=lg]:h-11 data-[size=lg]:px-3.5 data-[size=lg]:text-base data-[size=sm]:h-9 data-[size=sm]:text-sm *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
          typeof className === "function" ? className(state) : className
        )
      }
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDown className="pointer-events-none size-4 text-muted-foreground" />
        }
      />
    </SelectPrimitive.Trigger>
  )
}

type SelectContentProps = SelectPrimitive.Popup.Props & {
  size?: "sm" | "default" | "lg"
} & Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >

function SelectContent(props: SelectContentProps) {
  const {
    className,
    children,
    side = "bottom",
    sideOffset = 6,
    align = "start",
    alignOffset = 0,
    alignItemWithTrigger = false,
    size = "default",
    ...rest
  } = props

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-size={size}
          data-align-trigger={alignItemWithTrigger}
          {...rest}
          className={(state) =>
            cn(
              "group/select-content relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-lg ring-1 ring-border duration-150 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
              typeof className === "function" ? className(state) : className
            )
          }
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

type SelectLabelProps = SelectPrimitive.GroupLabel.Props

function SelectLabel(props: SelectLabelProps) {
  const { className, ...rest } = props

  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      {...rest}
      className={(state) =>
        cn(
          "px-1.5 py-1 text-xs text-muted-foreground",
          typeof className === "function" ? className(state) : className
        )
      }
    />
  )
}

type SelectItemProps = SelectPrimitive.Item.Props

function SelectItem(props: SelectItemProps) {
  const { className, children, ...rest } = props

  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      {...rest}
      className={(state) =>
        cn(
          "relative flex min-h-9 w-full cursor-pointer items-center gap-2 rounded-md py-2 ps-2 pe-9 text-sm font-medium outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
          typeof className === "function" ? className(state) : className
        )
      }
    >
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute end-2.5 flex size-4 items-center justify-center" />
        }
      >
        <Check className="pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

type SelectSeparatorProps = SelectPrimitive.Separator.Props

function SelectSeparator(props: SelectSeparatorProps) {
  const { className, ...rest } = props

  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      {...rest}
      className={(state) =>
        cn(
          "pointer-events-none -mx-1 my-1 h-px bg-border",
          typeof className === "function" ? className(state) : className
        )
      }
    />
  )
}

type SelectScrollUpButtonProps = SelectPrimitive.ScrollUpArrow.Props

function SelectScrollUpButton(props: SelectScrollUpButtonProps) {
  const { className, ...rest } = props

  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      {...rest}
      className={(state) =>
        cn(
          "top-0 z-10 flex w-full cursor-pointer items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
    >
      <ChevronUp />
    </SelectPrimitive.ScrollUpArrow>
  )
}

type SelectScrollDownButtonProps = SelectPrimitive.ScrollDownArrow.Props

function SelectScrollDownButton(props: SelectScrollDownButtonProps) {
  const { className, ...rest } = props

  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      {...rest}
      className={(state) =>
        cn(
          "bottom-0 z-10 flex w-full cursor-pointer items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
    >
      <ChevronDown />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  type SelectContentProps,
  type SelectGroupProps,
  type SelectItemProps,
  type SelectLabelProps,
  type SelectScrollDownButtonProps,
  type SelectScrollUpButtonProps,
  type SelectSeparatorProps,
  type SelectTriggerProps,
  type SelectValueProps,
}
