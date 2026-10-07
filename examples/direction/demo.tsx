import { DirectionProvider, useDirection } from "@/components/ui/direction"

function DirectionLabel() {
  const direction = useDirection()

  return (
    <p className="w-44 rounded-lg border p-3 text-sm">
      {direction === "rtl" ? "Right to left" : "Left to right"}
    </p>
  )
}

function DirectionDemo() {
  return (
    <>
      {(["ltr", "rtl"] as const).map((direction) => (
        <DirectionProvider key={direction} direction={direction}>
          <div dir={direction}>
            <DirectionLabel />
          </div>
        </DirectionProvider>
      ))}
    </>
  )
}

export default DirectionDemo
