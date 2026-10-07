import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LabelRequired() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Label htmlFor="label-required" required>
        Work email
      </Label>
      <Input
        id="label-required"
        type="email"
        required
        placeholder="ada@acme.com"
      />
    </div>
  )
}

export default LabelRequired
