import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function CheckboxDemo() {
  return (
    <div className="flex w-full max-w-xs items-start gap-2">
      <Checkbox
        id="checkbox-remember"
        className="mt-0.5"
        aria-describedby="checkbox-remember-hint"
      />
      <div>
        <Label htmlFor="checkbox-remember">Remember this device</Label>
        <p
          id="checkbox-remember-hint"
          className="text-sm leading-5 text-muted-foreground"
        >
          Skip the login code for the next thirty days.
        </p>
      </div>
    </div>
  )
}

export default CheckboxDemo
