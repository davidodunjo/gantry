import { Copy01, Download01, Edit01, Trash01 } from "@untitledui/icons"

import { UtilityButton } from "@/components/ui/utility-button"

function UtilityButtonColours() {
  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        <UtilityButton label="Copy" icon={<Copy01 />} />
        <UtilityButton label="Edit" icon={<Edit01 />} />
        <UtilityButton label="Download" icon={<Download01 />} />
        <UtilityButton label="Delete" icon={<Trash01 />} />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        <UtilityButton label="Copy" icon={<Copy01 />} color="tertiary" />
        <UtilityButton label="Edit" icon={<Edit01 />} color="tertiary" />
        <UtilityButton
          label="Download"
          icon={<Download01 />}
          color="tertiary"
        />
        <UtilityButton label="Delete" icon={<Trash01 />} color="tertiary" />
      </div>
    </>
  )
}

export default UtilityButtonColours
