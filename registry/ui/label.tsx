import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

type LabelProps = ComponentProps<"label"> & {
  required?: boolean
  invalid?: boolean
  disabled?: boolean
}

function Label(props: LabelProps) {
  const { className, htmlFor, children, required, invalid, disabled, ...rest } =
    props

  return (
    <label
      data-slot="label"
      {...rest}
      htmlFor={htmlFor}
      data-required={required}
      data-invalid={invalid}
      data-disabled={disabled}
      className={cn(
        "group/label flex cursor-default items-center gap-0.5 text-sm leading-5 font-medium text-foreground/80 select-none group-data-[disabled=true]:cursor-not-allowed group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
        className
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "text-foreground group-data-[invalid=true]/label:text-destructive",
          required === undefined
            ? "hidden group-data-required:inline"
            : required
              ? "inline"
              : "hidden",
          invalid === undefined && "group-data-invalid:text-destructive"
        )}
      >
        *
      </span>
    </label>
  )
}

export { Label, type LabelProps }
