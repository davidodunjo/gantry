import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

function PopoverPlacement() {
  return (
    <>
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side} defaultOpen>
          <PopoverTrigger render={<Button variant="outline" />}>
            {side}
          </PopoverTrigger>
          <PopoverContent side={side}>
            <PopoverTitle>Workspace settings</PopoverTitle>
            <PopoverDescription>
              Press escape or click outside to dismiss.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
      ))}
    </>
  )
}

export default PopoverPlacement
