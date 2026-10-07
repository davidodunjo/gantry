import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

function PopoverDemo() {
  return (
    <Popover defaultOpen>
      <PopoverTrigger render={<Button variant="outline" />}>
        Edit dimensions
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Update the dimensions of this layer.
          </PopoverDescription>
        </PopoverHeader>
        <Label htmlFor="popover-width">Width</Label>
        <Input id="popover-width" defaultValue="320" />
        <Label htmlFor="popover-height">Height</Label>
        <Input id="popover-height" defaultValue="240" />
      </PopoverContent>
    </Popover>
  )
}

export default PopoverDemo
