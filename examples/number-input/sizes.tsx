import { NumberInput } from "@/components/ui/number-input"

function NumberInputSizes() {
  return (
    <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-3">
      <NumberInput label="Small" size="sm" defaultValue={12} />
      <NumberInput label="Medium" size="md" defaultValue={12} />
      <NumberInput label="Large" size="lg" defaultValue={12} />
    </div>
  )
}

export default NumberInputSizes
