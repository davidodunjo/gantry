import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"

function FieldChoiceCards() {
  return (
    <FieldGroup className="max-w-md">
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox defaultChecked />
          <FieldContent>
            <FieldTitle>Standard delivery</FieldTitle>
            <FieldDescription>
              Five to seven working days. Free on orders over £60.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox />
          <FieldContent>
            <FieldTitle>Next day delivery</FieldTitle>
            <FieldDescription>
              Ordered before 3pm, with you tomorrow. £6.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}

export default FieldChoiceCards
