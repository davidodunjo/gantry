import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function CheckboxInvalid() {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <Checkbox
          id="checkbox-invalid"
          aria-invalid="true"
          aria-describedby="checkbox-invalid-error"
        />
        <Label htmlFor="checkbox-invalid">I accept the privacy policy</Label>
      </div>
      <p id="checkbox-invalid-error" className="text-sm text-destructive">
        Accept the policy to continue.
      </p>
    </div>
  )
}

export default CheckboxInvalid
