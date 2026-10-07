import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function RadioGroupSizes() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <RadioGroup
        aria-label="Small radios"
        defaultValue="small"
        className="flex items-center gap-3"
      >
        <RadioGroupItem id="radio-small" value="small" />
        <Label htmlFor="radio-small">Small, the default</Label>
      </RadioGroup>
      <RadioGroup
        size="md"
        aria-label="Medium radios"
        defaultValue="medium"
        className="flex items-center gap-3"
      >
        <RadioGroupItem id="radio-medium" value="medium" />
        <Label htmlFor="radio-medium" className="text-base leading-6">
          Medium
        </Label>
      </RadioGroup>
    </div>
  )
}

export default RadioGroupSizes
