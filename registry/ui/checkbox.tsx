import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { Check, Minus } from "@untitledui/icons"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer relative inline-flex shrink-0 cursor-pointer items-center justify-center bg-background text-primary-foreground shadow-[inset_0_0_0_1px_var(--checkbox-border)] transition-[background-color,box-shadow] duration-100 ease-linear outline-none [--checkbox-border:var(--input)] [--checkbox-focus:var(--foreground)] after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:shadow-[inset_0_0_0_1px_var(--checkbox-border),0_0_0_2px_var(--background),0_0_0_4px_var(--checkbox-focus)] aria-invalid:[--checkbox-border:var(--destructive)] aria-invalid:[--checkbox-focus:var(--destructive)] data-invalid:[--checkbox-border:var(--destructive)] data-invalid:[--checkbox-focus:var(--destructive)] data-readonly:cursor-default forced-colors:border forced-colors:border-[ButtonText] forced-colors:focus-visible:outline-2 forced-colors:focus-visible:outline-offset-2 forced-colors:focus-visible:outline-[Highlight] forced-colors:focus-visible:outline-solid data-checked:bg-primary data-checked:[--checkbox-border:var(--primary)] data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:not-data-checked:not-data-indeterminate:bg-muted [&:where([data-indeterminate])]:bg-primary [&:where([data-indeterminate])]:[--checkbox-border:var(--primary)]",
  {
    variants: {
      size: {
        sm: "size-4 rounded-[4px] [--checkbox-icon-size:12px]",
        md: "size-5 rounded-[6px] [--checkbox-icon-size:14px]",
      },
    },
    defaultVariants: { size: "sm" },
  }
)

type CheckboxProps = CheckboxPrimitive.Root.Props &
  VariantProps<typeof checkboxVariants>

function Checkbox(props: CheckboxProps) {
  const { className, size = "sm", ...rest } = props

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      {...rest}
      className={
        typeof className === "function"
          ? (state) => cn(checkboxVariants({ size }), className(state))
          : cn(checkboxVariants({ size }), className)
      }
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="group/indicator grid place-content-center text-current [&>svg]:size-(--checkbox-icon-size)"
      >
        <Check
          aria-hidden="true"
          strokeWidth={3.5}
          className="group-data-indeterminate/indicator:hidden"
        />
        <Minus
          aria-hidden="true"
          strokeWidth={3.5}
          className="hidden group-data-indeterminate/indicator:block"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, checkboxVariants, type CheckboxProps }
