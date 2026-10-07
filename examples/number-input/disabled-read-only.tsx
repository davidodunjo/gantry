import { NumberInput } from "@/components/ui/number-input"

function NumberInputDisabledReadOnly() {
  return (
    <div className="grid w-full max-w-lg gap-6 sm:grid-cols-2">
      <NumberInput label="Disabled" defaultValue={12} disabled />
      <NumberInput label="Read only" defaultValue={12} readOnly />
    </div>
  )
}

export default NumberInputDisabledReadOnly
