import { Mail01 } from "@untitledui/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

function InputGroupInvalid() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <InputGroup>
        <InputGroupAddon>
          <Mail01 aria-hidden="true" />
        </InputGroupAddon>
        <InputGroupInput
          type="email"
          aria-label="Billing email"
          aria-invalid="true"
          aria-describedby="input-group-invalid-error"
          defaultValue="ada@basecamp"
        />
      </InputGroup>
      <p id="input-group-invalid-error" className="text-sm text-destructive">
        Add a domain ending, such as .com.
      </p>
    </div>
  )
}

export default InputGroupInvalid
