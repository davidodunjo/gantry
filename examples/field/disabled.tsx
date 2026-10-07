import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function FieldDisabled() {
  return (
    <Field data-disabled="true" className="max-w-sm">
      <FieldLabel htmlFor="field-disabled">Billing owner</FieldLabel>
      <Input
        id="field-disabled"
        disabled
        defaultValue="priya@acme.com"
        aria-describedby="field-disabled-hint"
      />
      <FieldDescription id="field-disabled-hint">
        Only an account owner can move billing to someone else.
      </FieldDescription>
    </Field>
  )
}

export default FieldDisabled
