import { Toggle } from "@/components/ui/toggle"

function ToggleDisabled() {
  return (
    <>
      <Toggle variant="outline" disabled>
        Off
      </Toggle>
      <Toggle variant="outline" disabled defaultPressed>
        On
      </Toggle>
    </>
  )
}

export default ToggleDisabled
