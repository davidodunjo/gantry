import { Input as InputPrimitive } from "@base-ui/react/input"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "w-full min-w-0 rounded-[8px] border-0 bg-background text-foreground shadow-xs ring-1 ring-input transition-shadow duration-100 ease-linear outline-none ring-inset file:me-3 file:h-full file:border-0 file:bg-transparent file:text-sm file:font-semibold file:text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-foreground disabled:cursor-not-allowed disabled:opacity-50 in-data-[slot=input-group]:h-full aria-invalid:ring-destructive/50 aria-invalid:focus-visible:ring-destructive data-invalid:ring-destructive/50 data-invalid:focus-visible:ring-destructive",
  {
    variants: {
      controlSize: {
        sm: "h-9 px-3 text-sm",
        default: "h-10 px-3 text-base",
        lg: "h-11 px-3.5 text-base",
      },
    },
    defaultVariants: { controlSize: "default" },
  }
)

type InputProps = InputPrimitive.Props & VariantProps<typeof inputVariants>

function Input(props: InputProps) {
  const { className, controlSize = "default", ...rest } = props

  return (
    <InputPrimitive
      data-slot="input"
      {...rest}
      className={
        typeof className === "function"
          ? (state) => cn(inputVariants({ controlSize }), className(state))
          : cn(inputVariants({ controlSize }), className)
      }
    />
  )
}

export { Input, inputVariants, type InputProps }
