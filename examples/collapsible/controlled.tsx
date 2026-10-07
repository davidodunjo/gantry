import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"

function CollapsibleControlled() {
  const [open, setOpen] = useState(false)

  function handleToggle() {
    setOpen(!open)
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Advanced settings</span>
        <Button size="sm" variant="outline" onClick={handleToggle}>
          {open ? "Hide" : "Show"}
        </Button>
      </div>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleContent>
          <ul className="space-y-3 rounded-lg border p-4 text-sm">
            <li>Two-factor authentication</li>
            <li>Session timeout after 30 minutes</li>
            <li>Export activity log</li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default CollapsibleControlled
