import { SearchLg } from "@untitledui/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

function InputGroupWithAnIcon() {
  return (
    <>
      <InputGroup controlSize="sm" className="max-w-sm">
        <InputGroupAddon>
          <SearchLg aria-hidden="true" />
        </InputGroupAddon>
        <InputGroupInput
          aria-label="Search invoices"
          placeholder="Search invoices"
        />
      </InputGroup>
      <InputGroup controlSize="lg" className="max-w-sm">
        <InputGroupAddon>
          <SearchLg aria-hidden="true" />
        </InputGroupAddon>
        <InputGroupInput
          aria-label="Search invoices, large"
          placeholder="Search invoices"
        />
      </InputGroup>
    </>
  )
}

export default InputGroupWithAnIcon
