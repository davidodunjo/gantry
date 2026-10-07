import {
  type ComponentProps,
  type ComponentType,
  type CSSProperties,
  createContext,
  type ReactNode,
  useContext,
  useId,
} from "react"
import * as RechartsPrimitive from "recharts"
import type { TooltipValueType } from "recharts"

import { cn } from "@/lib/utils"

const THEMES = { light: "", dark: ".dark" }
const INITIAL_DIMENSION = { width: 320, height: 200 }

type TooltipNameType = number | string

type ChartConfig = Record<
  string,
  {
    label?: ReactNode
    icon?: ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
>

type ChartContextValue = {
  config: ChartConfig
}

const ChartContext = createContext<ChartContextValue | null>(null)

function useChart() {
  const context = useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

type ChartContainerProps = ComponentProps<"div"> & {
  config: ChartConfig
  children: ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
  initialDimension?: {
    width: number
    height: number
  }
}

function ChartContainer(props: ChartContainerProps) {
  const {
    id,
    className,
    children,
    config,
    initialDimension = INITIAL_DIMENSION,
    ...rest
  } = props
  const uniqueId = useId()
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-none [&_.recharts-surface:focus-visible]:outline-2 [&_.recharts-surface:focus-visible]:outline-offset-2 [&_.recharts-surface:focus-visible]:outline-foreground",
          className
        )}
        {...rest}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer
          initialDimension={initialDimension}
        >
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext>
  )
}

type ChartStyleProps = {
  id: string
  config: ChartConfig
}

function ChartStyle(props: ChartStyleProps) {
  const { id, config } = props
  const colorConfig = Object.entries(config).filter(
    ([, itemConfig]) => itemConfig.theme ?? itemConfig.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ??
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

type ChartTooltipContentProps = ComponentProps<
  typeof RechartsPrimitive.Tooltip
> &
  ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  } & Omit<
    RechartsPrimitive.DefaultTooltipContentProps<
      TooltipValueType,
      TooltipNameType
    >,
    "accessibilityLayer"
  >

function ChartTooltipContent(props: ChartTooltipContentProps) {
  const {
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey,
  } = props
  const { config } = useChart()

  const labelItem = payload?.[0]
  const labelDataKey = `${labelKey ?? labelItem?.dataKey ?? labelItem?.name ?? "value"}`
  const labelItemConfig = getPayloadConfigFromPayload(
    config,
    labelItem,
    labelDataKey
  )
  const labelValue =
    !labelKey && typeof label === "string"
      ? (config[label]?.label ?? label)
      : labelItemConfig?.label

  function renderTooltipLabel() {
    if (hideLabel || !payload?.length) {
      return null
    }

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(labelValue, payload)}
        </div>
      )
    }

    if (!labelValue) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{labelValue}</div>
  }

  const tooltipLabel = renderTooltipLabel()

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "grid min-w-32 items-start gap-1.5 rounded-lg bg-neutral-900 px-3 py-2 text-xs text-white shadow-lg",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== "none")
          .map((item, index) => {
            const itemKey = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`
            const itemConfig = getPayloadConfigFromPayload(
              config,
              item,
              itemKey
            )
            const indicatorColor = color ?? item.payload?.fill ?? item.color

            return (
              <div
                key={index}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-neutral-300">
                          {itemConfig?.label ?? item.name}
                        </span>
                      </div>
                      {item.value != null && (
                        <span className="font-mono font-semibold text-white tabular-nums">
                          {typeof item.value === "number"
                            ? item.value.toLocaleString()
                            : String(item.value)}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

type ChartLegendContentProps = ComponentProps<"div"> & {
  hideIcon?: boolean
  nameKey?: string
} & RechartsPrimitive.DefaultLegendContentProps

function ChartLegendContent(props: ChartLegendContentProps) {
  const {
    className,
    hideIcon = false,
    payload,
    verticalAlign = "bottom",
    nameKey,
  } = props
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item, index) => {
          const itemKey = `${nameKey ?? item.dataKey ?? "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, itemKey)

          return (
            <div
              key={index}
              className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-full ring-[0.5px] ring-black/10 ring-inset"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
    </div>
  )
}

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const nestedPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    nestedPayload &&
    key in nestedPayload &&
    typeof nestedPayload[key as keyof typeof nestedPayload] === "string"
  ) {
    configLabelKey = nestedPayload[key as keyof typeof nestedPayload] as string
  }

  return configLabelKey in config ? config[configLabelKey] : config[key]
}

export {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
