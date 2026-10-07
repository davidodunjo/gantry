import { Button } from "@/components/ui/button"
import { Illustration } from "@/components/ui/illustration"

function IllustrationsInContext() {
  return (
    <>
      <div className="flex max-w-xs flex-col items-center gap-4 rounded-xl border p-6 text-center">
        <Illustration type="documents" size="lg" />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">No documents yet</p>
          <p className="text-sm text-muted-foreground">
            Upload a file to share it with the rest of the project.
          </p>
        </div>
        <Button size="sm" variant="outline">
          Upload document
        </Button>
      </div>
      <div className="flex max-w-sm flex-col items-center gap-3 rounded-xl border p-6 text-center">
        <Illustration type="credit-card" size="sm" />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">We could not charge your card</p>
          <p className="text-sm text-muted-foreground">
            Update your payment details to keep your subscription active.
          </p>
        </div>
      </div>
    </>
  )
}

export default IllustrationsInContext
