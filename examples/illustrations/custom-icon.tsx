import { Check } from "@untitledui/icons"

import { Illustration } from "@/components/ui/illustration"

function IllustrationsCustomIcon() {
  return (
    <>
      <Illustration type="cloud" size="md">
        <Check aria-hidden className="size-7" />
      </Illustration>
      <Illustration type="documents" size="md">
        {null}
      </Illustration>
    </>
  )
}

export default IllustrationsCustomIcon
