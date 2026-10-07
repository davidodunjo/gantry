import { SearchLg } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function KbdInATooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={<Button variant="outline" size="icon" aria-label="Search" />}
        >
          <SearchLg />
        </TooltipTrigger>
        <TooltipContent>
          Search
          <KbdGroup className="ms-2">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default KbdInATooltip
