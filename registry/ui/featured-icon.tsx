import { type ComponentProps, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type FeaturedIconProps = Omit<ComponentProps<"div">, "color"> & {
  icon?: ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  color?: "brand" | "gray" | "error" | "warning" | "success"
  theme?: "light" | "gradient" | "dark" | "outline" | "modern" | "modern-neue"
}

const sizes = {
  sm: "size-8 [&_svg]:size-4 [&_svg]:stroke-[2.25px]",
  md: "size-10 [&_svg]:size-5",
  lg: "size-12 [&_svg]:size-6",
  xl: "size-14 [&_svg]:size-7",
}
const shapes = {
  sm: "rounded-md before:rounded-[5px]",
  md: "rounded-lg before:rounded-[7px]",
  lg: "rounded-[10px] before:rounded-[9px]",
  xl: "rounded-xl before:rounded-[11px]",
}
const colors = {
  brand:
    "[--featured-color:var(--foreground)] [--featured-soft:var(--muted)] [--featured-on:var(--background)]",
  gray: "[--featured-color:var(--muted-foreground)] [--featured-soft:var(--muted)] [--featured-on:var(--background)]",
  error:
    "[--featured-color:var(--destructive)] [--featured-soft:color-mix(in_oklab,var(--destructive),var(--background)_90%)] [--featured-on:white]",
  warning:
    "[--featured-color:var(--color-amber-600)] [--featured-soft:color-mix(in_oklab,var(--color-amber-600),var(--background)_90%)] [--featured-on:white]",
  success:
    "[--featured-color:var(--color-emerald-600)] [--featured-soft:color-mix(in_oklab,var(--color-emerald-600),var(--background)_90%)] [--featured-on:white]",
}

function FeaturedIcon(props: FeaturedIconProps) {
  const {
    icon,
    children,
    size = "sm",
    color = "brand",
    theme = "light",
    className,
    ...rest
  } = props
  return (
    <div
      {...rest}
      data-slot="featured-icon"
      data-theme={theme}
      className={cn(
        "relative isolate inline-flex shrink-0 items-center justify-center text-(--featured-color) before:pointer-events-none after:pointer-events-none [&_svg]:shrink-0",
        sizes[size],
        colors[color],
        theme === "light" && "rounded-full bg-(--featured-soft)",
        theme === "dark" && [
          shapes[size],
          "bg-(--featured-color) text-(--featured-on) shadow-[0_1px_2px_0_#0a0d120d,inset_0_-2px_0_0_#0a0d120d] before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0%",
        ],
        theme === "modern" && [
          shapes[size],
          "bg-background shadow-[0_1px_2px_0_#0a0d120d,inset_0_-2px_0_0_#0a0d120d] ring-1 ring-input ring-inset",
        ],
        theme === "modern-neue" && [
          "bg-background ring-1 ring-input ring-inset before:absolute before:inset-1 before:shadow-[0_1px_2px_0_#0000001a,0_3px_3px_0_#00000017,1px_8px_5px_0_#0000000d,1px_13px_5px_0_#00000003,inset_0_-2px_2px_0_#00000021] before:ring-1 before:ring-border",
          {
            sm: "rounded-lg before:rounded",
            md: "rounded-[10px] before:rounded-md",
            lg: "rounded-xl before:rounded-lg",
            xl: "rounded-[14px] before:rounded-[10px]",
          }[size],
        ],
        theme === "gradient" && [
          "rounded-full text-(--featured-on) before:absolute before:inset-0 before:rounded-full before:border before:border-(--featured-color)/20 before:bg-(--featured-soft) before:mask-b-from-0% after:absolute after:rounded-full after:bg-(--featured-color)",
          {
            sm: "after:size-6 [&_svg]:size-4",
            md: "after:size-7 [&_svg]:size-4",
            lg: "after:size-8 [&_svg]:size-5",
            xl: "after:size-10 [&_svg]:size-5",
          }[size],
        ],
        theme === "outline" && [
          "before:absolute before:rounded-full before:border-2 before:border-(--featured-color)/30 after:absolute after:rounded-full after:border-2 after:border-(--featured-color)/10",
          {
            sm: "size-4 before:size-6 after:size-8.5",
            md: "size-5 before:size-7 after:size-9.5",
            lg: "size-6 before:size-8 after:size-10.5",
            xl: "size-7 before:size-9 after:size-11.5",
          }[size],
        ],
        className
      )}
    >
      <span className="relative z-1 inline-flex items-center justify-center">
        {icon ?? children}
      </span>
    </div>
  )
}

export { FeaturedIcon, type FeaturedIconProps }
