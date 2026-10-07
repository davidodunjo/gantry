"use client"

import { type ReactNode } from "react"
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

import { cn } from "@/lib/utils"

type TooltipProviderProps = TooltipPrimitive.Provider.Props

type TooltipProps = TooltipPrimitive.Root.Props

type TooltipTriggerProps = TooltipPrimitive.Trigger.Props

type TooltipContentProps = Omit<TooltipPrimitive.Popup.Props, "title"> &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  > & {
    title?: ReactNode
    description?: ReactNode
    arrow?: boolean
  }

function TooltipProvider(props: TooltipProviderProps) {
  const { delay = 300, ...rest } = props

  return <TooltipPrimitive.Provider delay={delay} {...rest} />
}

function Tooltip(props: TooltipProps) {
  return <TooltipPrimitive.Root {...props} />
}

function TooltipTrigger(props: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent(props: TooltipContentProps) {
  const {
    className,
    side = "top",
    sideOffset = 6,
    align = "center",
    alignOffset = 0,
    children,
    title,
    description,
    arrow = false,
    ...rest
  } = props

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={(state) =>
            cn(
              "z-50 flex w-fit max-w-xs origin-(--transform-origin) flex-col items-start gap-1 rounded-lg bg-neutral-950 px-3 text-xs text-white shadow-lg transition-[opacity,transform] duration-150 ease-out outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 data-[side=bottom]:data-starting-style:-translate-y-0.5 data-[side=left]:data-starting-style:translate-x-0.5 data-[side=right]:data-starting-style:-translate-x-0.5 data-[side=top]:data-starting-style:translate-y-0.5 motion-reduce:transition-none dark:bg-neutral-900",
              description ? "py-3" : "py-2",
              typeof className === "function" ? className(state) : className
            )
          }
          {...rest}
        >
          <span className="font-semibold">{title ?? children}</span>
          {description && (
            <span className="font-medium text-neutral-300">{description}</span>
          )}
          {arrow && (
            <TooltipPrimitive.Arrow className="flex size-2.5 items-start justify-center data-[side=bottom]:-top-2.5 data-[side=bottom]:rotate-180 data-[side=left]:-right-2.5 data-[side=left]:-rotate-90 data-[side=right]:-left-2.5 data-[side=right]:rotate-90 data-[side=top]:-bottom-2.5">
              <svg
                aria-hidden="true"
                width="10"
                height="10"
                viewBox="0 0 100 100"
                className="fill-neutral-950 dark:fill-neutral-900"
              >
                <path d="M0,0 L35.858,35.858 Q50,50 64.142,35.858 L100,0 Z" />
              </svg>
            </TooltipPrimitive.Arrow>
          )}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  type TooltipContentProps,
  type TooltipProps,
  type TooltipProviderProps,
  type TooltipTriggerProps,
}
