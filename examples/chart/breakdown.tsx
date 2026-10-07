import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const channels = [
  { key: "organic", name: "Organic search", value: 38 },
  { key: "referral", name: "Referral", value: 22 },
  { key: "paid", name: "Paid social", value: 18 },
  { key: "direct", name: "Direct", value: 14 },
  { key: "email", name: "Email", value: 8 },
]

const channelConfig = {
  organic: { label: "Organic search", color: "var(--chart-1)" },
  referral: { label: "Referral", color: "var(--chart-2)" },
  paid: { label: "Paid social", color: "var(--chart-3)" },
  direct: { label: "Direct", color: "var(--chart-4)" },
  email: { label: "Email", color: "var(--chart-5)" },
}

function ChartBreakdown() {
  return (
    <ChartContainer config={channelConfig} className="h-64 w-full">
      <PieChart accessibilityLayer>
        <Pie
          data={channels.map((channel) => ({
            ...channel,
            fill: `var(--color-${channel.key})`,
          }))}
          dataKey="value"
          nameKey="name"
          innerRadius={65}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent nameKey="name" />} />
      </PieChart>
    </ChartContainer>
  )
}

export default ChartBreakdown
