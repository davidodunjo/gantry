import { type ComponentProps, type CSSProperties } from "react"

import { cn } from "@/lib/utils"

type AspectRatioProps = ComponentProps<"div"> & {
  ratio: number
}

function AspectRatio(props: AspectRatioProps) {
  const { ratio, className, style, ...rest } = props

  return (
    <div
      data-slot="aspect-ratio"
      style={{ "--ratio": ratio, ...style } as CSSProperties}
      className={cn("relative aspect-(--ratio)", className)}
      {...rest}
    />
  )
}

export { AspectRatio, type AspectRatioProps }
