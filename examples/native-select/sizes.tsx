import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

function NativeSelectSizes() {
  return (
    <>
      {(["sm", "default", "lg"] as const).map((size) => (
        <NativeSelect
          key={size}
          size={size}
          aria-label={`Assign to, ${size}`}
          defaultValue="design"
        >
          <NativeSelectOption value="design">Design</NativeSelectOption>
          <NativeSelectOption value="engineering">
            Engineering
          </NativeSelectOption>
        </NativeSelect>
      ))}
    </>
  )
}

export default NativeSelectSizes
