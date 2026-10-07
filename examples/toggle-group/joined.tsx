import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function ToggleGroupJoined() {
  return (
    <ToggleGroup
      variant="outline"
      spacing={0}
      aria-label="Joined alignment"
      defaultValue={["center"]}
    >
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Centre</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
      <ToggleGroupItem value="justify">Justify</ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ToggleGroupJoined
