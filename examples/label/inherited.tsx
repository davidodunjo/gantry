import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function LabelInherited() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="label-plain">Work email</Label>
        <Input id="label-plain" type="email" defaultValue="ada@acme.com" />
      </div>
      <div data-required data-invalid className="group flex flex-col gap-1.5">
        <Label htmlFor="label-inherited">Work email</Label>
        <Input
          id="label-inherited"
          type="email"
          required
          aria-invalid="true"
          defaultValue="ada@acme"
        />
      </div>
    </div>
  )
}

export default LabelInherited
