import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

type ResizablePanelGroupProps = ResizablePrimitive.GroupProps

function ResizablePanelGroup(props: ResizablePanelGroupProps) {
  const { className, ...rest } = props

  return (
    <ResizablePrimitive.Group
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full aria-[orientation=vertical]:flex-col",
        className
      )}
      {...rest}
    />
  )
}

type ResizablePanelProps = ResizablePrimitive.PanelProps

function ResizablePanel(props: ResizablePanelProps) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

type ResizableHandleProps = ResizablePrimitive.SeparatorProps & {
  withHandle?: boolean
}

function ResizableHandle(props: ResizableHandleProps) {
  const { withHandle, className, ...rest } = props

  return (
    <ResizablePrimitive.Separator
      data-slot="resizable-handle"
      className={cn(
        "relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-1 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
        className
      )}
      {...rest}
    >
      {withHandle && (
        <div className="z-10 flex h-8 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
      )}
    </ResizablePrimitive.Separator>
  )
}

export {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  type ResizableHandleProps,
  type ResizablePanelGroupProps,
  type ResizablePanelProps,
}
