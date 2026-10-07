import { createContext, useContext, type CSSProperties } from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { type VariantProps } from "class-variance-authority"

import { toggleVariants } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"

type ToggleGroupContextValue = VariantProps<typeof toggleVariants> & {
  spacing?: number
  orientation?: "horizontal" | "vertical"
}

const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: "default",
  variant: "default",
  spacing: 2,
  orientation: "horizontal",
})

type ToggleGroupProps = ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: "horizontal" | "vertical"
  }

function ToggleGroup(props: ToggleGroupProps) {
  const {
    className,
    variant,
    size,
    spacing = 2,
    orientation = "horizontal",
    children,
    ...rest
  } = props

  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      orientation={orientation}
      style={{ "--gap": spacing } as CSSProperties}
      className={(state) =>
        cn(
          "group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch data-[size=sm]:rounded-[min(var(--radius-md),10px)]",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <ToggleGroupContext.Provider
        value={{ variant, size, spacing, orientation }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

type ToggleGroupItemProps = TogglePrimitive.Props &
  VariantProps<typeof toggleVariants>

function ToggleGroupItem(props: ToggleGroupItemProps) {
  const {
    className,
    children,
    variant = "default",
    size = "default",
    ...rest
  } = props
  const context = useContext(ToggleGroupContext)

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={(state) =>
        cn(
          "shrink-0 group-data-[spacing=0]/toggle-group:rounded-none focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:first:rounded-s-lg group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:last:rounded-e-lg group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:data-[variant=outline]:not-first:-ms-px group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:data-[variant=outline]:not-first:-mt-px group-data-[orientation=horizontal]/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-s group-data-[orientation=vertical]/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size,
          }),
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
