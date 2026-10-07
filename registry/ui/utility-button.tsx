import { type ReactNode } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type UtilityButtonProps = Omit<
  ButtonPrimitive.Props,
  "className" | "children"
> & {
  label: string
  icon: ReactNode
  size?: "xs" | "sm"
  color?: "secondary" | "tertiary"
  tooltip?: boolean
  tooltipPlacement?: "top" | "bottom" | "left" | "right"
  className?: string
}

function UtilityButton(props: UtilityButtonProps) {
  const {
    label,
    icon,
    size = "sm",
    color = "secondary",
    tooltip = true,
    tooltipPlacement = "top",
    className,
    disabled,
    ...rest
  } = props
  const button = (
    <ButtonPrimitive
      {...rest}
      disabled={disabled}
      aria-label={label}
      data-slot="utility-button"
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-md p-1.5 text-muted-foreground/70 transition duration-100 ease-linear outline-none hover:bg-muted hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        size === "xs" ? "size-7 [&_svg]:size-4" : "size-8 [&_svg]:size-5",
        color === "secondary" &&
          "bg-background shadow-[0_1px_2px_0_#0a0d120d,inset_0_-2px_0_0_#0a0d120d] ring-1 ring-input ring-inset disabled:shadow-xs",
        className
      )}
    >
      {icon}
    </ButtonPrimitive>
  )

  if (!tooltip || disabled) {
    return button
  }

  return (
    <Tooltip>
      <TooltipTrigger render={button} />
      <TooltipContent
        side={tooltipPlacement}
        sideOffset={size === "xs" ? 4 : 6}
      >
        {label}
      </TooltipContent>
    </Tooltip>
  )
}

export { UtilityButton, type UtilityButtonProps }
