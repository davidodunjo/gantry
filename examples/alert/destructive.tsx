import { AlertCircle } from "@untitledui/icons"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle aria-hidden="true" />
      <AlertTitle>We couldn’t save your changes</AlertTitle>
      <AlertDescription>Check your connection and try again.</AlertDescription>
    </Alert>
  )
}

export default AlertDestructive
