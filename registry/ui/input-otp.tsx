"use client"

import { type ComponentProps, useContext, useState } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { OTPInput, OTPInputContext } from "input-otp"

import { cn } from "@/lib/utils"

const inputOTPVariants = cva(
  "group/otp flex w-fit shrink-0 items-center gap-2 has-disabled:cursor-not-allowed",
  {
    variants: {
      controlSize: {
        xxxs: "h-9 gap-1.5 [--otp-font:0.875rem] [--otp-leading:1.25rem] [--otp-placeholder-opacity:50%] [--otp-radius:0.5rem] [--otp-size:2.25rem]",
        xxs: "h-10 [--otp-font:1rem] [--otp-leading:1.5rem] [--otp-placeholder-opacity:50%] [--otp-radius:0.5rem] [--otp-size:2.5rem]",
        xs: "h-11 [--otp-font:1rem] [--otp-leading:1.5rem] [--otp-placeholder-opacity:50%] [--otp-radius:0.5rem] [--otp-size:2.75rem]",
        sm: "h-16.5 [--otp-font:3rem] [--otp-leading:3.75rem] [--otp-placeholder-opacity:40%] [--otp-radius:0.75rem] [--otp-size:4rem] [--otp-tracking:-0.96px]",
        md: "h-20.5 gap-3 [--otp-font:3rem] [--otp-leading:3.75rem] [--otp-placeholder-opacity:40%] [--otp-radius:0.75rem] [--otp-size:5rem] [--otp-tracking:-0.96px]",
        lg: "h-24.5 gap-3 [--otp-font:3.75rem] [--otp-leading:4.5rem] [--otp-placeholder-opacity:40%] [--otp-radius:0.75rem] [--otp-size:6rem] [--otp-tracking:-1.2px]",
      },
    },
    defaultVariants: { controlSize: "md" },
  }
)

const slot =
  "relative flex size-(--otp-size) shrink-0 items-center justify-center rounded-(--otp-radius) bg-background text-center text-(length:--otp-font) leading-(--otp-leading) font-medium tracking-(--otp-tracking) transition-[box-shadow,background-color] duration-100 ease-linear group-has-disabled/otp:opacity-50 group-has-[input[aria-invalid=true]]/otp:text-destructive aria-invalid:text-destructive"

const slotEmpty =
  "text-[color-mix(in_oklch,var(--muted-foreground)_var(--otp-placeholder-opacity),transparent)]"

const slotRing =
  "shadow-xs ring-inset ring-(--otp-ring) group-has-[input[aria-invalid=true]]/otp:[--otp-ring:color-mix(in_oklch,var(--destructive),transparent_50%)] aria-invalid:[--otp-ring:color-mix(in_oklch,var(--destructive),transparent_50%)]"

const slotActive =
  "z-10 [--otp-ring:var(--foreground)] [box-shadow:inset_0_0_0_2px_var(--otp-ring),0_0_0_2px_var(--background),0_0_0_4px_var(--otp-ring),0_1px_2px_0_rgb(0_0_0/5%)] group-has-[input[aria-invalid=true]]/otp:[--otp-ring:var(--destructive)] aria-invalid:[--otp-ring:var(--destructive)] forced-colors:outline-2 forced-colors:outline-offset-2 forced-colors:outline-solid forced-colors:outline-[Highlight]"

type InputOTPProps = ComponentProps<typeof OTPInput> &
  VariantProps<typeof inputOTPVariants>

function InputOTP(props: InputOTPProps) {
  const {
    className,
    containerClassName,
    controlSize = "md",
    defaultValue,
    value,
    onChange,
    ...rest
  } = props
  const [uncontrolledValue, setUncontrolledValue] = useState(
    String(defaultValue ?? "")
  )

  function handleChange(nextValue: string) {
    if (value === undefined) {
      setUncontrolledValue(nextValue)
    }
    onChange?.(nextValue)
  }

  return (
    <OTPInput
      data-slot="input-otp"
      spellCheck={false}
      {...rest}
      value={value ?? uncontrolledValue}
      onChange={handleChange}
      containerClassName={cn(
        inputOTPVariants({ controlSize }),
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
    />
  )
}

type InputOTPGroupProps = ComponentProps<"div">

function InputOTPGroup(props: InputOTPGroupProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="input-otp-group"
      {...rest}
      className={cn("flex min-w-0 items-center gap-[inherit]", className)}
    />
  )
}

type InputOTPSlotProps = ComponentProps<"div"> & { index: number }

function InputOTPSlot(props: InputOTPSlotProps) {
  const { index, className, ...rest } = props
  const context = useContext(OTPInputContext)
  const { char, placeholderChar, hasFakeCaret, isActive } =
    context?.slots[index] ?? {}
  const active = context.isFocused && isActive
  const filled = Boolean(char)

  return (
    <div
      data-slot="input-otp-slot"
      data-active={active}
      data-filled={filled}
      aria-hidden="true"
      {...rest}
      className={cn(
        slot,
        filled ? "text-foreground" : slotEmpty,
        active
          ? slotActive
          : cn(
              slotRing,
              filled
                ? "ring-2 [--otp-ring:var(--foreground)]"
                : "ring-1 [--otp-ring:var(--input)]"
            ),
        className
      )}
    >
      {char || (!hasFakeCaret && (placeholderChar ?? "0"))}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[1em] w-0.5 animate-caret-blink bg-foreground motion-reduce:animate-none" />
        </div>
      )}
    </div>
  )
}

type InputOTPSeparatorProps = ComponentProps<"div">

function InputOTPSeparator(props: InputOTPSeparatorProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="input-otp-separator"
      aria-hidden="true"
      {...rest}
      className={cn(
        "shrink-0 text-center text-[60px] leading-[72px] font-medium tracking-[-1.2px] text-input",
        className
      )}
    >
      -
    </div>
  )
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  inputOTPVariants,
  type InputOTPProps,
}
