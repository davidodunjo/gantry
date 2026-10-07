import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { readProgress, type ValueFormatter } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const circleSizes = {
  xxs: {
    stroke: 6,
    radius: 29,
    value: "text-sm",
    label: "text-xs",
    bottom: "bottom-0.5",
  },
  xs: {
    stroke: 16,
    radius: 72,
    value: "text-2xl",
    label: "text-xs",
    bottom: "bottom-0.5",
  },
  sm: {
    stroke: 20,
    radius: 90,
    value: "text-3xl",
    label: "text-xs",
    bottom: "bottom-2",
  },
  md: {
    stroke: 24,
    radius: 108,
    value: "text-4xl",
    label: "text-sm",
    bottom: "bottom-1",
  },
  lg: {
    stroke: 28,
    radius: 126,
    value: "text-5xl",
    label: "text-sm",
    bottom: "bottom-0",
  },
}

type ProgressCircleProps = Omit<ProgressPrimitive.Root.Props, "children"> & {
  size?: keyof typeof circleSizes
  variant?: "circle" | "half-circle"
  label?: string
  valueFormatter?: ValueFormatter
}

function ProgressCircle(props: ProgressCircleProps) {
  const {
    value,
    min = 0,
    max = 100,
    size = "md",
    variant = "circle",
    label,
    valueFormatter,
    className,
    ...rest
  } = props
  const { boundedValue, percentage, formatted } = readProgress({
    component: "ProgressCircle",
    value,
    min,
    max,
    valueFormatter,
  })
  const config = circleSizes[size]
  const diameter = (config.radius + config.stroke / 2) * 2
  const center = diameter / 2
  const half = variant === "half-circle"
  const height = half ? config.radius + config.stroke : diameter
  const path = half
    ? `M ${config.stroke / 2} ${center} A ${config.radius} ${config.radius} 0 0 1 ${diameter - config.stroke / 2} ${center}`
    : `M ${center} ${config.stroke / 2} a ${config.radius} ${config.radius} 0 1 1 0 ${2 * config.radius} a ${config.radius} ${config.radius} 0 1 1 0 ${-2 * config.radius}`

  return (
    <ProgressPrimitive.Root
      {...rest}
      value={boundedValue}
      min={min}
      max={max}
      aria-label={rest["aria-label"] ?? label ?? "Progress"}
      aria-valuetext={rest["aria-valuetext"] ?? formatted}
      data-slot="progress-circle"
      className={(state) =>
        cn(
          "inline-flex w-fit flex-col items-center gap-0.5",
          typeof className === "function" ? className(state) : className
        )
      }
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: diameter, height }}
      >
        <svg
          aria-hidden
          width={diameter}
          height={height}
          viewBox={`0 0 ${diameter} ${height}`}
          className={cn(
            boundedValue === null &&
              (half
                ? "animate-pulse motion-reduce:animate-none"
                : "animate-spin motion-reduce:animate-none")
          )}
        >
          <path
            d={path}
            fill="none"
            strokeWidth={config.stroke}
            strokeLinecap="round"
            className="stroke-neutral-200 dark:stroke-neutral-800"
          />
          <path
            d={path}
            fill="none"
            strokeWidth={config.stroke}
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="100"
            strokeDashoffset={boundedValue === null ? 75 : 100 - percentage}
            className={cn(
              "stroke-primary transition-[stroke-dashoffset] duration-150 motion-reduce:transition-none",
              boundedValue !== null && percentage === 0 && "opacity-0"
            )}
          />
        </svg>
        <div
          aria-hidden
          className={cn("absolute text-center", half && config.bottom)}
        >
          {label && size !== "xxs" && (
            <div
              className={cn("font-medium text-muted-foreground", config.label)}
            >
              {label}
            </div>
          )}
          <div
            className={cn(
              "font-semibold text-foreground tabular-nums",
              config.value
            )}
          >
            {boundedValue === null ? <span aria-hidden>…</span> : formatted}
          </div>
        </div>
      </div>
      {label && size === "xxs" && (
        <span
          aria-hidden
          className={cn("font-medium text-muted-foreground", config.label)}
        >
          {label}
        </span>
      )}
    </ProgressPrimitive.Root>
  )
}

export { ProgressCircle, type ProgressCircleProps }
