import { Star01 } from "@untitledui/icons"

import { UtilityButton } from "@/components/ui/utility-button"

function UtilityButtonSizes() {
  return (
    <>
      <UtilityButton label="Add to favourites" icon={<Star01 />} size="xs" />
      <UtilityButton label="Add to favourites" icon={<Star01 />} />
      <UtilityButton
        label="Add to favourites"
        icon={<Star01 />}
        size="xs"
        color="tertiary"
      />
      <UtilityButton
        label="Add to favourites"
        icon={<Star01 />}
        color="tertiary"
      />
    </>
  )
}

export default UtilityButtonSizes
