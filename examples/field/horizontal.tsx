import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function FieldHorizontal() {
  return (
    <Field orientation="horizontal" className="max-w-lg">
      <FieldContent>
        <FieldLabel htmlFor="field-horizontal">Support email</FieldLabel>
        <FieldDescription id="field-horizontal-hint">
          Replies to customer messages come from this address.
        </FieldDescription>
      </FieldContent>
      <Input
        id="field-horizontal"
        type="email"
        className="w-1/2"
        defaultValue="help@acme.com"
        aria-describedby="field-horizontal-hint"
      />
    </Field>
  )
}

export default FieldHorizontal
