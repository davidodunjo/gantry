import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"

function PaginationEllipsisExample() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink className="rounded-full" href="#pagination" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="rounded-full" href="#pagination">
            10
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationEllipsisExample
