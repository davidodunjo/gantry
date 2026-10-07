import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function RadioGroupHorizontal() {
  return (
    <RadioGroup
      aria-label="Temperature"
      defaultValue="celsius"
      className="flex w-fit gap-6"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem id="radio-celsius" value="celsius" />
        <Label htmlFor="radio-celsius">Celsius</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="radio-fahrenheit" value="fahrenheit" />
        <Label htmlFor="radio-fahrenheit">Fahrenheit</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupHorizontal
