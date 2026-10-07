import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

function ResizableVertical() {
  return (
    <div className="h-72 w-full max-w-xl">
      <ResizablePanelGroup orientation="vertical" className="rounded-xl border">
        <ResizablePanel minSize="20%">
          <code className="block p-6 font-mono text-sm">
            select name, plan from customers where plan = 'pro';
          </code>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize="20%">
          <p className="p-6 text-sm text-muted-foreground">128 rows in 42 ms</p>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default ResizableVertical
