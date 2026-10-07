"use client"

import { type ComponentProps } from "react"
import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire"
import { Check } from "@untitledui/icons"

import { buttonVariants, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type QuestionnaireProps = ComponentProps<typeof QuestionnairePrimitive.Root>

function Questionnaire(props: QuestionnaireProps) {
  const { className, ...rest } = props

  return (
    <QuestionnairePrimitive.Root
      data-slot="questionnaire"
      className={cn("flex w-full min-w-0 flex-col gap-4", className)}
      {...rest}
    />
  )
}

type QuestionnaireProgressProps = ComponentProps<
  typeof QuestionnairePrimitive.Progress
>

function QuestionnaireProgress(props: QuestionnaireProgressProps) {
  const { className, ...rest } = props

  return (
    <QuestionnairePrimitive.Progress
      data-slot="questionnaire-progress"
      className={cn(
        "min-h-[1lh] w-fit min-w-[14ch] text-xs font-medium text-muted-foreground tabular-nums",
        className
      )}
      {...rest}
    />
  )
}

type QuestionnaireItemProps = ComponentProps<typeof QuestionnairePrimitive.Item>

function QuestionnaireItem(props: QuestionnaireItemProps) {
  const { className, ...rest } = props

  return (
    <QuestionnairePrimitive.Item
      data-slot="questionnaire-item"
      className={cn(
        "flex min-w-0 flex-col gap-6 border-0 p-0 outline-none",
        className
      )}
      {...rest}
    />
  )
}

type QuestionnaireTitleProps = ComponentProps<
  typeof QuestionnairePrimitive.Title
>

function QuestionnaireTitle(props: QuestionnaireTitleProps) {
  const { className, ...rest } = props

  return (
    <QuestionnairePrimitive.Title
      data-slot="questionnaire-title"
      className={cn(
        "font-heading text-lg leading-7 font-semibold text-pretty [&:not(:has(~[data-slot=questionnaire-description]))]:mb-4",
        className
      )}
      {...rest}
    />
  )
}

type QuestionnaireDescriptionProps = ComponentProps<
  typeof QuestionnairePrimitive.Description
>

function QuestionnaireDescription(props: QuestionnaireDescriptionProps) {
  const { className, ...rest } = props

  return (
    <QuestionnairePrimitive.Description
      data-slot="questionnaire-description"
      className={cn("text-sm text-pretty text-muted-foreground", className)}
      {...rest}
    />
  )
}

type QuestionnaireChoicesProps = ComponentProps<
  typeof QuestionnairePrimitive.Choices
>

function QuestionnaireChoices(props: QuestionnaireChoicesProps) {
  const { className, ...rest } = props

  return (
    <QuestionnairePrimitive.Choices
      data-slot="questionnaire-choices"
      className={cn(
        "group/questionnaire-choices grid min-w-0 gap-2",
        className
      )}
      {...rest}
    />
  )
}

type QuestionnaireChoiceProps = ComponentProps<
  typeof QuestionnairePrimitive.Choice
>

function QuestionnaireChoice(props: QuestionnaireChoiceProps) {
  const { children, className, ...rest } = props

  return (
    <QuestionnairePrimitive.Choice
      data-slot="questionnaire-choice"
      className={cn(
        "group/questionnaire-choice relative flex min-h-11 cursor-pointer items-start gap-2.5 rounded-xl border border-input bg-background px-4 py-4 text-start text-sm shadow-xs transition-colors outline-none select-none hover:bg-muted/50 has-[>input:focus-visible]:outline-2 has-[>input:focus-visible]:outline-offset-2 has-[>input:focus-visible]:outline-foreground has-[>input:focus-visible]:outline-solid data-invalid:border-destructive dark:bg-input/20 data-checked:border-primary data-checked:bg-muted dark:data-checked:bg-muted",
        "data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...rest}
    >
      <QuestionnairePrimitive.ChoiceInput
        data-slot="questionnaire-choice-input"
        className="absolute inset-0 z-10 size-full cursor-pointer opacity-0"
      />
      <span
        aria-hidden="true"
        data-slot="questionnaire-choice-indicator"
        className="pointer-events-none relative flex size-5 shrink-0 translate-y-[--spacing(0.45)] items-center justify-center rounded-[4px] border border-input group-has-data-[slot=questionnaire-choice-description]/questionnaire-choice:translate-y-0.5 group-data-[type=radio]/questionnaire-choice:rounded-full group-data-checked/questionnaire-choice:border-primary group-data-checked/questionnaire-choice:bg-primary group-data-checked/questionnaire-choice:text-primary-foreground dark:bg-input/30 dark:group-data-checked/questionnaire-choice:bg-primary"
      >
        <span
          data-slot="questionnaire-choice-indicator-dot"
          className="hidden size-2 rounded-full bg-primary-foreground group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block"
        />
        <Check
          data-slot="questionnaire-choice-indicator-check"
          className="hidden size-3.5 group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block"
        />
      </span>
      <QuestionnairePrimitive.ChoiceLabel
        data-slot="questionnaire-choice-label"
        className="flex min-w-0 flex-1 flex-col gap-0.5 leading-snug"
      >
        {children}
      </QuestionnairePrimitive.ChoiceLabel>
      <QuestionnairePrimitive.ChoiceShortcut
        data-slot="questionnaire-choice-shortcut"
        className="pointer-events-none ms-auto hidden size-5 shrink-0 translate-y-[--spacing(0.45)] items-center justify-center rounded-md border border-input bg-background font-mono text-[0.625rem] leading-none font-medium text-muted-foreground group-has-data-[slot=questionnaire-choice-description]/questionnaire-choice:translate-y-0.5 group-data-[shortcut]/questionnaire-choice:inline-flex"
      />
    </QuestionnairePrimitive.Choice>
  )
}

type QuestionnaireChoiceDescriptionProps = ComponentProps<"span">

function QuestionnaireChoiceDescription(
  props: QuestionnaireChoiceDescriptionProps
) {
  const { className, ...rest } = props

  return (
    <span
      data-slot="questionnaire-choice-description"
      className={cn("text-muted-foreground", className)}
      {...rest}
    />
  )
}

type QuestionnaireInputProps = ComponentProps<
  typeof QuestionnairePrimitive.Input
>

function QuestionnaireInput(props: QuestionnaireInputProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="questionnaire-input-wrapper"
      className="group/questionnaire-input relative w-full min-w-0"
    >
      <QuestionnairePrimitive.Input
        data-slot="questionnaire-input"
        className={cn(
          "h-10 w-full min-w-0 rounded-lg bg-background px-3 py-2 text-base shadow-xs ring-1 ring-input outline-none ring-inset focus-visible:ring-2 focus-visible:ring-foreground disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50 aria-invalid:ring-destructive",
          "selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground",
          className
        )}
        {...rest}
      />
    </div>
  )
}

type QuestionnaireErrorProps = ComponentProps<
  typeof QuestionnairePrimitive.Error
>

function QuestionnaireError(props: QuestionnaireErrorProps) {
  const { className, ...rest } = props

  return (
    <QuestionnairePrimitive.Error
      data-slot="questionnaire-error"
      className={cn("mt-2 text-sm text-destructive", className)}
      {...rest}
    />
  )
}

type QuestionnaireActionsProps = ComponentProps<"div">

function QuestionnaireActions(props: QuestionnaireActionsProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="questionnaire-actions"
      className={cn(
        "grid min-h-11 w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 sm:min-h-8",
        className
      )}
      {...rest}
    />
  )
}

type QuestionnairePreviousProps = ComponentProps<
  typeof QuestionnairePrimitive.Previous
> &
  Pick<ButtonProps, "size" | "variant">

function QuestionnairePrevious(props: QuestionnairePreviousProps) {
  const {
    children,
    className,
    size = "default",
    variant = "outline",
    ...rest
  } = props

  return (
    <QuestionnairePrimitive.Previous
      data-slot="questionnaire-previous"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-1 row-start-1 min-h-11 justify-self-start sm:min-h-0",
        className
      )}
      {...rest}
    >
      {children ?? "Previous"}
    </QuestionnairePrimitive.Previous>
  )
}

