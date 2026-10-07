import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LabelInvalid() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Label htmlFor="label-invalid" required invalid>
        Work email
      </Label>
      <Input
        id="label-invalid"
        type="email"
        required
        defaultValue="ada@acme"
        aria-invalid="true"
        aria-describedby="label-invalid-error"
      />
      <p id="label-invalid-error" className="text-sm text-destructive">
        Add a domain ending, such as .com.
      </p>
    </div>
  )
}

export default LabelInvalid
