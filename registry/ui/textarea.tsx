import { type ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "block field-sizing-content min-h-32 w-full min-w-0 resize-y scroll-py-3 rounded-[8px] border-0 bg-background text-foreground shadow-xs ring-1 ring-input transition-shadow duration-100 ease-linear outline-none ring-inset placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/50 aria-invalid:focus-visible:ring-destructive",
  {
    variants: {
      controlSize: {
        sm: "p-3 text-sm leading-5",
        default: "px-3.5 py-3 text-base leading-6",
        lg: "p-4 text-base leading-6",
      },
    },
    defaultVariants: { controlSize: "default" },
  }
)

type TextareaProps = ComponentProps<"textarea"> &
  VariantProps<typeof textareaVariants>

function Textarea(props: TextareaProps) {
  const { className, controlSize = "default", ...rest } = props

  return (
    <textarea
      data-slot="textarea"
      {...rest}
      className={cn(textareaVariants({ controlSize }), className)}
    />
  )
}

export { Textarea, textareaVariants, type TextareaProps }
