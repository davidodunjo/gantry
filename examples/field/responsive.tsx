import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function FieldResponsive() {
  return (
    <div className="flex w-full flex-col gap-8">
      <FieldGroup className="max-w-xs">
        <Field orientation="responsive">
          <FieldContent>
            <FieldLabel htmlFor="field-responsive-narrow">Website</FieldLabel>
            <FieldDescription>Shown on your public profile.</FieldDescription>
          </FieldContent>
          <Input
            id="field-responsive-narrow"
            type="url"
            className="min-w-0 flex-1"
            defaultValue="https://acme.com"
          />
        </Field>
      </FieldGroup>
      <FieldGroup>
        <Field orientation="responsive">
          <FieldContent>
            <FieldLabel htmlFor="field-responsive-wide">Website</FieldLabel>
            <FieldDescription>Shown on your public profile.</FieldDescription>
          </FieldContent>
          <Input
            id="field-responsive-wide"
            type="url"
            className="min-w-0 flex-1"
            defaultValue="https://acme.com"
          />
        </Field>
      </FieldGroup>
    </div>
  )
}

export default FieldResponsive
