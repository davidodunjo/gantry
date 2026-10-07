import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const outline = ["Summary", "Pricing", "Rollout plan", "Risks"]

function ResizableCollapsible() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-48 max-w-xl rounded-xl border"
    >
      <ResizablePanel defaultSize="30%" minSize="20%" collapsible>
        <ol className="flex flex-col gap-2 p-4 text-sm text-muted-foreground">
          {outline.map((heading) => (
            <li key={heading}>{heading}</li>
          ))}
        </ol>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize="40%">
        <div className="flex flex-col gap-1 p-6 text-sm">
          <p className="font-medium">Rollout plan</p>
          <p className="text-muted-foreground">
            Ship to 5% of workspaces on Monday, then widen to everyone by the
            end of the month if error rates hold.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default ResizableCollapsible
