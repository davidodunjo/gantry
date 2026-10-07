import { Copy01, Edit01, Trash01 } from "@untitledui/icons"

import { UtilityButton } from "@/components/ui/utility-button"

function UtilityButtonDemo() {
  return (
    <>
      <UtilityButton label="Copy" icon={<Copy01 />} />
      <UtilityButton label="Edit" icon={<Edit01 />} />
      <UtilityButton label="Delete" icon={<Trash01 />} />
    </>
  )
}

export default UtilityButtonDemo
