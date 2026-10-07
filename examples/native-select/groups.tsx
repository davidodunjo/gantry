import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

function NativeSelectGroups() {
  return (
    <NativeSelect aria-label="Office" defaultValue="lisbon">
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="lisbon">Lisbon</NativeSelectOption>
        <NativeSelectOption value="berlin">Berlin</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Americas">
        <NativeSelectOption value="toronto">Toronto</NativeSelectOption>
        <NativeSelectOption value="austin" disabled>
          Austin (at capacity)
        </NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}

export default NativeSelectGroups
