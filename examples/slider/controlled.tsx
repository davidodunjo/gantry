import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

function SliderControlled() {
  const [volume, setVolume] = useState(35)

  function handleVolumeChange(next: number | readonly number[]) {
    setVolume(typeof next === "number" ? next : next[0])
  }

  function handleMute() {
    setVolume(0)
  }

  function handleMax() {
    setVolume(100)
  }

  return (
    <div className="flex w-80 flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Output volume</span>
        <span className="text-sm text-muted-foreground">{volume}%</span>
      </div>
      <Slider
        aria-label="Output volume"
        value={volume}
        onValueChange={handleVolumeChange}
      />
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={handleMute}>
          Mute
        </Button>
        <Button size="sm" variant="outline" onClick={handleMax}>
          Max
        </Button>
      </div>
    </div>
  )
}

export default SliderControlled
