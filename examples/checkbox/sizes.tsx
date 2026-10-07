import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function CheckboxSizes() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-size-sm" defaultChecked />
        <Label htmlFor="checkbox-size-sm">Small, the default</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checkbox-size-md" size="md" defaultChecked />
        <Label htmlFor="checkbox-size-md" className="text-base leading-6">
          Medium
        </Label>
      </div>
    </div>
  )
}

export default CheckboxSizes
