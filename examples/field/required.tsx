import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function FieldRequired() {
  return (
    <Field data-required className="max-w-sm">
      <FieldLabel htmlFor="field-workspace">Workspace URL</FieldLabel>
      <Input
        id="field-workspace"
        required
        placeholder="acme"
        aria-describedby="field-workspace-hint"
      />
      <FieldDescription id="field-workspace-hint">
        Lowercase letters and dashes only.
      </FieldDescription>
    </Field>
  )
}

export default FieldRequired
