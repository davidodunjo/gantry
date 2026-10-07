import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function TooltipLongContent() {
  return (
    <TooltipProvider>
      <Tooltip defaultOpen>
        <TooltipTrigger render={<Button variant="outline" />}>
          More information
        </TooltipTrigger>
        <TooltipContent
          title="Activity history"
          description="Your workspace keeps a history of changes so everyone can see what happened and when. This explanation wraps within the tooltip."
          arrow
        />
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipLongContent
