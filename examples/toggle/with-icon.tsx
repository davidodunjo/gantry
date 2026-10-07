import { Star01 } from "@untitledui/icons"

import { Toggle } from "@/components/ui/toggle"

function ToggleWithIcon() {
  return (
    <>
      <Toggle variant="outline" aria-label="Favourite">
        <Star01 />
      </Toggle>
      <Toggle variant="outline" defaultPressed>
        <Star01 data-icon="inline-start" />
        Favourite
      </Toggle>
    </>
  )
}

export default ToggleWithIcon
