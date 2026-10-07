import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus-visible:outline-solid disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "bg-background shadow-[inset_0_0_0_1px_var(--border),inset_0_-2px_0_rgb(0_0_0/5%),0_1px_2px_rgb(0_0_0/5%)] hover:bg-muted",
      },
      size: {
        default:
          "h-10 min-w-10 px-4 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-9 min-w-9 px-3.5 text-sm has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-5",
        lg: "h-11 min-w-11 px-4.5 text-base has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ToggleProps = TogglePrimitive.Props & VariantProps<typeof toggleVariants>

function Toggle(props: ToggleProps) {
  const { className, variant = "default", size = "default", ...rest } = props

  return (
    <TogglePrimitive
      data-slot="toggle"
      className={(state) =>
        cn(
          toggleVariants({ variant, size }),
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

export { Toggle, toggleVariants, type ToggleProps }
