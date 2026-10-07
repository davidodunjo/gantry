import { Bar, BarChart, XAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const signups = [
  { month: "Apr", signups: 186 },
  { month: "May", signups: 305 },
  { month: "Jun", signups: 237 },
  { month: "Jul", signups: 273 },
  { month: "Aug", signups: 209 },
  { month: "Sep", signups: 214 },
]

const chartConfig: ChartConfig = {
  signups: { label: "Signups", color: "var(--chart-1)" },
}

function ChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="h-64 w-full">
      <BarChart accessibilityLayer data={signups}>
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="signups" fill="var(--color-signups)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

export default ChartDemo
