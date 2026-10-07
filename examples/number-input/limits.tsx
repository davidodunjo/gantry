import { NumberInput } from "@/components/ui/number-input"

function NumberInputLimits() {
  return (
    <NumberInput
      label="Guests"
      defaultValue={8}
      min={1}
      max={8}
      hint="Between 1 and 8."
      className="max-w-xs"
    />
  )
}

export default NumberInputLimits
