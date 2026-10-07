import { AlignCenter, AlignLeft, AlignRight } from "@untitledui/icons"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function ToggleGroupDemo() {
  return (
    <ToggleGroup aria-label="Alignment" defaultValue={["left"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align centre">
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ToggleGroupDemo
