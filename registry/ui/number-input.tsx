"use client"

import { useId, type ReactNode, type Ref } from "react"
import { NumberField } from "@base-ui/react/number-field"
import { ChevronDown, ChevronUp, Minus, Plus } from "@untitledui/icons"

import { cn } from "@/lib/utils"

const stepperButton =
  "flex shrink-0 items-center justify-center text-muted-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50"

type NumberInputProps = Omit<
  NumberField.Root.Props,
  "className" | "children"
> & {
  label: string
  hint?: ReactNode
  invalid?: boolean
  size?: "sm" | "md" | "lg"
  orientation?: "horizontal" | "vertical"
  placeholder?: string
  className?: string
  controlClassName?: string
  visibleInputRef?: Ref<HTMLInputElement>
}

function NumberInput(props: NumberInputProps) {
  const {
    label,
    hint,
    invalid = false,
    size = "md",
    orientation = "vertical",
    placeholder,
    className,
    controlClassName,
    visibleInputRef,
    id,
    required,
    disabled,
    readOnly,
    ...rest
  } = props
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <NumberField.Root
      {...rest}
      id={inputId}
      required={required}
      disabled={disabled}
      readOnly={readOnly}
      data-slot="number-input"
      className={cn("flex w-full flex-col gap-1.5", className)}
    >
      <label htmlFor={inputId} className="text-sm font-medium text-foreground">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <NumberField.Group
        className={cn(
          "relative flex w-full items-stretch overflow-hidden rounded-lg bg-background shadow-xs ring-1 ring-input transition-shadow ring-inset focus-within:ring-2 focus-within:ring-foreground",
          { sm: "h-9", md: "h-10", lg: "h-11" }[size],
          disabled && "cursor-not-allowed opacity-50",
          invalid && "ring-destructive/50 focus-within:ring-destructive",
          controlClassName
        )}
      >
        {orientation === "horizontal" && (
          <NumberField.Decrement
            aria-label={`Decrease ${label}`}
            disabled={readOnly}
            className={cn(stepperButton, "w-10")}
          >
            <Minus aria-hidden="true" className="size-5" />
          </NumberField.Decrement>
        )}
        <NumberField.Input
          ref={visibleInputRef}
          placeholder={placeholder}
          aria-invalid={invalid || undefined}
          aria-describedby={hint ? `${inputId}-hint` : undefined}
          className={cn(
            "min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
            size === "sm"
              ? "px-3 text-sm"
              : size === "lg"
                ? "px-3.5 text-base"
                : "px-3 text-base",
            orientation === "horizontal" && "text-center"
          )}
        />
        {orientation === "horizontal" ? (
          <NumberField.Increment
            aria-label={`Increase ${label}`}
            disabled={readOnly}
            className={cn(stepperButton, "w-10")}
          >
            <Plus aria-hidden="true" className="size-5" />
          </NumberField.Increment>
        ) : (
          <div
            className={cn(
              "flex shrink-0 flex-col border-l border-input",
              size === "lg" ? "w-7.5" : "w-7"
            )}
          >
            <NumberField.Increment
              aria-label={`Increase ${label}`}
              disabled={readOnly}
              className={cn(stepperButton, "flex-1")}
            >
              <ChevronUp
                aria-hidden="true"
                className={
                  size === "lg" ? "size-3.5 stroke-[2.57px]" : "size-3 stroke-3"
                }
              />
            </NumberField.Increment>
            <NumberField.Decrement
              aria-label={`Decrease ${label}`}
              disabled={readOnly}
              className={cn(stepperButton, "flex-1 border-t border-input")}
            >
              <ChevronDown
                aria-hidden="true"
                className={
                  size === "lg" ? "size-3.5 stroke-[2.57px]" : "size-3 stroke-3"
                }
              />
            </NumberField.Decrement>
          </div>
        )}
      </NumberField.Group>
      {hint && (
        <p
          id={`${inputId}-hint`}
          className={cn(
            size === "sm" ? "text-xs" : "text-sm",
            invalid ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {hint}
        </p>
      )}
    </NumberField.Root>
  )
}

export { NumberInput, type NumberInputProps }
