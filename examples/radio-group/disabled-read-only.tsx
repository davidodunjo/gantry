import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function RadioGroupDisabledReadOnly() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <RadioGroup aria-label="Collection point" defaultValue="locker">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="radio-locker" value="locker" />
          <Label htmlFor="radio-locker">Parcel locker</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="radio-shop" value="shop" disabled />
          <Label htmlFor="radio-shop" disabled>
            Corner shop, full this week
          </Label>
        </div>
      </RadioGroup>
      <RadioGroup aria-label="Billing cycle" readOnly defaultValue="annual">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="radio-monthly" value="monthly" />
          <Label htmlFor="radio-monthly">Monthly</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="radio-annual" value="annual" />
          <Label htmlFor="radio-annual">Annual, fixed until renewal</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

export default RadioGroupDisabledReadOnly
