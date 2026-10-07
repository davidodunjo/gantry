import { SearchLg } from "@untitledui/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

function InputGroupRtl() {
  return (
    <InputGroup dir="rtl" className="max-w-sm">
      <InputGroupAddon>
        <SearchLg aria-hidden="true" />
      </InputGroupAddon>
      <InputGroupInput aria-label="بحث" placeholder="ابحث عن فاتورة" />
    </InputGroup>
  )
}

export default InputGroupRtl
