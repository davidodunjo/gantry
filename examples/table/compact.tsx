import { Badge, BadgeDot } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type InvoiceStatus = "Paid" | "Pending" | "Refunded" | "Payment failed"

type Invoice = {
  id: string
  customer: string
  issued: string
  due: string
  method: string
  status: InvoiceStatus
  amount: number
}

const invoices: Invoice[] = [
  {
    id: "INV-2041",
    customer: "Northwind Traders",
    issued: "2 Sep 2026",
    due: "2 Oct 2026",
    method: "Bank transfer",
    status: "Paid",
    amount: 1240,
  },
  {
    id: "INV-2042",
    customer: "Harbour & Finch Architectural Partnership",
    issued: "4 Sep 2026",
    due: "4 Oct 2026",
    method: "Card ending 4417",
    status: "Paid",
    amount: 18650.5,
  },
  {
    id: "INV-2043",
    customer: "Okafor Logistics",
    issued: "9 Sep 2026",
    due: "9 Oct 2026",
    method: "Direct debit",
    status: "Payment failed",
    amount: 3480,
  },
  {
    id: "INV-2044",
    customer: "Studio Lumen",
    issued: "15 Sep 2026",
    due: "15 Oct 2026",
    method: "Card ending 0092",
    status: "Pending",
    amount: 725,
  },
  {
    id: "INV-2045",
    customer: "Kestrel Health",
    issued: "18 Sep 2026",
    due: "18 Oct 2026",
    method: "Bank transfer",
    status: "Refunded",
    amount: 128450,
  },
]

const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
})

type InvoiceStatusBadgeProps = {
  status: InvoiceStatus
}

function InvoiceStatusBadge(props: InvoiceStatusBadgeProps) {
  const { status } = props
  const variant =
    status === "Payment failed"
      ? "destructive"
      : status === "Pending"
        ? "secondary"
        : "outline"

  return (
    <Badge size="sm" variant={variant}>
      <BadgeDot />
      {status}
    </Badge>
  )
}

function TableCompact() {
  return (
    <div className="w-full overflow-hidden rounded-xl border">
      <Table size="sm">
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-end">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>
                <div className="max-w-56 truncate" title={invoice.customer}>
                  {invoice.customer}
                </div>
              </TableCell>
              <TableCell>
                <InvoiceStatusBadge status={invoice.status} />
              </TableCell>
              <TableCell className="text-end tabular-nums">
                {currency.format(invoice.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableCompact
