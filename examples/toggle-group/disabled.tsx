import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
} from "@untitledui/icons"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function ToggleGroupDisabled() {
  return (
    <>
      <ToggleGroup
        variant="outline"
        aria-label="Available alignment"
        defaultValue={["left"]}
      >
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align centre">
          <AlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Justify" disabled>
          <AlignJustify />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup
        disabled
        variant="outline"
        aria-label="Locked alignment"
        defaultValue={["right"]}
      >
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  )
}

export default ToggleGroupDisabled
