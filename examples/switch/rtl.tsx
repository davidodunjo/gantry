import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function SwitchRtl() {
  return (
    <div dir="rtl" className="flex w-full max-w-xs flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="switch-rtl-off" />
        <Label htmlFor="switch-rtl-off">وضع الطيران</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="switch-rtl-on" defaultChecked />
        <Label htmlFor="switch-rtl-on">الإشعارات</Label>
      </div>
    </div>
  )
}

export default SwitchRtl
