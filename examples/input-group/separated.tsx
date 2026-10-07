import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

function InputGroupSeparated() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon separated>
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Amount"
        inputMode="decimal"
        defaultValue="1,250.00"
      />
      <InputGroupAddon align="inline-end" separated>
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default InputGroupSeparated
