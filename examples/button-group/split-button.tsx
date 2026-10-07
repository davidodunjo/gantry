import { ChevronDown } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function ButtonGroupSplitButton() {
  return (
    <ButtonGroup aria-label="Publish">
      <Button>Publish</Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button size="icon" aria-label="Publish options" />}
        >
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Publish and notify subscribers</DropdownMenuItem>
          <DropdownMenuItem>Schedule for tomorrow</DropdownMenuItem>
          <DropdownMenuItem>Save as draft</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}

export default ButtonGroupSplitButton
