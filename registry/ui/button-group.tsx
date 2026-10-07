import { type ComponentProps } from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const buttonGroupVariants = cva(
  "flex w-fit items-stretch rounded-lg shadow-xs *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-e-lg [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal:
          "*:data-slot:rounded-e-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-e-lg! [&>[data-slot]~[data-slot]]:rounded-s-none [&>[data-slot]~[data-slot]]:border-s-0",
        vertical:
          "flex-col *:data-slot:rounded-b-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0",
      },
    },
    defaultVariants: { orientation: "horizontal" },
  }
)

type ButtonGroupProps = ComponentProps<"div"> &
  VariantProps<typeof buttonGroupVariants>

function ButtonGroup(props: ButtonGroupProps) {
  const { className, orientation = "horizontal", ...rest } = props

  return (
    <div
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- A toolbar-like visual group must not inherit fieldset form semantics.
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      {...rest}
      className={cn(buttonGroupVariants({ orientation }), className)}
    />
  )
}

type ButtonGroupTextProps = useRender.ComponentProps<"div">

function ButtonGroupText(props: ButtonGroupTextProps) {
  const { className, render, ...rest } = props

  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "flex items-center gap-2 rounded-lg border bg-muted px-3.5 text-sm font-semibold [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          className
        ),
      },
      rest
    ),
    render,
    state: { slot: "button-group-text" },
  })
}

type ButtonGroupSeparatorProps = ComponentProps<typeof Separator>

function ButtonGroupSeparator(props: ButtonGroupSeparatorProps) {
  const { className, orientation = "vertical", ...rest } = props

  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      {...rest}
      className={(state) =>
        cn(
          "relative self-stretch bg-input data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto",
          typeof className === "function" ? className(state) : className
        )
      }
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
  buttonGroupVariants,
  type ButtonGroupProps,
  type ButtonGroupTextProps,
  type ButtonGroupSeparatorProps,
}
