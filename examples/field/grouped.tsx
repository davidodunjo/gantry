import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function FieldGrouped() {
  return (
    <FieldSet className="w-full max-w-lg">
      <FieldLegend>Shipping address</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-street">Street</FieldLabel>
          <Input id="field-street" defaultValue="14 Rua da Prata" />
        </Field>
        <Field>
          <FieldLabel htmlFor="field-city">City</FieldLabel>
          <Input id="field-city" defaultValue="Lisbon" />
        </Field>
        <FieldSeparator>Optional</FieldSeparator>
        <Field>
          <FieldLabel htmlFor="field-buzzer">Buzzer code</FieldLabel>
          <Input id="field-buzzer" placeholder="Leave blank if none" />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

export default FieldGrouped
