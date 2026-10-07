import { useState } from "react"

import { Button } from "@/components/ui/button"
import { NumberInput } from "@/components/ui/number-input"

function NumberInputControlled() {
  const [seats, setSeats] = useState<number | null>(4)

  function handleReset() {
    setSeats(4)
  }

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-4">
      <NumberInput
        label="Seats"
        value={seats}
        onValueChange={setSeats}
        min={1}
        hint="Clearing the field reports an empty value, not a zero."
      />
      <div className="flex items-center gap-3">
        <Button size="sm" variant="outline" onClick={handleReset}>
          Reset to 4
        </Button>
        <output className="text-sm text-muted-foreground">
          {seats === null ? "No value" : `Billing for ${seats} seats`}
        </output>
      </div>
    </div>
  )
}

export default NumberInputControlled
