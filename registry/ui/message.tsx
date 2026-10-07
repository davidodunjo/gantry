import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

type MessageGroupProps = ComponentProps<"div">

function MessageGroup(props: MessageGroupProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="message-group"
      className={cn("flex min-w-0 flex-col gap-4", className)}
      {...rest}
    />
  )
}

type MessageProps = ComponentProps<"div"> & {
  align?: "start" | "end"
}

function Message(props: MessageProps) {
  const { className, align = "start", ...rest } = props

  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        "group/message relative flex w-full min-w-0 gap-3 text-sm data-[align=end]:flex-row-reverse",
        className
      )}
      {...rest}
    />
  )
}

type MessageAvatarProps = ComponentProps<"div">

function MessageAvatar(props: MessageAvatarProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="message-avatar"
      className={cn(
        "flex w-fit min-w-8 shrink-0 items-center justify-center self-start overflow-hidden rounded-full bg-muted",
        className
      )}
      {...rest}
    />
  )
}

type MessageContentProps = ComponentProps<"div">

function MessageContent(props: MessageContentProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="message-content"
      className={cn(
        "flex w-full min-w-0 flex-col gap-1.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end",
        className
      )}
      {...rest}
    />
  )
}

type MessageHeaderProps = ComponentProps<"div">

function MessageHeader(props: MessageHeaderProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="message-header"
      className={cn(
        "flex max-w-full min-w-0 items-center gap-4 text-sm font-medium text-muted-foreground group-has-data-[variant=ghost]/message:px-0",
        className
      )}
      {...rest}
    />
  )
}

type MessageFooterProps = ComponentProps<"div">

function MessageFooter(props: MessageFooterProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="message-footer"
      className={cn(
        "flex max-w-full min-w-0 items-center text-sm font-medium text-muted-foreground group-has-data-[variant=ghost]/message:px-0 group-data-[align=end]/message:justify-end",
        className
      )}
      {...rest}
    />
  )
}

export {
  MessageGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
}
