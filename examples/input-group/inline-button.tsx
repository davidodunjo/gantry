import { useState } from "react"
import { Eye, EyeOff } from "@untitledui/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

function InputGroupInlineButton() {
  const [visible, setVisible] = useState(false)

  function handleToggle() {
    setVisible(!visible)
  }

  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput
        aria-label="Password"
        type={visible ? "text" : "password"}
        autoComplete="new-password"
        defaultValue="correct horse battery"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-sm"
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          onClick={handleToggle}
        >
          {visible ? <EyeOff /> : <Eye />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default InputGroupInlineButton
