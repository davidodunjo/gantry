import { type ComponentProps, type ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type FieldSetProps = ComponentProps<"fieldset">

function FieldSet(props: FieldSetProps) {
  const { className, ...rest } = props

  return (
    <fieldset
      data-slot="field-set"
      {...rest}
      className={cn(
        "flex flex-col gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
    />
  )
}

type FieldLegendProps = ComponentProps<"legend"> & {
  variant?: "legend" | "label"
}

function FieldLegend(props: FieldLegendProps) {
  const { className, variant = "legend", ...rest } = props

  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      {...rest}
      className={cn(
        "mb-3 font-medium text-foreground/80 data-[variant=label]:text-sm data-[variant=legend]:text-base",
        className
      )}
    />
  )
}

type FieldGroupProps = ComponentProps<"div">

function FieldGroup(props: FieldGroupProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="field-group"
      {...rest}
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-6 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
        className
      )}
    />
  )
}

const fieldVariants = cva("group group/field flex w-full gap-1.5", {
  variants: {
    orientation: {
      vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
      horizontal:
        "flex-row items-center gap-3 has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive:
        "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:gap-6 @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
    },
  },
  defaultVariants: { orientation: "vertical" },
})

type FieldProps = ComponentProps<"div"> & VariantProps<typeof fieldVariants>

function Field(props: FieldProps) {
  const { className, orientation = "vertical", ...rest } = props

  return (
    <div
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- Field keeps a div-based composition API; FieldSet supplies native fieldset semantics.
      role="group"
      data-slot="field"
      data-orientation={orientation}
      {...rest}
      className={cn(fieldVariants({ orientation }), className)}
    />
  )
}

type FieldContentProps = ComponentProps<"div">

function FieldContent(props: FieldContentProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="field-content"
      {...rest}
      className={cn(
        "group/field-content flex min-w-0 flex-1 flex-col gap-1.5",
        className
      )}
    />
  )
}

type FieldLabelProps = ComponentProps<typeof Label>

function FieldLabel(props: FieldLabelProps) {
  const { className, ...rest } = props

  return (
    <Label
      data-slot="field-label"
      {...rest}
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-0.5 leading-5 group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 *:data-[slot=field]:p-2.5 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      )}
    />
  )
}

type FieldTitleProps = ComponentProps<"div">

function FieldTitle(props: FieldTitleProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="field-label"
      {...rest}
      className={cn(
        "flex w-fit items-center gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50",
        className
      )}
    />
  )
}

type FieldDescriptionProps = ComponentProps<"p">

function FieldDescription(props: FieldDescriptionProps) {
  const { className, ...rest } = props

  return (
    <p
      data-slot="field-description"
      {...rest}
      className={cn(
        "text-start text-sm leading-5 font-normal text-muted-foreground group-data-[disabled=true]/field:opacity-50 group-data-[invalid=true]/field:text-destructive",
        "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      )}
    />
  )
}

type FieldSeparatorProps = ComponentProps<"div"> & {
  children?: ReactNode
}

function FieldSeparator(props: FieldSeparatorProps) {
  const { children, className, ...rest } = props

  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      {...rest}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

type FieldErrorProps = ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
  size?: "sm" | "default"
}

function FieldError(props: FieldErrorProps) {
  const { className, children, errors, size = "default", ...rest } = props
  const messages = [
    ...new Set(
      errors
        ?.map((error) => error?.message)
        .filter((message): message is string => Boolean(message?.trim()))
    ),
  ]
  const content =
    children ??
    (messages.length === 1 ? (
      messages[0]
    ) : messages.length > 1 ? (
      <ul className="ms-4 flex list-disc flex-col gap-1">
        {messages.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    ) : null)

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      {...rest}
      className={cn(
        "font-normal text-destructive",
        size === "sm" ? "text-xs leading-4" : "text-sm leading-5",
        className
      )}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  type FieldProps,
  type FieldSetProps,
  type FieldLegendProps,
  type FieldGroupProps,
  type FieldContentProps,
  type FieldLabelProps,
  type FieldTitleProps,
  type FieldDescriptionProps,
  type FieldSeparatorProps,
  type FieldErrorProps,
}
