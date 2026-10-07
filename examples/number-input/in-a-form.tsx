import { type FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { NumberInput } from "@/components/ui/number-input"

function NumberInputInAForm() {
  const [submitted, setSubmitted] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(String(new FormData(event.currentTarget).get("tickets")))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col items-start gap-4"
    >
      <NumberInput
        name="tickets"
        label="Tickets"
        defaultValue={2}
        required
        min={1}
        max={10}
      />
      <Button type="submit" variant="outline">
        Book
      </Button>
      <output className="text-sm text-muted-foreground">
        {submitted
          ? `Submitted ${submitted} as a plain number.`
          : "Submit to see the value the form carries."}
      </output>
    </form>
  )
}

export default NumberInputInAForm
