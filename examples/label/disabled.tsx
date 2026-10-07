import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LabelDisabled() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Label htmlFor="label-disabled" disabled required>
        Work email
      </Label>
      <Input
        id="label-disabled"
        type="email"
        disabled
        required
        defaultValue="ada@acme.com"
      />
    </div>
  )
}

export default LabelDisabled
