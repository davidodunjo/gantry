import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { cn } from "@/lib/utils"

type ProgressProps = ProgressPrimitive.Root.Props

function Progress(props: ProgressProps) {
  const { className, children, ...rest } = props

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={(state) =>
        cn(
          "flex flex-wrap gap-3",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  )
}

type ProgressTrackProps = ProgressPrimitive.Track.Props

function ProgressTrack(props: ProgressTrackProps) {
  const { className, ...rest } = props

  return (
    <ProgressPrimitive.Track
      data-slot="progress-track"
      className={(state) =>
        cn(
          "relative flex h-2 w-full items-center overflow-x-hidden rounded-full bg-neutral-200 dark:bg-neutral-800",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ProgressIndicatorProps = ProgressPrimitive.Indicator.Props

function ProgressIndicator(props: ProgressIndicatorProps) {
  const { className, ...rest } = props

  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={(state) =>
        cn(
          "h-full rounded-full bg-primary transition-[width] duration-75 data-indeterminate:w-1/3 data-indeterminate:animate-pulse motion-reduce:animate-none motion-reduce:transition-none",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ProgressLabelProps = ProgressPrimitive.Label.Props

function ProgressLabel(props: ProgressLabelProps) {
  const { className, ...rest } = props

  return (
    <ProgressPrimitive.Label
      data-slot="progress-label"
      className={(state) =>
        cn(
          "text-sm font-medium",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ProgressValueProps = ProgressPrimitive.Value.Props

function ProgressValue(props: ProgressValueProps) {
  const { className, ...rest } = props

  return (
    <ProgressPrimitive.Value
      data-slot="progress-value"
      className={(state) =>
        cn(
          "ms-auto text-sm font-medium text-muted-foreground tabular-nums",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type ValueFormatter = (value: number, percentage: number) => string | number

type ProgressReadingInput = {
  component: string
  value: number | null
  min: number
  max: number
  valueFormatter?: ValueFormatter
}

function readProgress(input: ProgressReadingInput) {
  const { component, value, min, max, valueFormatter } = input

  if (
    !Number.isFinite(min) ||
    !Number.isFinite(max) ||
    max <= min ||
    (value !== null && !Number.isFinite(value))
  ) {
    throw new RangeError(
      `${component} requires a finite value and finite bounds with max greater than min.`
    )
  }

  const boundedValue =
    value === null ? null : Math.min(max, Math.max(min, value))
  const percentage =
    boundedValue === null ? 0 : ((boundedValue - min) / (max - min)) * 100
  const formatted =
    boundedValue === null
      ? "Loading"
      : String(
          valueFormatter?.(boundedValue, percentage) ??
            `${Math.round(percentage)}%`
        )

  return { boundedValue, percentage, formatted }
}

type ProgressBarProps = ProgressPrimitive.Root.Props & {
  labelPosition?: "right" | "bottom" | "top-floating" | "bottom-floating"
  valueFormatter?: ValueFormatter
}

function ProgressBar(props: ProgressBarProps) {
  const {
    value,
    min = 0,
    max = 100,
    labelPosition,
    valueFormatter,
    className,
    children,
    ...rest
  } = props
  const { boundedValue, percentage, formatted } = readProgress({
    component: "ProgressBar",
    value,
    min,
    max,
    valueFormatter,
  })
  const floating =
    labelPosition === "top-floating" || labelPosition === "bottom-floating"

  return (
    <ProgressPrimitive.Root
      {...rest}
      min={min}
      max={max}
      value={boundedValue}
      aria-valuetext={rest["aria-valuetext"] ?? formatted}
      data-slot="progress-bar"
      className={(state) =>
        cn(
          "relative flex gap-3",
          labelPosition === "right"
            ? "items-center"
            : "flex-col items-end gap-2",
          floating && (labelPosition === "top-floating" ? "mt-12" : "mb-12"),
          typeof className === "function" ? className(state) : className
        )
      }
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
      {labelPosition && (
        <span
          aria-hidden
          style={
            floating
              ? { left: `clamp(1.5rem, ${percentage}%, calc(100% - 1.5rem))` }
              : undefined
          }
          className={cn(
            "shrink-0 text-sm font-medium text-muted-foreground tabular-nums",
            floating &&
              "absolute -translate-x-1/2 rounded-lg bg-background px-3 py-2 text-xs font-semibold whitespace-nowrap shadow-lg ring-1 ring-border",
            labelPosition === "top-floating" && "bottom-full mb-2",
            labelPosition === "bottom-floating" && "top-full mt-2"
          )}
        >
          {formatted}
        </span>
      )}
    </ProgressPrimitive.Root>
  )
}

export {
  Progress,
  ProgressBar,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
  readProgress,
  type ProgressBarProps,
  type ProgressIndicatorProps,
  type ProgressLabelProps,
  type ProgressProps,
  type ProgressTrackProps,
  type ProgressValueProps,
  type ValueFormatter,
}
