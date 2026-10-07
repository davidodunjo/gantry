import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { MinusCircle, PlusCircle } from "@untitledui/icons"

import { cn } from "@/lib/utils"

type AccordionProps = AccordionPrimitive.Root.Props

function Accordion(props: AccordionProps) {
  const { className, ...rest } = props

  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={(state) =>
        cn(
          "flex w-full flex-col gap-8",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type AccordionItemProps = AccordionPrimitive.Item.Props

function AccordionItem(props: AccordionItemProps) {
  const { className, ...rest } = props

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={(state) =>
        cn(
          "not-first:-mt-px not-first:border-t not-first:pt-6",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type AccordionTriggerProps = AccordionPrimitive.Trigger.Props

function AccordionTrigger(props: AccordionTriggerProps) {
  const { className, children, ...rest } = props

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={(state) =>
          cn(
            "group/accordion-trigger relative flex flex-1 items-start justify-between gap-2 rounded-md text-start text-base font-semibold transition-colors outline-none hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-muted-foreground md:gap-6",
            typeof className === "function" ? className(state) : className
          )
        }
        {...rest}
      >
        {children}
        <PlusCircle
          aria-hidden="true"
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        />
        <MinusCircle
          aria-hidden="true"
          data-slot="accordion-trigger-icon"
          className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

type AccordionContentProps = AccordionPrimitive.Panel.Props

function AccordionContent(props: AccordionContentProps) {
  const { className, children, ...rest } = props

  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={(state) =>
        cn(
          "h-(--accordion-panel-height) overflow-hidden text-base text-muted-foreground transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <div className="pe-8 pt-1 leading-6 md:pe-12 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4">
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  type AccordionContentProps,
  type AccordionItemProps,
  type AccordionProps,
  type AccordionTriggerProps,
}
