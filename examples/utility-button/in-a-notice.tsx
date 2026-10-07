import { useState } from "react"
import { Copy01 } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { CloseButton } from "@/components/ui/close-button"
import { UtilityButton } from "@/components/ui/utility-button"

function UtilityButtonInANotice() {
  const [dismissed, setDismissed] = useState(false)

  function handleDismiss() {
    setDismissed(true)
  }

  function handleRestore() {
    setDismissed(false)
  }

  if (dismissed) {
    return (
      <Button variant="outline" onClick={handleRestore}>
        Bring the notice back
      </Button>
    )
  }

  return (
    <div className="flex w-full max-w-md items-center gap-4 rounded-xl border p-4 text-sm">
      <span className="flex-1">
        Billing moves to the new plan on 1 October.
      </span>
      <UtilityButton
        label="Copy plan details"
        icon={<Copy01 />}
        color="tertiary"
      />
      <CloseButton label="Dismiss notice" onClick={handleDismiss} />
    </div>
  )
}

export default UtilityButtonInANotice
