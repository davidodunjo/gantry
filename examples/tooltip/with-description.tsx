import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function TooltipWithDescription() {
  return (
    <TooltipProvider>
      <Tooltip defaultOpen>
        <TooltipTrigger render={<Button variant="outline" />}>
          Supporting text
        </TooltipTrigger>
        <TooltipContent
          title="Project visibility"
          description="Only members of your workspace can see this project."
          arrow
        />
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipWithDescription
