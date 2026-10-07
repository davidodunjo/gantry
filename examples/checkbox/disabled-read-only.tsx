import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function CheckboxDisabledReadOnly() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-disabled" disabled />
        <Label htmlFor="checkbox-disabled" disabled>
          Overnight delivery, unavailable to this postcode
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-read-only" readOnly checked />
        <Label htmlFor="checkbox-read-only">
          Two-factor authentication, set by your admin
        </Label>
      </div>
    </div>
  )
}

export default CheckboxDisabledReadOnly
