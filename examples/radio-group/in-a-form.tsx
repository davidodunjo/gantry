import { type FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function RadioGroupInAForm() {
  const [method, setMethod] = useState<string | null>(null)
  const [result, setResult] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setResult(`Booked ${data.get("delivery")} delivery.`)
  }

  function handleReset() {
    setMethod(null)
    setResult("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="flex w-full max-w-xs flex-col gap-4"
    >
      <p id="radio-delivery-label" className="text-sm font-medium">
        Delivery
      </p>
      <RadioGroup
        name="delivery"
        required
        value={method}
        onValueChange={setMethod}
        aria-labelledby="radio-delivery-label"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem id="radio-standard" value="standard" />
          <Label htmlFor="radio-standard">Standard, five to seven days</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="radio-express" value="express" />
          <Label htmlFor="radio-express">Express, two to three days</Label>
        </div>
      </RadioGroup>
      <div className="flex gap-3">
        <Button type="submit" size="sm">
          Book delivery
        </Button>
        <Button type="reset" size="sm" variant="outline">
          Reset
        </Button>
      </div>
      <output className="text-sm text-muted-foreground">
        {result || "Nothing is selected until you pick one."}
      </output>
    </form>
  )
}

export default RadioGroupInAForm
