import { useId } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const tickets = [
  { week: "3 Aug", opened: 42, resolved: 39 },
  { week: "10 Aug", opened: 38, resolved: 41 },
  { week: "17 Aug", opened: 45, resolved: 40 },
  { week: "24 Aug", opened: 51, resolved: 44 },
  { week: "31 Aug", opened: 47, resolved: 49 },
  { week: "7 Sep", opened: 96, resolved: 58 },
  { week: "14 Sep", opened: 63, resolved: 71 },
  { week: "21 Sep", opened: 41, resolved: 55 },
]

const ticketConfig = {
  opened: { label: "Opened", color: "var(--chart-5)" },
  resolved: { label: "Resolved", color: "var(--chart-2)" },
}

function ChartTrend() {
  const gradientId = useId()

  return (
    <ChartContainer config={ticketConfig} className="h-64 w-full">
      <AreaChart accessibilityLayer data={tickets}>
        <defs>
          <linearGradient
            id={`${gradientId}-opened`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="var(--color-opened)"
              stopOpacity={0.12}
            />
            <stop
              offset="100%"
              stopColor="var(--color-opened)"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient
            id={`${gradientId}-resolved`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="var(--color-resolved)"
              stopOpacity={0.12}
            />
            <stop
              offset="100%"
              stopColor="var(--color-resolved)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="week" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Area
          type="monotone"
          dataKey="opened"
          stroke="var(--color-opened)"
          fill={`url(#${gradientId}-opened)`}
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="resolved"
          stroke="var(--color-resolved)"
          fill={`url(#${gradientId}-resolved)`}
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  )
}

export default ChartTrend
