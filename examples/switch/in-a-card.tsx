import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function SwitchInACard() {
  const [email, setEmail] = useState(true)
  const [digest, setDigest] = useState(true)
  const [mentions, setMentions] = useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-6 rounded-xl border bg-card p-6 text-card-foreground">
      <div className="flex flex-col gap-1.5">
        <h3 className="leading-none font-semibold">Email notifications</h3>
        <p className="text-sm text-muted-foreground">
          Each row takes effect as you flip it. There is nothing to save.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="switch-email">Send me email at all</Label>
          <Switch
            id="switch-email"
            checked={email}
            onCheckedChange={setEmail}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="switch-digest" disabled={!email}>
            Monday morning digest
          </Label>
          <Switch
            id="switch-digest"
            checked={digest}
            onCheckedChange={setDigest}
            disabled={!email}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="switch-mentions" disabled={!email}>
            Someone mentions me
          </Label>
          <Switch
            id="switch-mentions"
            checked={mentions}
            onCheckedChange={setMentions}
            disabled={!email}
          />
        </div>
      </div>
    </div>
  )
}

export default SwitchInACard
