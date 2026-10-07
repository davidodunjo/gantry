import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LabelOptional() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Label htmlFor="label-optional">
        Company
        <span className="ms-1 font-normal text-muted-foreground">
          (optional)
        </span>
      </Label>
      <Input id="label-optional" placeholder="Acme Inc" />
    </div>
  )
}

export default LabelOptional
