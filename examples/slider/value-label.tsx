import { Slider } from "@/components/ui/slider"

function SliderValueLabel() {
  return (
    <div className="flex flex-col gap-12">
      <Slider
        className="mb-6 w-80"
        aria-label="Bottom label"
        defaultValue={[30]}
        labelPosition="bottom"
      />
      <Slider
        className="w-80"
        aria-label="Floating label"
        defaultValue={[25, 75]}
        labelPosition="top-floating"
      />
    </div>
  )
}

export default SliderValueLabel
