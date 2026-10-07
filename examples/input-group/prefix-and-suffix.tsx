import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

function InputGroupPrefixAndSuffix() {
  return (
    <>
      <InputGroup className="max-w-sm">
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-label="Website" placeholder="basecamp.com" />
      </InputGroup>
      <InputGroup className="max-w-sm">
        <InputGroupInput aria-label="Invoice reference" defaultValue="4821" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.pdf</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </>
  )
}

export default InputGroupPrefixAndSuffix
