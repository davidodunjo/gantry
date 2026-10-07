import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"

import { cn } from "@/lib/utils"

type RadioSize = "sm" | "md"

const radioSizes = {
  sm: "[--radio-size:16px] [--radio-dot:6px]",
  md: "[--radio-size:20px] [--radio-dot:8px]",
}

const radioItem =
  "peer relative inline-flex size-(--radio-size) shrink-0 cursor-pointer items-center justify-center rounded-full bg-background text-primary-foreground shadow-[inset_0_0_0_1px_var(--radio-border)] transition-[background-color,box-shadow] duration-100 ease-linear outline-none [--radio-border:var(--input)] [--radio-focus:var(--foreground)] focus-visible:shadow-[inset_0_0_0_1px_var(--radio-border),0_0_0_2px_var(--background),0_0_0_4px_var(--radio-focus)] data-checked:bg-primary data-checked:[--radio-border:var(--primary)] aria-invalid:[--radio-border:var(--destructive)] aria-invalid:[--radio-focus:var(--destructive)] data-invalid:[--radio-border:var(--destructive)] data-invalid:[--radio-focus:var(--destructive)] group-aria-invalid/radio-group:[--radio-border:var(--destructive)] group-aria-invalid/radio-group:[--radio-focus:var(--destructive)] group-data-invalid/radio-group:[--radio-border:var(--destructive)] group-data-invalid/radio-group:[--radio-focus:var(--destructive)] data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:not-data-checked:bg-muted data-readonly:cursor-default forced-colors:border forced-colors:border-[ButtonText] forced-colors:focus-visible:outline-2 forced-colors:focus-visible:outline-offset-2 forced-colors:focus-visible:outline-solid forced-colors:focus-visible:outline-[Highlight]"

type RadioGroupProps<Value = string> = RadioGroupPrimitive.Props<Value> & {
  size?: RadioSize
}

function RadioGroup<Value>(props: RadioGroupProps<Value>) {
  const { className, size = "sm", ...rest } = props
  const styles = cn("group/radio-group grid w-full gap-4", radioSizes[size])

  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      {...rest}
      className={
        typeof className === "function"
          ? (state) => cn(styles, className(state))
          : cn(styles, className)
      }
    />
  )
}

type RadioGroupItemProps = RadioPrimitive.Root.Props & { size?: RadioSize }

function RadioGroupItem(props: RadioGroupItemProps) {
  const { className, size, ...rest } = props
  const styles = cn(radioItem, size && radioSizes[size])

  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      {...rest}
      className={
        typeof className === "function"
          ? (state) => cn(styles, className(state))
          : cn(styles, className)
      }
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="size-(--radio-dot) rounded-full bg-current"
      />
    </RadioPrimitive.Root>
  )
}

export {
  RadioGroup,
  RadioGroupItem,
  type RadioGroupProps,
  type RadioGroupItemProps,
}
