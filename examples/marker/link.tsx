import { Marker, MarkerContent } from "@/components/ui/marker"

function MarkerLink() {
  return (
    <Marker>
      <MarkerContent>
        Read the <a href="#components">component documentation</a>.
      </MarkerContent>
    </Marker>
  )
}

export default MarkerLink
