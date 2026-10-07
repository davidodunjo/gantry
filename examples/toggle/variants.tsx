import { Toggle } from "@/components/ui/toggle"

function ToggleVariants() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Toggle>Off</Toggle>
        <Toggle defaultPressed>On</Toggle>
      </div>
      <div className="flex gap-2">
        <Toggle variant="outline">Off</Toggle>
        <Toggle variant="outline" defaultPressed>
          On
        </Toggle>
      </div>
    </div>
  )
}

export default ToggleVariants
