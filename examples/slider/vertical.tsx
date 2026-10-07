import { Slider } from "@/components/ui/slider"

function SliderVertical() {
  return (
    <div className="h-48">
      <Slider aria-label="Fader" orientation="vertical" defaultValue={[70]} />
    </div>
  )
}

export default SliderVertical
