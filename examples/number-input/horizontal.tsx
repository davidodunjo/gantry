import { NumberInput } from "@/components/ui/number-input"

function NumberInputHorizontal() {
  return (
    <NumberInput
      label="Quantity"
      orientation="horizontal"
      defaultValue={12}
      className="max-w-xs"
    />
  )
}

export default NumberInputHorizontal
