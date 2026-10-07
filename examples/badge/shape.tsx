import { Badge } from "@/components/ui/badge"

function BadgeShape() {
  return (
    <>
      <Badge shape="pill" variant="secondary">
        Pro plan
      </Badge>
      <Badge shape="badge" variant="secondary">
        Pro plan
      </Badge>
      <Badge shape="modern" variant="secondary">
        Pro plan
      </Badge>
    </>
  )
}

export default BadgeShape
