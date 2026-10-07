import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>()
  const today = new Date()
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  )

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={{ before: tomorrow }}
        className="rounded-xl border"
      />
      <output className="text-sm text-muted-foreground">
        {date?.toLocaleDateString() ?? "Pick a consultation date"}
      </output>
    </>
  )
}

export default CalendarDemo
