import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

function ProgressInteractive() {
  const [value, setValue] = useState(40)

  return (
    <div className="w-80 max-w-full space-y-4">
      <Progress value={value}>
        <ProgressLabel>Upload</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Button
        variant="outline"
        onClick={() => setValue(value >= 100 ? 0 : value + 10)}
      >
        {value >= 100 ? "Reset" : "Advance"}
      </Button>
    </div>
  )
}

export default ProgressInteractive
