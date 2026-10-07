import { Check } from "@untitledui/icons"

import { Badge } from "@/components/ui/badge"

function BadgeIconOnly() {
  return (
    <>
      {(["sm", "default", "lg"] as const).map((size) => (
        <Badge key={size} size={size} variant="outline" iconOnly>
          <Check aria-hidden />
          <span className="sr-only">Verified</span>
        </Badge>
      ))}
    </>
  )
}

export default BadgeIconOnly
