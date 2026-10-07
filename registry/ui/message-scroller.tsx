import { type ComponentProps } from "react"
import {
  MessageScroller as MessageScrollerPrimitive,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from "@shadcn/react/message-scroller"
import { ArrowDown } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type MessageScrollerProviderProps = ComponentProps<
  typeof MessageScrollerPrimitive.Provider
>

function MessageScrollerProvider(props: MessageScrollerProviderProps) {
  return <MessageScrollerPrimitive.Provider {...props} />
}

type MessageScrollerProps = ComponentProps<typeof MessageScrollerPrimitive.Root>

function MessageScroller(props: MessageScrollerProps) {
  const { className, ...rest } = props

  return (
    <MessageScrollerPrimitive.Root
      data-slot="message-scroller"
      className={cn(
        "group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden",
        className
      )}
      {...rest}
    />
  )
}

type MessageScrollerViewportProps = ComponentProps<
  typeof MessageScrollerPrimitive.Viewport
>

function MessageScrollerViewport(props: MessageScrollerViewportProps) {
  const { className, ...rest } = props

  return (
    <MessageScrollerPrimitive.Viewport
      data-slot="message-scroller-viewport"
      className={cn(
        "size-full min-h-0 min-w-0 scroll-fade-b scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent data-pending-scroll:invisible",
        className
      )}
      {...rest}
    />
  )
}

type MessageScrollerContentProps = ComponentProps<
  typeof MessageScrollerPrimitive.Content
>

function MessageScrollerContent(props: MessageScrollerContentProps) {
  const { className, ...rest } = props

  return (
    <MessageScrollerPrimitive.Content
      data-slot="message-scroller-content"
      className={cn("flex h-max min-h-full flex-col gap-6", className)}
      {...rest}
    />
  )
}

type MessageScrollerItemProps = ComponentProps<
  typeof MessageScrollerPrimitive.Item
>

function MessageScrollerItem(props: MessageScrollerItemProps) {
  const { className, scrollAnchor = false, ...rest } = props

  return (
    <MessageScrollerPrimitive.Item
      data-slot="message-scroller-item"
      scrollAnchor={scrollAnchor}
      className={cn(
        "min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]",
        className
      )}
      {...rest}
    />
  )
}

type MessageScrollerButtonProps = ComponentProps<
  typeof MessageScrollerPrimitive.Button
> &
  Pick<ComponentProps<typeof Button>, "variant" | "size">

function MessageScrollerButton(props: MessageScrollerButtonProps) {
  const {
    direction = "end",
    className,
    children,
    render,
    variant = "secondary",
    size = "icon-sm",
    ...rest
  } = props

  return (
    <MessageScrollerPrimitive.Button
      data-slot="message-scroller-button"
      data-direction={direction}
      data-variant={variant}
      data-size={size}
      direction={direction}
      className={cn(
        "absolute inset-s-1/2 -translate-x-1/2 rounded-full border-border bg-background text-foreground shadow-md transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-foreground data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full motion-reduce:transition-none rtl:translate-x-1/2 data-[direction=start]:[&_svg]:rotate-180",
        className
      )}
      render={render ?? <Button variant={variant} size={size} />}
      {...rest}
    >
      {children ?? (
        <>
          <ArrowDown />
          <span className="sr-only">
            {direction === "end" ? "Scroll to end" : "Scroll to start"}
          </span>
        </>
      )}
    </MessageScrollerPrimitive.Button>
  )
}

export {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
}
