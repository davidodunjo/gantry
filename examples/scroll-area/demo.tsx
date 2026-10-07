import { ScrollArea } from "@/components/ui/scroll-area"

const releases = Array.from({ length: 24 }, (_, index) => `v2.${23 - index}.0`)

function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-64 w-56 rounded-xl border">
      <div className="p-4">
        <p className="mb-2 text-sm font-medium">Releases</p>
        {releases.map((release) => (
          <p key={release} className="border-b py-2 text-sm last:border-b-0">
            {release}
          </p>
        ))}
      </div>
    </ScrollArea>
  )
}

export default ScrollAreaDemo
