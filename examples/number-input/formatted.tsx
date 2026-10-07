import { NumberInput } from "@/components/ui/number-input"

function NumberInputFormatted() {
  return (
    <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-3">
      <NumberInput
        label="Budget"
        defaultValue={1250}
        locale="en-US"
        format={{ style: "currency", currency: "USD" }}
        step={50}
        min={0}
      />
      <NumberInput
        label="Discount"
        defaultValue={0.15}
        locale="en-US"
        format={{ style: "percent" }}
        step={0.01}
        min={0}
        max={1}
      />
      <NumberInput
        label="Parcel weight"
        defaultValue={25}
        locale="en-US"
        format={{ style: "unit", unit: "kilogram" }}
        min={0}
      />
    </div>
  )
}

export default NumberInputFormatted
