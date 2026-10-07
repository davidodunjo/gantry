import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { X } from "@untitledui/icons"

import { cn } from "@/lib/utils"

type CloseButtonProps = Omit<
  ButtonPrimitive.Props,
  "className" | "children"
> & {
  label?: string
  size?: "xs" | "sm" | "md" | "lg"
  theme?: "light" | "dark"
  className?: string
}

function CloseButton(props: CloseButtonProps) {
  const {
    label = "Close",
    size = "sm",
    theme = "light",
    className,
    ...rest
  } = props

  return (
    <ButtonPrimitive
      {...rest}
      aria-label={label}
      data-slot="close-button"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-lg transition duration-100 ease-linear outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        {
          xs: "size-7 [&_svg]:size-4",
          sm: "size-9 [&_svg]:size-5",
          md: "size-10 [&_svg]:size-5",
          lg: "size-11 [&_svg]:size-6",
        }[size],
        theme === "dark"
          ? "text-white/70 hover:bg-white/20 hover:text-white focus-visible:outline-white"
          : "text-muted-foreground/70 hover:bg-muted hover:text-muted-foreground",
        className
      )}
    >
      <X aria-hidden="true" className="pointer-events-none shrink-0" />
    </ButtonPrimitive>
  )
}

export { CloseButton, type CloseButtonProps }
