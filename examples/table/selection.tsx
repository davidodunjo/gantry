import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Invoice = {
  id: string
  customer: string
  amount: number
}

const invoices: Invoice[] = [
  { id: "INV-2041", customer: "Northwind Traders", amount: 1240 },
  {
    id: "INV-2042",
    customer: "Harbour & Finch Architectural Partnership",
    amount: 18650.5,
  },
  { id: "INV-2043", customer: "Ashdown Logistics", amount: 3480 },
  { id: "INV-2044", customer: "Studio Lumen", amount: 725 },
  { id: "INV-2045", customer: "Kestrel Health", amount: 128450 },
]

const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
})

function TableSelection() {
  const [selected, setSelected] = useState(["INV-2043"])
  const everyInvoice = selected.length === invoices.length

  function handleSelectAll(checked: boolean) {
    setSelected(checked ? invoices.map((invoice) => invoice.id) : [])
  }

  function handleSelect(id: string, checked: boolean) {
    setSelected((current) =>
      checked ? [...current, id] : current.filter((entry) => entry !== id)
    )
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border">
      <Table>
        <TableCaption className="mb-4">
          {selected.length} of {invoices.length} invoices selected
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                aria-label="Select every invoice"
                checked={everyInvoice}
                indeterminate={selected.length > 0 && !everyInvoice}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="text-end">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.id}
              data-state={
                selected.includes(invoice.id) ? "selected" : undefined
              }
            >
              <TableCell>
                <Checkbox
                  aria-label={`Select ${invoice.id}`}
                  checked={selected.includes(invoice.id)}
                  onCheckedChange={(checked) =>
                    handleSelect(invoice.id, checked)
                  }
                />
              </TableCell>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>
                <div className="max-w-56 truncate" title={invoice.customer}>
                  {invoice.customer}
                </div>
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

export default TableSelection
