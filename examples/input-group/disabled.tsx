import { Mail01 } from "@untitledui/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

function InputGroupDisabled() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <Mail01 aria-hidden="true" />
      </InputGroupAddon>
      <InputGroupInput
        disabled
        aria-label="Billing email"
        defaultValue="ada@basecamp.com"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton disabled>Resend</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default InputGroupDisabled
