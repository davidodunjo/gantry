import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

function NativeSelectDemo() {
  return (
    <NativeSelect aria-label="Assign to" defaultValue="design">
      <NativeSelectOption value="design">Design</NativeSelectOption>
      <NativeSelectOption value="engineering">Engineering</NativeSelectOption>
      <NativeSelectOption value="support">Support</NativeSelectOption>
    </NativeSelect>
  )
}

export default NativeSelectDemo
