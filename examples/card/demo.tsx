import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const invoiceLines = [
  { label: "Design retainer, September", amount: "£2,400.00" },
  { label: "Hosting and domains", amount: "£180.00" },
]

function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Invoice INV-1042</CardTitle>
        <CardDescription>Northwind Studio, due 14 October</CardDescription>
        <CardAction>
          <Badge variant="outline">Unpaid</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <dl className="flex flex-col gap-2">
          {invoiceLines.map((line) => (
            <div key={line.label} className="flex justify-between gap-4">
              <dt className="text-muted-foreground">{line.label}</dt>
              <dd>{line.amount}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-4 border-t pt-2 font-medium">
            <dt>Total</dt>
            <dd>£2,580.00</dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" size="sm">
          Download PDF
        </Button>
        <Button size="sm">Pay now</Button>
      </CardFooter>
    </Card>
  )
}

export default CardDemo
