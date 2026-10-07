import { useState } from "react"
import { type DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

function CalendarRange() {
  const [stay, setStay] = useState<DateRange | undefined>()

  return (
    <Calendar
      mode="range"
      selected={stay}
      onSelect={setStay}
      numberOfMonths={2}
      disabled={{ before: new Date() }}
      className="rounded-xl border"
    />
  )
}

export default CalendarRange
