import { HelpCircle } from "@untitledui/icons"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function LabelWithHelp() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <Label htmlFor="label-help">Workspace URL</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              aria-label="About workspace URLs"
              className="cursor-pointer rounded text-muted-foreground outline-none hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <HelpCircle className="size-4" />
            </TooltipTrigger>
            <TooltipContent>
              Changing this breaks links people have already saved.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Input id="label-help" defaultValue="acme" />
    </div>
  )
}

export default LabelWithHelp
