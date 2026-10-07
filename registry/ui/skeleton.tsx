import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

type SkeletonProps = ComponentProps<"div">

function Skeleton(props: SkeletonProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-lg bg-muted motion-reduce:animate-none",
        className
      )}
      {...rest}
    />
  )
}

export { Skeleton, type SkeletonProps }
