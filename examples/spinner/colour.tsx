import { Spinner } from "@/components/ui/spinner"

function SpinnerColour() {
  return (
    <>
      <div className="flex items-center gap-3 text-muted-foreground">
        <Spinner />
        <span className="text-sm">Checking your connection…</span>
      </div>
      <div className="flex items-center gap-3 text-primary">
        <Spinner />
        <span className="text-sm font-medium">Restoring from backup…</span>
      </div>
      <div className="flex items-center gap-3 text-destructive">
        <Spinner />
        <span className="text-sm font-medium">Retrying the upload…</span>
      </div>
    </>
  )
}

export default SpinnerColour
