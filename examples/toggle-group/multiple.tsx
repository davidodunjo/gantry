import { Bold01, Italic01, Underline01 } from "@untitledui/icons"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function ToggleGroupMultiple() {
  return (
    <ToggleGroup
      multiple
      aria-label="Text style"
      defaultValue={["bold", "underline"]}
    >
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold01 />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic01 />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Underline01 />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ToggleGroupMultiple
