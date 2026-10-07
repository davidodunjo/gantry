import { type ComponentPropsWithRef, type Ref, useRef } from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"
import { Check, ChevronDown, XClose } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { cn } from "@/lib/utils"

const Combobox = ComboboxPrimitive.Root

type ComboboxValueProps = ComboboxPrimitive.Value.Props

function ComboboxValue(props: ComboboxValueProps) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

type ComboboxTriggerProps = ComboboxPrimitive.Trigger.Props

function ComboboxTrigger(props: ComboboxTriggerProps) {
  const { className, children, ...rest } = props

  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={(state) =>
        cn(
          "[&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children}
      <ChevronDown className="pointer-events-none size-4 text-muted-foreground" />
    </ComboboxPrimitive.Trigger>
  )
}

type ComboboxClearProps = ComboboxPrimitive.Clear.Props

function ComboboxClear(props: ComboboxClearProps) {
  const { className, ...rest } = props

  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      aria-label="Clear selection"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...rest}
    >
      <XClose className="pointer-events-none" />
    </ComboboxPrimitive.Clear>
  )
}

type ComboboxInputProps = ComboboxPrimitive.Input.Props & {
  anchorRef?: Ref<HTMLDivElement>
  showTrigger?: boolean
  showClear?: boolean
  controlSize?: "sm" | "default" | "lg"
}

function ComboboxInput(props: ComboboxInputProps) {
  const {
    className,
    children,
    disabled = false,
    showTrigger = true,
    showClear = false,
    controlSize = "default",
    anchorRef,
    ...rest
  } = props

  return (
    <InputGroup
      ref={anchorRef}
      controlSize={controlSize}
      className={cn(
        "w-auto",
        typeof className === "string" ? className : undefined
      )}
    >
      <ComboboxPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        className={typeof className === "function" ? className : undefined}
        {...rest}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            render={<ComboboxTrigger />}
            data-slot="input-group-button"
            aria-label="Show options"
            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
            disabled={disabled}
          />
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  )
}

type ComboboxContentProps = ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >

function ComboboxContent(props: ComboboxContentProps) {
  const {
    className,
    side = "bottom",
    sideOffset = 6,
    align = "start",
    alignOffset = 0,
    anchor,
    ...rest
  } = props

  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={(state) =>
            cn(
              "group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-(--anchor-width) origin-(--transform-origin) overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-lg ring-1 ring-border duration-150 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
              typeof className === "function" ? className(state) : className
            )
          }
          {...rest}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

type ComboboxListProps = ComboboxPrimitive.List.Props

function ComboboxList(props: ComboboxListProps) {
  const { className, ...rest } = props

  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={(state) =>
        cn(
          "no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ComboboxItemProps = ComboboxPrimitive.Item.Props

function ComboboxItem(props: ComboboxItemProps) {
  const { className, children, ...rest } = props

  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={(state) =>
        cn(
          "relative flex min-h-9 w-full cursor-pointer items-center gap-2 rounded-md py-2 ps-2 pe-9 text-sm font-medium outline-hidden select-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute end-2.5 flex size-4 items-center justify-center" />
        }
      >
        <Check className="pointer-events-none" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

type ComboboxGroupProps = ComboboxPrimitive.Group.Props

function ComboboxGroup(props: ComboboxGroupProps) {
  const { className, ...rest } = props

  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={(state) =>
        cn(typeof className === "function" ? className(state) : className)
      }
      {...rest}
    />
  )
}

type ComboboxLabelProps = ComboboxPrimitive.GroupLabel.Props

function ComboboxLabel(props: ComboboxLabelProps) {
  const { className, ...rest } = props

  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={(state) =>
        cn(
          "px-2 py-1.5 text-xs text-muted-foreground",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ComboboxCollectionProps = ComboboxPrimitive.Collection.Props

function ComboboxCollection(props: ComboboxCollectionProps) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

type ComboboxEmptyProps = ComboboxPrimitive.Empty.Props

function ComboboxEmpty(props: ComboboxEmptyProps) {
  const { className, ...rest } = props

  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={(state) =>
        cn(
          "hidden w-full justify-center py-6 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ComboboxSeparatorProps = ComboboxPrimitive.Separator.Props

function ComboboxSeparator(props: ComboboxSeparatorProps) {
  const { className, ...rest } = props

  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
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

type ComboboxChipsProps = ComponentPropsWithRef<
  typeof ComboboxPrimitive.Chips
> &
  ComboboxPrimitive.Chips.Props

function ComboboxChips(props: ComboboxChipsProps) {
  const { className, ...rest } = props

  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={(state) =>
        cn(
          "flex min-h-10 flex-wrap items-center gap-1.5 rounded-lg bg-background px-2.5 py-1.5 text-sm shadow-xs ring-1 ring-input transition-shadow ring-inset focus-within:ring-2 focus-within:ring-foreground has-disabled:opacity-50 has-aria-invalid:ring-destructive",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ComboboxChipProps = ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}

function ComboboxChip(props: ComboboxChipProps) {
  const { className, children, showRemove = true, ...rest } = props

  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={(state) =>
        cn(
          "flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="-ml-1 opacity-50 hover:opacity-100"
          data-slot="combobox-chip-remove"
          aria-label="Remove selection"
        >
          <XClose className="pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

type ComboboxChipsInputProps = ComboboxPrimitive.Input.Props

function ComboboxChipsInput(props: ComboboxChipsInputProps) {
  const { className, ...rest } = props

  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={(state) =>
        cn(
          "min-w-16 flex-1 outline-none",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

function useComboboxAnchor() {
  return useRef<HTMLDivElement | null>(null)
}

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
}
