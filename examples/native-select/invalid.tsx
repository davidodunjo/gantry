import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

function NativeSelectInvalid() {
  return (
    <div className="flex flex-col items-start gap-1.5">
      <NativeSelect
        aria-invalid
        aria-label="Office"
        aria-describedby="native-select-error"
        defaultValue=""
      >
        <NativeSelectOption value="">Choose an office</NativeSelectOption>
        <NativeSelectOption value="lisbon">Lisbon</NativeSelectOption>
        <NativeSelectOption value="berlin">Berlin</NativeSelectOption>
      </NativeSelect>
      <p id="native-select-error" className="text-sm text-destructive">
        Pick an office before you send the invite.
      </p>
    </div>
  )
}

export default NativeSelectInvalid
