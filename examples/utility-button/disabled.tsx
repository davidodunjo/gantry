import { Download01 } from "@untitledui/icons"

import { UtilityButton } from "@/components/ui/utility-button"

function UtilityButtonDisabled() {
  return (
    <>
      <UtilityButton label="Download" icon={<Download01 />} />
      <UtilityButton label="Download" icon={<Download01 />} tooltip={false} />
      <UtilityButton label="Download" icon={<Download01 />} disabled />
    </>
  )
}

export default UtilityButtonDisabled
