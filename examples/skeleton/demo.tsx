import { Skeleton } from "@/components/ui/skeleton"

function SkeletonDemo() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading profile"
      className="flex items-center gap-4"
    >
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  )
}

export default SkeletonDemo
