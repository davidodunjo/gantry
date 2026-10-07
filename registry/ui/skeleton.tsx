import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

type SkeletonProps = ComponentProps<"div"> & {
  animation?: "shimmer" | "pulse"
}

function Skeleton(props: SkeletonProps) {
  const { className, animation = "shimmer", children, ...rest } = props

  return (
    <div
      data-slot="skeleton"
      data-animation={animation}
      className={cn(
        "relative overflow-hidden rounded-lg bg-muted-foreground/20",
        animation === "pulse" && "animate-pulse motion-reduce:animate-none",
        className
      )}
      {...rest}
    >
      {animation === "shimmer" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-x-full animate-in bg-linear-to-r from-transparent via-white/50 to-transparent ease-in-out animation-duration-1500 repeat-infinite slide-in-from-left-[200%] motion-reduce:hidden dark:via-white/10"
        />
      )}
      {children}
    </div>
  )
}

export { Skeleton, type SkeletonProps }
