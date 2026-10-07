import { NumberInput } from "@/components/ui/number-input"

function NumberInputSteps() {
  return (
    <NumberInput
      label="Session length"
      defaultValue={1.5}
      step={0.25}
      smallStep={0.05}
      largeStep={1}
      min={0}
      format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
      hint="Steps by 0.25. Alt steps by 0.05, shift by 1."
      className="max-w-xs"
    />
  )
}

export default NumberInputSteps
