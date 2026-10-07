import { Slider } from "@/components/ui/slider"

function SliderFormatted() {
  return (
    <Slider
      className="mt-10 w-80"
      aria-label="Monthly budget"
      defaultValue={[120, 360]}
      min={0}
      max={500}
      step={20}
      labelPosition="top-floating"
      labelFormatter={(value) => `£${value}`}
    />
  )
}

export default SliderFormatted
