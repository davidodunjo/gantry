import { NumberInput } from "@/components/ui/number-input"

function NumberInputInvalid() {
  return (
    <NumberInput
      label="Guests"
      defaultValue={-2}
      invalid
      hint="Enter a number of guests above zero."
      className="max-w-xs"
    />
  )
}

export default NumberInputInvalid
