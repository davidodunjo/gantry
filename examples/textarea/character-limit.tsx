import { useState } from "react"

import { Textarea } from "@/components/ui/textarea"

function TextareaCharacterLimit() {
  const [summary, setSummary] = useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-1.5">
      <label htmlFor="textarea-summary" className="text-sm font-medium">
        Release summary
      </label>
      <Textarea
        id="textarea-summary"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        maxLength={200}
        placeholder="What changed in this release?"
        aria-describedby="textarea-summary-count"
      />
      <p id="textarea-summary-count" className="text-sm text-muted-foreground">
        {200 - summary.length} characters remaining. Typing stops at zero.
      </p>
    </div>
  )
}

export default TextareaCharacterLimit
