import { Toggle } from "@/components/ui/toggle"

function ToggleSizes() {
  return (
    <>
      {(["sm", "default", "lg"] as const).map((size) => (
        <Toggle key={size} variant="outline" size={size} defaultPressed>
          Pinned
        </Toggle>
      ))}
    </>
  )
}

export default ToggleSizes
