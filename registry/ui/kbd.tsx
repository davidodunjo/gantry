import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

type KbdProps = ComponentProps<"kbd">

function Kbd(props: KbdProps) {
  const { className, ...rest } = props

  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-md bg-background px-1.5 font-mono text-xs font-medium text-muted-foreground shadow-xs ring-1 ring-input select-none ring-inset in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...rest}
    />
  )
}

type KbdGroupProps = ComponentProps<"kbd">

function KbdGroup(props: KbdGroupProps) {
  const { className, ...rest } = props

  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...rest}
    />
  )
}

export { Kbd, KbdGroup, type KbdGroupProps, type KbdProps }
