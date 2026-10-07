import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type TabsProps = TabsPrimitive.Root.Props

function Tabs(props: TabsProps) {
  const { className, orientation = "horizontal", ...rest } = props

  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      orientation={orientation}
      className={(state) =>
        cn(
          "group/tabs flex gap-6 data-horizontal:flex-col",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list relative flex w-fit items-center group-data-vertical/tabs:flex-col group-data-vertical/tabs:items-stretch",
  {
    variants: {
      variant: {
        default:
          "gap-1 rounded-[10px] bg-muted/50 p-1 ring-1 ring-border ring-inset",
        line: "gap-3 group-data-horizontal/tabs:border-b group-data-vertical/tabs:gap-2",
        gray: "gap-1",
        minimal: "gap-0.5 rounded-lg bg-muted/50 ring-1 ring-border ring-inset",
      },
      size: {
        sm: "",
        md: "data-[variant=default]:rounded-xl data-[variant=default]:p-1.5",
      },
    },
    defaultVariants: { variant: "default", size: "sm" },
  }
)

type TabsListProps = TabsPrimitive.List.Props &
  VariantProps<typeof tabsListVariants>

function TabsList(props: TabsListProps) {
  const { className, variant = "default", size = "sm", ...rest } = props

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      data-size={size}
      className={(state) =>
        cn(
          tabsListVariants({ variant, size }),
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type TabsTriggerProps = TabsPrimitive.Tab.Props

function TabsTrigger(props: TabsTriggerProps) {
  const { className, ...rest } = props

  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={(state) =>
        cn(
          "relative inline-flex items-center justify-center gap-1 rounded-md px-2.5 py-2 text-sm leading-5 font-semibold whitespace-nowrap text-muted-foreground transition-colors duration-100 outline-none group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
          "group-data-[size=md]/tabs-list:gap-1.5 group-data-[size=md]/tabs-list:py-2.5 group-data-[size=md]/tabs-list:text-base group-data-[size=md]/tabs-list:leading-6 group-data-[size=md]/tabs-list:[&_svg]:size-5",
          "group-data-[variant=minimal]/tabs-list:rounded-lg group-data-[variant=gray]/tabs-list:hover:bg-muted data-active:text-foreground group-data-[variant=default]/tabs-list:data-active:bg-background group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=gray]/tabs-list:data-active:bg-muted group-data-[variant=minimal]/tabs-list:data-active:bg-background group-data-[variant=minimal]/tabs-list:data-active:shadow-xs group-data-[variant=minimal]/tabs-list:data-active:ring-1 group-data-[variant=minimal]/tabs-list:data-active:ring-border group-data-[variant=minimal]/tabs-list:data-active:ring-inset",
          "group-data-[variant=line]/tabs-list:rounded-none group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:border-b-2 group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:border-transparent group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:px-0.5 group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:pt-0 group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:pb-2.5 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:py-0.5 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:ps-3 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:pe-3 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:group-data-[size=md]/tabs-list:py-1 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:group-data-[size=md]/tabs-list:ps-3.5 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:group-data-[size=md]/tabs-list:pe-3.5 group-data-[variant=line]/tabs-list:after:absolute group-data-[variant=line]/tabs-list:after:bg-transparent group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:after:inset-x-0 group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:after:-bottom-px group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:after:h-0.5 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:after:inset-y-0 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:after:start-0 group-data-vertical/tabs:group-data-[variant=line]/tabs-list:after:w-0.5 group-data-[variant=line]/tabs-list:hover:after:bg-muted-foreground group-data-[variant=line]/tabs-list:data-active:after:bg-foreground",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type TabsContentProps = TabsPrimitive.Panel.Props

function TabsContent(props: TabsContentProps) {
  const { className, ...rest } = props

  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={(state) =>
        cn(
          "flex-1 rounded-sm text-sm outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
