import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function TableEmpty() {
  return (
    <div className="w-full overflow-hidden rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Refund</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead className="text-end">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell
              colSpan={4}
              className="h-32 text-center text-muted-foreground"
            >
              No refunds issued this month.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default TableEmpty
