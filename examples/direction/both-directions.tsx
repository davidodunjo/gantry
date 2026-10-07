import { DirectionProvider, useDirection } from "@/components/ui/direction"
import { Slider } from "@/components/ui/slider"

function BrightnessControl() {
  const direction = useDirection()

  return (
    <div className="flex w-64 flex-col gap-3">
      <div className="flex justify-between gap-4 text-sm">
        <span className="font-medium">Brightness</span>
        <span className="text-muted-foreground">
          {direction === "rtl" ? "Right to left" : "Left to right"}
        </span>
      </div>
      <Slider aria-label="Brightness" defaultValue={30} />
    </div>
  )
}

function DirectionBothDirections() {
  return (
    <div className="flex flex-wrap justify-center gap-12">
      {(["ltr", "rtl"] as const).map((direction) => (
        <DirectionProvider key={direction} direction={direction}>
          <div dir={direction}>
            <BrightnessControl />
          </div>
        </DirectionProvider>
      ))}
    </div>
  )
}

export default DirectionBothDirections
