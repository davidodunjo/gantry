import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

type SpinnerProps = ComponentProps<"svg"> & {
  size?: "inline" | "sm" | "default" | "lg" | "xl"
  variant?: "line-simple" | "line-spinner"
}

function Spinner(props: SpinnerProps) {
  const { className, size = "inline", variant = "line-simple", ...rest } = props

  return (
    <svg
      data-slot="spinner"
      data-size={size}
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- Preserve the SVG component API while exposing an accessible loading status.
      role="status"
      aria-label="Loading"
      viewBox="0 0 32 32"
      fill="none"
      className={cn(
        "size-5 animate-spin data-[size=default]:size-12 data-[size=lg]:size-14 data-[size=sm]:size-8 data-[size=xl]:size-16 motion-reduce:animate-none",
        className
      )}
      {...rest}
    >
      {variant === "line-simple" && (
        <circle
          cx="16"
          cy="16"
          r="14"
          stroke="currentColor"
          strokeWidth="4"
          className="text-muted"
        />
      )}
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="100"
        strokeDashoffset={variant === "line-simple" ? 75 : 40}
      />
    </svg>
  )
}

export { Spinner, type SpinnerProps }
