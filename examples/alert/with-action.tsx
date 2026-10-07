import { InfoCircle } from "@untitledui/icons"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

function AlertWithAction() {
  return (
    <Alert>
      <InfoCircle aria-hidden="true" />
      <AlertTitle>New documentation</AlertTitle>
      <AlertDescription>Browse the component library.</AlertDescription>
      <AlertAction>
        <Button
          variant="link"
          size="sm"
          nativeButton={false}
          render={<a href="#components" aria-label="Back to components" />}
        >
          View
        </Button>
      </AlertAction>
    </Alert>
  )
}

export default AlertWithAction
