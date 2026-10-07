"use client"

import { Slider as SliderPrimitive } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

type SliderProps = SliderPrimitive.Root.Props & {
  labelPosition?: "default" | "bottom" | "top-floating"
  labelFormatter?: (value: number) => string
}

function Slider(props: SliderProps) {
  const {
    labelPosition = "default",
    labelFormatter = (value) => `${value}%`,
    className,
    defaultValue,
    value,
    min = 0,
    max = 100,
    ...rest
  } = props
  const thumbCount = Array.isArray(value)
    ? value.length
    : Array.isArray(defaultValue)
      ? defaultValue.length
      : 1

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="center"
      {...rest}
      className={(state) =>
        cn(
          "w-full data-vertical:h-full data-vertical:w-auto",
          typeof className === "function" ? className(state) : className
        )
      }
    >
      <SliderPrimitive.Control className="relative flex min-h-6 w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-neutral-200 select-none dark:bg-neutral-800 data-horizontal:h-2 data-vertical:h-full data-vertical:w-2"
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className="bg-primary select-none data-horizontal:h-full data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: thumbCount }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            index={index}
            className="relative block size-6 shrink-0 cursor-grab rounded-full bg-background shadow-md ring-2 ring-primary transition-[color,box-shadow] outline-none select-none ring-inset after:absolute after:-inset-2 hover:ring-foreground/60 active:cursor-grabbing has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-foreground has-[:focus-visible]:outline-solid data-disabled:pointer-events-none"
          >
            {labelPosition !== "default" && (
              <SliderPrimitive.Value
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap",
                  labelPosition === "bottom"
                    ? "top-2 translate-y-full text-base font-medium text-foreground"
                    : "-top-2 -translate-y-full rounded-lg bg-background px-2 py-1.5 text-xs font-semibold text-foreground shadow-lg ring-1 ring-border"
                )}
              >
                {(_formatted, values) => labelFormatter(values[index] ?? min)}
              </SliderPrimitive.Value>
            )}
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider, type SliderProps }
