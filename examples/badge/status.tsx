import { Badge, BadgeDot } from "@/components/ui/badge"

function BadgeStatus() {
  return (
    <>
      <Badge variant="outline">
        <BadgeDot /> Paid
      </Badge>
      <Badge variant="secondary">
        <BadgeDot /> Pending
      </Badge>
      <Badge variant="destructive">
        <BadgeDot /> Overdue
      </Badge>
      <Badge variant="ghost">
        <BadgeDot /> Draft
      </Badge>
    </>
  )
}

export default BadgeStatus
