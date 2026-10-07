import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function RadioGroupInvalid() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <RadioGroup
        aria-label="Age check"
        aria-invalid="true"
        aria-describedby="radio-invalid-error"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem id="radio-over" value="over" />
          <Label htmlFor="radio-over">I am 18 or over</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="radio-under" value="under" />
          <Label htmlFor="radio-under">I am under 18</Label>
        </div>
      </RadioGroup>
      <p id="radio-invalid-error" className="text-sm text-destructive">
        Confirm your age to continue.
      </p>
    </div>
  )
}

export default RadioGroupInvalid
