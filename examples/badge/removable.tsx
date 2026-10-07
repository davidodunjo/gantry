import { useState } from "react"

import { Badge, BadgeRemove } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function BadgeRemovable() {
  const [dismissed, setDismissed] = useState(false)

  function handleDismiss() {
    setDismissed(true)
  }

  function handleRestore() {
    setDismissed(false)
  }

  return (
    <>
      {!dismissed && (
        <Badge variant="secondary">
          Trial ends in 3 days
          <BadgeRemove
            aria-label="Dismiss trial reminder"
            onClick={handleDismiss}
          />
        </Badge>
      )}
      <Badge variant="outline">
        Locked <BadgeRemove aria-label="Remove locked badge" disabled />
      </Badge>
      <Button
        variant="outline"
        size="sm"
        onClick={handleRestore}
        disabled={!dismissed}
      >
        Restore reminder
      </Button>
    </>
  )
}

export default BadgeRemovable
