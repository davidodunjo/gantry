import { Switch as SwitchPrimitive } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

type SwitchSize = "sm" | "md" | "default"

const track =
  "peer relative inline-flex shrink-0 cursor-pointer items-center rounded-full bg-muted shadow-[inset_0_0_0_var(--switch-border-width)_var(--switch-border)] transition-[background-color,box-shadow] duration-150 ease-linear outline-none [--switch-border:var(--input)] [--switch-focus:var(--foreground)] focus-visible:shadow-[inset_0_0_0_var(--switch-border-width)_var(--switch-border),0_0_0_2px_var(--background),0_0_0_4px_var(--switch-focus)] data-checked:bg-primary data-checked:[--switch-border:transparent] data-checked:hover:not-data-disabled:not-data-readonly:bg-[color-mix(in_oklch,var(--primary),var(--background)_10%)] aria-invalid:[--switch-border:var(--destructive)] aria-invalid:[--switch-border-width:1px] aria-invalid:[--switch-focus:var(--destructive)] data-invalid:[--switch-border:var(--destructive)] data-invalid:[--switch-border-width:1px] data-invalid:[--switch-focus:var(--destructive)] data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:cursor-default motion-reduce:transition-none forced-colors:outline-1 forced-colors:outline-solid forced-colors:outline-[ButtonText] forced-colors:focus-visible:outline-2 forced-colors:focus-visible:outline-offset-2 forced-colors:focus-visible:outline-[Highlight]"

const trackSizes = {
  sm: {
    regular:
      "h-5 w-9 p-0.5 [--switch-border-width:0.5px] [--switch-thumb-size:16px] [--switch-travel:16px] rtl:[--switch-travel:-16px]",
    slim: "h-4 w-8 [--switch-border-width:1px] [--switch-thumb-size:16px] [--switch-travel:16px] rtl:[--switch-travel:-16px]",
  },
  md: {
    regular:
      "h-6 w-11 p-0.5 [--switch-border-width:0.5px] [--switch-thumb-size:20px] [--switch-travel:20px] rtl:[--switch-travel:-20px]",
    slim: "h-5 w-10 [--switch-border-width:1px] [--switch-thumb-size:20px] [--switch-travel:20px] rtl:[--switch-travel:-20px]",
  },
}

const thumb =
  "pointer-events-none block size-(--switch-thumb-size) shrink-0 rounded-full bg-white [transition:transform_150ms_ease-in-out,border-color_100ms_linear,background-color_100ms_linear] data-checked:border-primary data-checked:bg-primary-foreground data-checked:[transform:translateX(var(--switch-travel))] motion-reduce:transition-none forced-colors:bg-[ButtonText]!"

const thumbStyles = {
  regular: "shadow-[0_1px_3px_rgb(0_0_0/10%),0_1px_2px_rgb(0_0_0/6%)]",
  slim: "border border-input shadow-[0_1px_2px_rgb(0_0_0/5%)]",
}

type SwitchProps = SwitchPrimitive.Root.Props & {
  size?: SwitchSize
  slim?: boolean
}

function Switch(props: SwitchProps) {
  const { className, size = "sm", slim = false, ...rest } = props
  const variant = slim ? "slim" : "regular"
  const styles = cn(
    track,
    trackSizes[size === "default" ? "md" : size][variant]
  )

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      {...rest}
      className={
        typeof className === "function"
          ? (state) => cn(styles, className(state))
          : cn(styles, className)
      }
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(thumb, thumbStyles[variant])}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch, type SwitchProps }
