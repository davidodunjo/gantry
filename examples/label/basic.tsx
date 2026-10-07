import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LabelBasic() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <Label htmlFor="label-basic">Display name</Label>
      <Input id="label-basic" placeholder="Ada Lovelace" />
    </div>
  )
}

export default LabelBasic
