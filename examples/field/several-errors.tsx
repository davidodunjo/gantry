import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

function FieldSeveralErrors() {
  return (
    <Field data-invalid="true" data-required className="max-w-sm">
      <FieldLabel htmlFor="field-password">Password</FieldLabel>
      <Input
        id="field-password"
        type="password"
        required
        aria-invalid="true"
        aria-describedby="field-password-errors"
        defaultValue="acme"
      />
      <FieldError
        id="field-password-errors"
        errors={[
          { message: "Use at least 12 characters." },
          { message: "Add a number." },
          { message: "Do not reuse your workspace name." },
        ]}
      />
    </Field>
  )
}

export default FieldSeveralErrors
