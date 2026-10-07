import { type ComponentProps } from "react"
import { ChevronDown } from "@untitledui/icons"

import { cn } from "@/lib/utils"

type NativeSelectProps = Omit<ComponentProps<"select">, "size"> & {
  size?: "sm" | "default" | "lg"
}

function NativeSelect(props: NativeSelectProps) {
  const { className, size = "default", ...rest } = props

  return (
    <div
      data-slot="native-select-wrapper"
      data-size={size}
      className={cn(
        "group/native-select relative w-fit has-[select:disabled]:opacity-50",
        className
      )}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="h-10 w-full min-w-0 appearance-none rounded-lg bg-background py-2 ps-3 pe-9 text-base font-medium shadow-xs ring-1 ring-input transition-[box-shadow,color] outline-none ring-inset hover:ring-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground disabled:cursor-not-allowed disabled:bg-muted aria-invalid:ring-destructive data-[size=lg]:h-11 data-[size=lg]:ps-3.5 data-[size=sm]:h-9 data-[size=sm]:text-sm"
        {...rest}
      />
      <ChevronDown
        aria-hidden="true"
        data-slot="native-select-icon"
        className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground select-none group-data-[size=lg]/native-select:size-5"
      />
    </div>
  )
}

type NativeSelectOptionProps = ComponentProps<"option">

function NativeSelectOption(props: NativeSelectOptionProps) {
  const { className, ...rest } = props

  return (
    <option
      data-slot="native-select-option"
      {...rest}
      className={cn("bg-[Canvas] text-[CanvasText]", className)}
    />
  )
}

type NativeSelectOptGroupProps = ComponentProps<"optgroup">

function NativeSelectOptGroup(props: NativeSelectOptGroupProps) {
  const { className, ...rest } = props

  return (
    <optgroup
      data-slot="native-select-optgroup"
      {...rest}
      className={cn("bg-[Canvas] text-[CanvasText]", className)}
    />
  )
}

export {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
  type NativeSelectProps,
  type NativeSelectOptGroupProps,
  type NativeSelectOptionProps,
}
