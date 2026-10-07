import { type ReactNode } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const solid =
  "shadow-[inset_0_0_0_1px_rgb(0_0_0/18%),inset_0_-2px_0_rgb(0_0_0/5%),0_1px_2px_rgb(0_0_0/5%)] before:pointer-events-none before:absolute before:inset-px before:rounded-[inherit] before:border before:border-white/12 before:[mask-image:linear-gradient(black,transparent)]"

const bordered =
  "shadow-[inset_0_0_0_1px_var(--button-border,var(--border)),inset_0_-2px_0_rgb(0_0_0/5%),0_1px_2px_rgb(0_0_0/5%)]"

const link =
  "h-auto! rounded p-0! underline-offset-4 hover:not-data-disabled:underline"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center rounded-[8px] text-sm font-semibold whitespace-nowrap transition duration-100 ease-linear outline-none select-none hover:not-data-disabled:bg-(--button-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:not-aria-disabled:not-aria-[haspopup]:translate-y-px aria-expanded:bg-(--button-hover) aria-invalid:outline-2 aria-invalid:outline-destructive data-loading:cursor-progress data-loading:bg-(--button-hover) data-disabled:not-data-loading:cursor-not-allowed data-disabled:not-data-loading:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: `${solid} bg-primary text-primary-foreground [--button-hover:color-mix(in_oklch,var(--primary),var(--primary-foreground)_10%)]`,
        outline: `${bordered} bg-background text-foreground [--button-hover:var(--muted)]`,
        secondary: `${bordered} bg-secondary text-secondary-foreground [--button-hover:color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]`,
        ghost:
          "text-muted-foreground [--button-hover:var(--muted)] hover:text-foreground",
        destructive: `${solid} bg-(--button-destructive) text-white [--button-destructive:oklch(0.577_0.245_27.325)] [--button-hover:color-mix(in_oklch,var(--button-destructive),black_10%)] focus-visible:outline-destructive`,
        "destructive-outline": `${bordered} bg-background text-destructive [--button-border:color-mix(in_oklch,var(--destructive),transparent_60%)] [--button-hover:color-mix(in_oklch,var(--destructive),var(--background)_95%)] focus-visible:outline-destructive`,
        "destructive-ghost":
          "text-destructive [--button-hover:color-mix(in_oklch,var(--destructive),var(--background)_95%)] focus-visible:outline-destructive",
        link: `${link} text-primary`,
        "link-muted": `${link} text-muted-foreground hover:text-foreground`,
        "destructive-link": `${link} text-destructive focus-visible:outline-destructive`,
      },
      size: {
        xs: "h-8 gap-1 px-2.5 [&_svg]:stroke-[2.25px] [&_svg:not([class*='size-'])]:size-4",
        sm: "h-9 gap-1 px-3",
        default: "h-10 gap-1 px-3.5",
        lg: "h-11 gap-1.5 px-4 text-base",
        xl: "h-12 gap-1.5 px-4.5 text-base",
        "icon-xs":
          "size-8 [&_svg]:stroke-[2.25px] [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-9",
        icon: "size-10",
        "icon-lg": "size-11",
        "icon-xl": "size-12",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean
    showTextWhileLoading?: boolean
    noTextPadding?: boolean
    children?: ReactNode
  }

function Button(props: ButtonProps) {
  const {
    className,
    variant = "default",
    size = "default",
    loading = false,
    showTextWhileLoading = false,
    noTextPadding = false,
    disabled = false,
    focusableWhenDisabled,
    children,
    ...rest
  } = props
  const iconOnly = size?.startsWith("icon")
  const spinnerReplacesContent = loading && !showTextWhileLoading

  return (
    <ButtonPrimitive
      data-slot="button"
      {...rest}
      data-loading={loading || undefined}
      disabled={disabled || loading}
      focusableWhenDisabled={
        loading && !disabled ? true : focusableWhenDisabled
      }
      aria-busy={loading || rest["aria-busy"]}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {loading && (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className={cn(spinnerReplacesContent && "absolute inset-0 m-auto")}
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.3"
          />
          <circle
            className="origin-center animate-spin motion-reduce:animate-none"
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="12.5 50"
            strokeLinecap="round"
          />
        </svg>
      )}
      <span
        className={cn(
          "inline-flex items-center justify-center gap-[inherit] [&_svg]:opacity-65 [&_svg]:transition-opacity [&_svg]:duration-100 [&_svg]:ease-linear group-hover/button:[&_svg]:opacity-80",
          !iconOnly && !noTextPadding && "px-0.5",
          spinnerReplacesContent && "opacity-0",
          loading && showTextWhileLoading && "[&_svg]:hidden"
        )}
      >
        {children}
      </span>
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants, type ButtonProps }
