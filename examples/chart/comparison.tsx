import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const revenue = [
  { plan: "Starter", q2: 6400, q3: 8200 },
  { plan: "Growth", q2: 19800, q3: 24500 },
  { plan: "Scale", q2: 33100, q3: 41200 },
  { plan: "Enterprise", q2: 21000, q3: 15800 },
]

const revenueConfig = {
  q2: { label: "Q2 2026", color: "var(--chart-2)" },
  q3: { label: "Q3 2026", color: "var(--chart-5)" },
}

function ChartComparison() {
  return (
    <ChartContainer config={revenueConfig} className="h-64 w-full">
      <BarChart accessibilityLayer data={revenue}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="plan" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="q2" fill="var(--color-q2)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="q3" fill="var(--color-q3)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}

export default ChartComparison
