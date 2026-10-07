import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

function NativeSelectDisabled() {
  return (
    <NativeSelect disabled aria-label="Plan" defaultValue="team">
      <NativeSelectOption value="team">Team plan</NativeSelectOption>
    </NativeSelect>
  )
}

export default NativeSelectDisabled
