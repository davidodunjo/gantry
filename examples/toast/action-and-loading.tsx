import { Button } from "@/components/ui/button"
import { Toaster, createToastManager } from "@/components/ui/toast"

const toastManager = createToastManager()

function ToastActionAndLoading() {
  return (
    <Toaster toastManager={toastManager}>
      <Button
        variant="outline"
        onClick={() =>
          toastManager.add({
            title: "Item archived",
            description: "You can undo this for the next few seconds.",
            actionProps: {
              children: "Undo",
              onClick: () =>
                toastManager.add({ type: "success", title: "Item restored" }),
            },
          })
        }
      >
        With action
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          const id = toastManager.add({
            type: "loading",
            title: "Uploading file",
            description: "Processing your document.",
            timeout: 0,
          })

          setTimeout(
            () =>
              toastManager.update(id, {
                type: "success",
                title: "Upload complete",
                description: "Your document is ready.",
                timeout: 5000,
              }),
            1800
          )
        }}
      >
        Loading to success
      </Button>
    </Toaster>
  )
}

export default ToastActionAndLoading
