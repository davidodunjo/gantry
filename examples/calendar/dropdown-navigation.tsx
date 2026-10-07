import { useState } from "react"

import { Calendar } from "@/components/ui/calendar"

function CalendarDropdownNavigation() {
  const [birthDate, setBirthDate] = useState<Date | undefined>()
  const today = new Date()
  const cutoff = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )

  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      selected={birthDate}
      onSelect={setBirthDate}
      defaultMonth={cutoff}
      startMonth={new Date(today.getFullYear() - 100, 0)}
      endMonth={cutoff}
      disabled={{ after: cutoff }}
      className="rounded-xl border"
    />
  )
}

export default CalendarDropdownNavigation
