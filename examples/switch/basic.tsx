import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function SwitchBasic() {
  const [offline, setOffline] = useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-3">
        <Switch
          id="switch-offline"
          checked={offline}
          onCheckedChange={setOffline}
        />
        <Label htmlFor="switch-offline">Airplane mode</Label>
      </div>
      <output className="text-sm text-muted-foreground">
        {offline ? "Radios are off." : "Wi-Fi and Bluetooth are on."}
      </output>
    </div>
  )
}

export default SwitchBasic
