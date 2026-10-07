import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function TooltipPlacement() {
  return (
    <TooltipProvider>
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} defaultOpen>
          <TooltipTrigger render={<Button variant="outline" />}>
            {side}
          </TooltipTrigger>
          <TooltipContent side={side} arrow>
            Save your changes
          </TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  )
}

export default TooltipPlacement
