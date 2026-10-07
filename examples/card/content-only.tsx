import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Revenue", value: "£48,210", change: "Up 12% on August" },
  { label: "Customers", value: "1,284", change: "Up 3% on August" },
  { label: "Refunds", value: "£1,120", change: "Down 8% on August" },
]

function CardContentOnly() {
  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.label} className="w-full max-w-44">
          <CardContent className="flex flex-col gap-1">
            <span className="text-muted-foreground">{stat.label}</span>
            <span className="text-2xl font-semibold">{stat.value}</span>
            <span className="text-muted-foreground">{stat.change}</span>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default CardContentOnly
