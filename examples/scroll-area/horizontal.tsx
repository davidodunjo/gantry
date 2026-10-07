import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const sessions = [
  { time: "09:00", title: "Opening keynote" },
  { time: "10:30", title: "Designing for slow networks" },
  { time: "11:45", title: "Type systems in practice" },
  { time: "13:30", title: "Accessible motion" },
  { time: "15:00", title: "Scaling a design system" },
  { time: "16:15", title: "Closing panel" },
]

function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-full max-w-lg rounded-xl border">
      <div className="flex w-max gap-3 p-4">
        {sessions.map((session) => (
          <div
            key={session.time}
            className="flex h-28 w-44 flex-col justify-between rounded-lg bg-muted p-4 text-sm"
          >
            <span className="text-muted-foreground">{session.time}</span>
            <span className="font-medium">{session.title}</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default ScrollAreaHorizontal
