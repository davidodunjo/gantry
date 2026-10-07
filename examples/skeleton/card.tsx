import { Skeleton } from "@/components/ui/skeleton"

function SkeletonCard() {
  return (
    <div aria-busy="true" aria-label="Loading card" className="w-72 space-y-4">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-5 w-4/5" />
      <Skeleton className="h-4 w-3/5" />
    </div>
  )
}

export default SkeletonCard
