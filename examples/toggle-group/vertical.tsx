import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function ToggleGroupVertical() {
  return (
    <ToggleGroup
      orientation="vertical"
      variant="outline"
      spacing={0}
      aria-label="Row density"
      defaultValue={["cosy"]}
    >
      <ToggleGroupItem value="comfortable">Comfortable</ToggleGroupItem>
      <ToggleGroupItem value="cosy">Cosy</ToggleGroupItem>
      <ToggleGroupItem value="compact">Compact</ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ToggleGroupVertical
