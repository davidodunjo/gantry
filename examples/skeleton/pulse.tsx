import { Skeleton } from "@/components/ui/skeleton"

function SkeletonPulse() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading profile"
      className="flex items-center gap-4"
    >
      <Skeleton animation="pulse" className="size-12 rounded-full" />
      <div className="space-y-3">
        <Skeleton animation="pulse" className="h-4 w-48" />
        <Skeleton animation="pulse" className="h-4 w-32" />
      </div>
    </div>
  )
}

export default SkeletonPulse
