import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"

type SeparatorProps = SeparatorPrimitive.Props

function Separator(props: SeparatorProps) {
  const { className, orientation = "horizontal", ...rest } = props

  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={(state) =>
        cn(
          "shrink-0 bg-border/80 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

export { Separator, type SeparatorProps }
