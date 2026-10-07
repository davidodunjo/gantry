import { Copy01, Download01, Edit01, Trash01 } from "@untitledui/icons"

import { UtilityButton } from "@/components/ui/utility-button"

function UtilityButtonTooltip() {
  return (
    <>
      <UtilityButton label="Copy" icon={<Copy01 />} />
      <UtilityButton label="Edit" icon={<Edit01 />} tooltipPlacement="right" />
      <UtilityButton
        label="Download"
        icon={<Download01 />}
        tooltipPlacement="bottom"
      />
      <UtilityButton
        label="Delete"
        icon={<Trash01 />}
        tooltipPlacement="left"
      />
    </>
  )
}

export default UtilityButtonTooltip
