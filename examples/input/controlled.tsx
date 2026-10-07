import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function InputControlled() {
  const [headline, setHeadline] = useState("Staff engineer at Basecamp")

  function handleClear() {
    setHeadline("")
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Input
        aria-label="Headline"
        value={headline}
        onValueChange={setHeadline}
        placeholder="What do you do?"
      />
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {60 - headline.length} characters left
        </p>
        <Button
          size="sm"
          variant="outline"
          disabled={headline.length === 0}
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
    </div>
  )
}

export default InputControlled
