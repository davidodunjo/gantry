import { InfoCircle } from "@untitledui/icons"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function AlertDemo() {
  return (
    <Alert>
      <InfoCircle aria-hidden="true" />
      <AlertTitle>Your workspace is ready</AlertTitle>
      <AlertDescription>
        Invite your team and start your first project.
      </AlertDescription>
    </Alert>
  )
}

export default AlertDemo
