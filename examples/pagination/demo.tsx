import { useState, type MouseEvent } from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const pages = [1, 2, 3]

function PaginationDemo() {
  const [page, setPage] = useState(1)

  function handlePrevious(event: MouseEvent) {
    event.preventDefault()
    setPage(Math.max(1, page - 1))
  }

  function handleNext(event: MouseEvent) {
    event.preventDefault()
    setPage(Math.min(pages.length, page + 1))
  }

  return (
    <div className="w-full space-y-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#pagination"
              aria-disabled={page === 1}
              onClick={handlePrevious}
            />
          </PaginationItem>
          {pages.map((value) => (
            <PaginationItem key={value}>
              <PaginationLink
                href="#pagination"
                aria-label={`Page ${value}`}
                isActive={page === value}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(value)
                }}
              >
                {value}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#pagination"
              aria-disabled={page === pages.length}
              onClick={handleNext}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p
        aria-live="polite"
        className="text-center text-sm text-muted-foreground"
      >
        Page {page} of {pages.length}
      </p>
    </div>
  )
}

export default PaginationDemo
