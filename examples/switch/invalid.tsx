import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function SwitchInvalid() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <div className="flex items-center gap-3">
        <Switch
          id="switch-invalid"
          aria-invalid="true"
          aria-describedby="switch-invalid-error"
        />
        <Label htmlFor="switch-invalid">Encrypt backups before upload</Label>
      </div>
      <p id="switch-invalid-error" className="text-sm text-destructive">
        Encryption is required on this plan.
      </p>
    </div>
  )
}

export default SwitchInvalid
