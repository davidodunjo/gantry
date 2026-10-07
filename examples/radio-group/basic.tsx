import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function RadioGroupBasic() {
  return (
    <RadioGroup aria-label="Seat" defaultValue="aisle" className="max-w-xs">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="radio-window" value="window" />
        <Label htmlFor="radio-window">Window</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="radio-middle" value="middle" />
        <Label htmlFor="radio-middle">Middle</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="radio-aisle" value="aisle" />
        <Label htmlFor="radio-aisle">Aisle</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupBasic
