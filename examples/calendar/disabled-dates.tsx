import { Calendar } from "@/components/ui/calendar"

function CalendarDisabledDates() {
  const year = new Date().getFullYear()
  const closedFrom = new Date(year, 11, 24)
  const closedTo = new Date(year, 11, 26)

  return (
    <Calendar
      mode="single"
      disabled={[{ dayOfWeek: [0, 6] }, { from: closedFrom, to: closedTo }]}
      defaultMonth={closedFrom}
      className="rounded-xl border"
    />
  )
}

export default CalendarDisabledDates
