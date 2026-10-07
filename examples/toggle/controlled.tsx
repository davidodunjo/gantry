import { useState } from "react"
import { Bold01, Italic01 } from "@untitledui/icons"

import { Toggle } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"

function ToggleControlled() {
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex gap-2">
        <Toggle
          variant="outline"
          size="sm"
          aria-label="Bold"
          pressed={bold}
          onPressedChange={setBold}
        >
          <Bold01 />
        </Toggle>
        <Toggle
          variant="outline"
          size="sm"
          aria-label="Italic"
          pressed={italic}
          onPressedChange={setItalic}
        >
          <Italic01 />
        </Toggle>
      </div>
      <p className={cn("text-sm", bold && "font-bold", italic && "italic")}>
        The kerning on this line is doing most of the work.
      </p>
    </div>
  )
}

export default ToggleControlled
