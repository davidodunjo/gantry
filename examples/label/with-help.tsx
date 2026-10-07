import { HelpCircle } from "@untitledui/icons"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LabelWithHelp() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <Label htmlFor="label-help">Workspace URL</Label>
        <button
          type="button"
          aria-label="About workspace URLs"
          title="Changing this breaks links people have already saved."
          className="cursor-pointer rounded text-muted-foreground outline-none hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <HelpCircle className="size-4" />
        </button>
      </div>
      <Input id="label-help" defaultValue="acme" />
    </div>
  )
}

export default LabelWithHelp
