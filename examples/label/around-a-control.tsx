import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function LabelAroundAControl() {
  return (
    <Label className="gap-2">
      <Checkbox defaultChecked />
      Email me when someone replies
    </Label>
  )
}

export default LabelAroundAControl
