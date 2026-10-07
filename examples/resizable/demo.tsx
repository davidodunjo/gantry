import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const folders = [
  { name: "Inbox", count: 12 },
  { name: "Drafts", count: 3 },
  { name: "Sent" },
  { name: "Archive" },
]

function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-48 max-w-xl rounded-xl border"
    >
      <ResizablePanel defaultSize="35%" minSize="20%">
        <ul className="flex flex-col gap-1 p-4 text-sm">
          {folders.map((folder) => (
            <li
              key={folder.name}
              className="flex justify-between gap-2 rounded-md px-2 py-1.5"
            >
              {folder.name}
              {folder.count && (
                <span className="text-muted-foreground">{folder.count}</span>
              )}
            </li>
          ))}
        </ul>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize="25%">
        <div className="flex flex-col gap-1 p-6 text-sm">
          <p className="font-medium">Priya Shah</p>
          <p className="text-muted-foreground">
            Can we move Thursday's review to 3pm? The pricing numbers land that
            morning.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default ResizableDemo
