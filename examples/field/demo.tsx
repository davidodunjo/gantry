import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function FieldDemo() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="field-display-name">Display name</FieldLabel>
      <Input
        id="field-display-name"
        defaultValue="Ada Lovelace"
        aria-describedby="field-display-name-hint"
      />
      <FieldDescription id="field-display-name-hint">
        This is the name teammates see on your comments.
      </FieldDescription>
    </Field>
  )
}

export default FieldDemo