type QuestionnaireSkipProps = ComponentProps<
  typeof QuestionnairePrimitive.Skip
> &
  Pick<ButtonProps, "size" | "variant">

function QuestionnaireSkip(props: QuestionnaireSkipProps) {
  const {
    children,
    className,
    size = "default",
    variant = "outline",
    ...rest
  } = props

  return (
    <QuestionnairePrimitive.Skip
      data-slot="questionnaire-skip"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-2 row-start-1 min-h-11 justify-self-end sm:min-h-0",
        className
      )}
      {...rest}
    >
      {children ?? "Skip"}
    </QuestionnairePrimitive.Skip>
  )
}

type QuestionnaireNextProps = ComponentProps<
  typeof QuestionnairePrimitive.Next
> &
  Pick<ButtonProps, "size" | "variant">

function QuestionnaireNext(props: QuestionnaireNextProps) {
  const {
    children,
    className,
    size = "default",
    variant = "default",
    ...rest
  } = props

  return (
    <QuestionnairePrimitive.Next
      data-slot="questionnaire-next"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0",
        className
      )}
      {...rest}
    >
      {children ?? "Next"}
    </QuestionnairePrimitive.Next>
  )
}

type QuestionnaireSubmitProps = ComponentProps<
  typeof QuestionnairePrimitive.Submit
> &
  Pick<ButtonProps, "size" | "variant">

function QuestionnaireSubmit(props: QuestionnaireSubmitProps) {
  const {
    children,
    className,
    size = "default",
    variant = "default",
    ...rest
  } = props

  return (
    <QuestionnairePrimitive.Submit
      data-slot="questionnaire-submit"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-3 row-start-1 min-h-11 justify-self-end sm:min-h-0",
        className
      )}
      {...rest}
    >
      {children ?? "Submit"}
    </QuestionnairePrimitive.Submit>
  )
}

export {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
}
