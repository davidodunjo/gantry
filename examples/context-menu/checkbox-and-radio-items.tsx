import { useState } from "react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

function ContextMenuCheckboxAndRadioItems() {
  const [bookmarks, setBookmarks] = useState(true)
  const [density, setDensity] = useState("comfortable")

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className="flex h-36 w-80 items-center justify-center rounded-xl border border-dashed text-sm"
        tabIndex={0}
      >
        Right-click here, or press Shift+F10
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuCheckboxItem
          checked={bookmarks}
          onCheckedChange={setBookmarks}
        >
          Show bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem disabled checked>
          Keep history
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={density} onValueChange={setDensity}>
          <ContextMenuRadioItem value="comfortable">
            Comfortable
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="compact">Compact</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default ContextMenuCheckboxAndRadioItems
