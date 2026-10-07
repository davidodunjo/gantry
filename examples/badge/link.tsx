import { ArrowRight } from "@untitledui/icons"

import { Badge } from "@/components/ui/badge"

function BadgeLink() {
  return (
    <Badge
      variant="outline"
      render={<a href="#pricing" aria-label="See pricing" />}
    >
      See pricing <ArrowRight aria-hidden />
    </Badge>
  )
}

export default BadgeLink
