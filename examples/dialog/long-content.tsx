import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function DialogLongContent() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        View terms
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Workspace terms</DialogTitle>
          <DialogDescription>
            Review before joining the workspace.
          </DialogDescription>
        </DialogHeader>
        {Array.from({ length: 12 }, (_, i) => (
          <p key={i} className="text-sm text-muted-foreground">
            {i + 1}. Keep your workspace organized and share files responsibly.
            Your teammates can access the resources you choose to publish.
          </p>
        ))}
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}

export default DialogLongContent
