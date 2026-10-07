import { Button } from "@/components/ui/button"
import { Toaster, createToastManager } from "@/components/ui/toast"

const toastManager = createToastManager()

const notificationTypes = ["success", "info", "warning", "error"] as const

function notificationCopy(type: (typeof notificationTypes)[number]) {
  if (type === "success") return "Invoice #4021 has been paid."
  if (type === "info") return "A new teammate joined the workspace."
  if (type === "warning") return "Your card expires at the end of the month."
  return "The export failed. Try again in a moment."
}

function ToastDemo() {
  return (
    <Toaster toastManager={toastManager}>
      {notificationTypes.map((type) => (
        <Button
          key={type}
          variant="outline"
          onClick={() =>
            toastManager.add({
              type,
              title: `${type[0].toUpperCase()}${type.slice(1)} notification`,
              description: notificationCopy(type),
            })
          }
        >
          {type}
        </Button>
      ))}
    </Toaster>
  )
}

export default ToastDemo
