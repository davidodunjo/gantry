import { Textarea } from "@/components/ui/textarea"

function TextareaSizes() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-3">
      <Textarea
        controlSize="sm"
        aria-label="Small message"
        defaultValue="The checkout page hangs after I pick a delivery date."
      />
      <Textarea
        aria-label="Default message"
        defaultValue="The checkout page hangs after I pick a delivery date."
      />
      <Textarea
        controlSize="lg"
        aria-label="Large message"
        defaultValue="The checkout page hangs after I pick a delivery date."
      />
    </div>
  )
}

export default TextareaSizes
