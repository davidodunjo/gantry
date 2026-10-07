import { Check } from "@untitledui/icons"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

function MarkerDemo() {
  return (
    <Marker>
      <MarkerIcon>
        <Check />
      </MarkerIcon>
      <MarkerContent>All changes saved</MarkerContent>
    </Marker>
  )
}

export default MarkerDemo
