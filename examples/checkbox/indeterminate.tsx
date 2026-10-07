import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const channels = [
  { id: "email", label: "Email" },
  { id: "sms", label: "Text message" },
  { id: "push", label: "Push notification" },
]

function CheckboxIndeterminate() {
  const [selected, setSelected] = useState(["email"])
  const everyChannel = selected.length === channels.length

  function handleSelectAll(checked: boolean) {
    setSelected(checked ? channels.map((channel) => channel.id) : [])
  }

  function handleToggle(id: string, checked: boolean) {
    setSelected((current) =>
      checked ? [...current, id] : current.filter((entry) => entry !== id)
    )
  }

  return (
    <fieldset className="flex w-full max-w-xs flex-col gap-3">
      <legend className="mb-3 text-sm font-medium">Order updates</legend>
      <div className="flex items-center gap-2">
        <Checkbox
          id="checkbox-every-channel"
          checked={everyChannel}
          indeterminate={selected.length > 0 && !everyChannel}
          onCheckedChange={handleSelectAll}
        />
        <Label htmlFor="checkbox-every-channel">Every channel</Label>
      </div>
      {channels.map((channel) => (
        <div key={channel.id} className="flex items-center gap-2 ps-6">
          <Checkbox
            id={`checkbox-${channel.id}`}
            checked={selected.includes(channel.id)}
            onCheckedChange={(checked) => handleToggle(channel.id, checked)}
          />
          <Label htmlFor={`checkbox-${channel.id}`}>{channel.label}</Label>
        </div>
      ))}
    </fieldset>
  )
}

export default CheckboxIndeterminate
