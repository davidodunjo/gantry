import { Slider } from "@/components/ui/slider"

function SliderDisabled() {
  return (
    <Slider
      className="w-80"
      aria-label="Locked allocation"
      defaultValue={[40]}
      disabled
    />
  )
}

export default SliderDisabled
