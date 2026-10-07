import { Check } from "@untitledui/icons"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"

function MarkerVariants() {
  return (
    <div className="w-full space-y-8">
      <Marker>
        <MarkerIcon>
          <Check />
        </MarkerIcon>
        <MarkerContent>All changes saved</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>Account activity</MarkerContent>
      </Marker>
    </div>
  )
}

export default MarkerVariants
