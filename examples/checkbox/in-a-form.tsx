import { type FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function CheckboxInAForm() {
  const [result, setResult] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setResult(
      data.get("gift-wrap") === "yes"
        ? "Order placed with gift wrap."
        : "Order placed without gift wrap."
    )
  }

  function handleReset() {
    setResult("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="flex w-full max-w-xs flex-col gap-4"
    >
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-gift-wrap" name="gift-wrap" value="yes" />
        <Label htmlFor="checkbox-gift-wrap">Gift wrap this order</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-terms" name="terms" value="accepted" required />
        <Label htmlFor="checkbox-terms" required>
          I accept the terms of sale
        </Label>
      </div>
      <div className="flex gap-3">
        <Button type="submit" size="sm">
          Place order
        </Button>
        <Button type="reset" size="sm" variant="outline">
          Reset
        </Button>
      </div>
      <output className="text-sm text-muted-foreground">{result}</output>
    </form>
  )
}

export default CheckboxInAForm
