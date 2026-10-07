import { useState } from "react"
import { ArrowUp } from "@untitledui/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

function InputGroupBlockAddons() {
  const [note, setNote] = useState("")

  function handleSave() {
    setNote("")
  }

  return (
    <InputGroup className="max-w-lg">
      <InputGroupAddon align="block-start">
        <InputGroupText>Note on invoice 4821</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea
        aria-label="Note on invoice 4821"
        placeholder="Chased the client on Tuesday…"
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
      <InputGroupAddon align="block-end" className="justify-between">
        <InputGroupText>{note.length} characters</InputGroupText>
        <InputGroupButton
          size="icon-sm"
          variant="default"
          aria-label="Save note"
          disabled={note.trim().length === 0}
          onClick={handleSave}
        >
          <ArrowUp />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default InputGroupBlockAddons
