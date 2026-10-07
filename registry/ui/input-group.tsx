"use client"

import { type ComponentProps, type PointerEvent } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const inputGroupVariants = cva(
  "group/input-group relative flex w-full min-w-0 items-center rounded-[8px] bg-background shadow-xs ring-1 ring-input transition-shadow duration-100 outline-none ring-inset has-[>:disabled]:cursor-not-allowed has-[>:disabled]:opacity-50 has-[>[aria-invalid=true],>[data-invalid]]:ring-destructive/50 has-[>[aria-invalid=true]:focus-visible,>[data-invalid]:focus-visible]:ring-destructive has-[>[data-slot=input-group-control]:focus-visible]:ring-2 has-[>[data-slot=input-group-control]:focus-visible]:ring-foreground has-[>textarea,>[data-align=block-start],>[data-align=block-end]]:h-auto has-[>textarea,>[data-align=block-start],>[data-align=block-end]]:flex-col has-[>textarea,>[data-align=block-start],>[data-align=block-end]]:items-stretch has-[>[data-align=inline-end]]:[&>input]:pe-2 has-[>[data-align=inline-start]]:[&>input]:ps-2",
  {
    variants: {
      controlSize: {
        sm: "h-9",
        default: "h-10",
        lg: "h-11",
      },
    },
    defaultVariants: { controlSize: "default" },
  }
)

type InputGroupProps = ComponentProps<"div"> &
  VariantProps<typeof inputGroupVariants>

function InputGroup(props: InputGroupProps) {
  const { className, controlSize = "default", ...rest } = props

  return (
    <div
      data-slot="input-group"
      data-size={controlSize}
      {...rest}
      className={cn(inputGroupVariants({ controlSize }), className)}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex shrink-0 items-center gap-2 text-base text-muted-foreground group-data-[size=sm]/input-group:text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 group-data-[size=sm]/input-group:[&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first has-[button]:px-1!",
        "inline-end": "order-last has-[button]:px-1!",
        "block-start": "order-first w-full px-3 pt-3",
        "block-end": "order-last w-full px-3 pb-3",
      },
      separated: {
        true: "self-stretch px-3",
        false: "",
      },
    },
    compoundVariants: [
      {
        align: "inline-start",
        separated: false,
        className: "ps-3 group-data-[size=lg]/input-group:ps-3.5",
      },
      {
        align: "inline-end",
        separated: false,
        className: "pe-3 group-data-[size=lg]/input-group:pe-3.5",
      },
      {
        align: "inline-start",
        separated: true,
        className: "border-e border-input",
      },
      {
        align: "inline-end",
        separated: true,
        className: "border-s border-input",
      },
    ],
    defaultVariants: { align: "inline-start", separated: false },
  }
)

type InputGroupAddonProps = ComponentProps<"div"> &
  VariantProps<typeof inputGroupAddonVariants>

function InputGroupAddon(props: InputGroupAddonProps) {
  const {
    className,
    align = "inline-start",
    separated = false,
    onPointerDown,
    ...rest
  } = props

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    onPointerDown?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      (event.target as HTMLElement).closest(
        "button, a, input, textarea, select, [role=button], [tabindex]"
      )
    ) {
      return
    }

    event.preventDefault()
    event.currentTarget.parentElement
      ?.querySelector<HTMLInputElement | HTMLTextAreaElement>("input, textarea")
      ?.focus()
  }

  return (
    <div
      data-slot="input-group-addon"
      data-align={align}
      {...rest}
      onPointerDown={handlePointerDown}
      className={cn(inputGroupAddonVariants({ align, separated }), className)}
    />
  )
}

const inputGroupButtonVariants = cva("shrink-0 shadow-none", {
  variants: {
    size: {
      xs: "h-7 rounded-[6px] px-2 text-sm [&_svg:not([class*='size-'])]:size-4",
      sm: "h-8 rounded-[6px] px-2.5 text-sm [&_svg:not([class*='size-'])]:size-4",
      "icon-xs":
        "size-7 rounded-[6px] p-0 [&_svg:not([class*='size-'])]:size-4",
      "icon-sm":
        "size-8 rounded-[6px] p-0 [&_svg:not([class*='size-'])]:size-4",
    },
  },
  defaultVariants: { size: "xs" },
})

type InputGroupButtonProps = Omit<ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>

function InputGroupButton(props: InputGroupButtonProps) {
  const {
    className,
    type = "button",
    variant = "ghost",
    size = "xs",
    ...rest
  } = props

  return (
    <Button
      {...rest}
      type={type}
      size={size?.startsWith("icon") ? "icon" : "default"}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
    />
  )
}

type InputGroupTextProps = ComponentProps<"span">

function InputGroupText(props: InputGroupTextProps) {
  const { className, ...rest } = props

  return (
    <span
      {...rest}
      className={cn("flex items-center gap-2 text-muted-foreground", className)}
    />
  )
}

type InputGroupInputProps = ComponentProps<typeof Input>

function InputGroupInput(props: InputGroupInputProps) {
  const { className, ...rest } = props
  const styles =
    "min-w-0 flex-1 rounded-[inherit] border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent disabled:opacity-100 aria-invalid:ring-0 data-invalid:ring-0 group-data-[size=sm]/input-group:text-sm"

  return (
    <Input
      {...rest}
      data-slot="input-group-control"
      className={
        typeof className === "function"
          ? (state) => cn(styles, className(state))
          : cn(styles, className)
      }
    />
  )
}

type InputGroupTextareaProps = ComponentProps<typeof Textarea>

function InputGroupTextarea(props: InputGroupTextareaProps) {
  const { className, ...rest } = props

  return (
    <Textarea
      {...rest}
      data-slot="input-group-control"
      className={cn(
        "min-h-16 min-w-0 flex-1 resize-none rounded-[inherit] border-0 bg-transparent px-3 py-2.5 text-base shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent disabled:opacity-100 aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className
      )}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
  inputGroupVariants,
  inputGroupAddonVariants,
  inputGroupButtonVariants,
  type InputGroupProps,
  type InputGroupAddonProps,
  type InputGroupButtonProps,
  type InputGroupTextProps,
  type InputGroupInputProps,
  type InputGroupTextareaProps,
}
