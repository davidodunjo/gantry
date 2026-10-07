import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function FieldInvalid() {
  return (
    <Field data-invalid data-required className="max-w-sm">
      <FieldLabel htmlFor="field-invalid">Workspace URL</FieldLabel>
      <Input
        id="field-invalid"
        required
        defaultValue="Acme Inc"
        aria-invalid="true"
        aria-describedby="field-invalid-error"
      />
      <FieldError id="field-invalid-error">
        Spaces and capitals are not allowed in a workspace URL.
      </FieldError>
    </Field>
  )
}

export default FieldInvalid
