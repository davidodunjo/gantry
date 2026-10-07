import { SearchLg } from "@untitledui/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

function InputGroupDemo() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <SearchLg aria-hidden="true" />
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Search invoices"
        placeholder="Search invoices"
      />
    </InputGroup>
  )
}

export default InputGroupDemo
