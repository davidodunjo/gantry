import { Slider } from "@/components/ui/slider"

function SliderRange() {
  return (
    <Slider
      className="w-80"
      aria-label="Price range"
      defaultValue={[20, 80]}
      step={10}
      minStepsBetweenValues={1}
    />
  )
}

export default SliderRange
