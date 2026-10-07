import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function SwitchSizes() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="switch-size-sm" defaultChecked />
        <Label htmlFor="switch-size-sm">Small, the default</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="switch-size-md" size="md" defaultChecked />
        <Label htmlFor="switch-size-md" className="text-base leading-6">
          Medium
        </Label>
      </div>
    </div>
  )
}

export default SwitchSizes
