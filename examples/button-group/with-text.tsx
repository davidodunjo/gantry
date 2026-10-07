import { Copy01, Share07 } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"

function ButtonGroupWithText() {
  return (
    <>
      <ButtonGroup aria-label="Rows per page">
        <ButtonGroupText>Rows per page</ButtonGroupText>
        <Button variant="outline">25</Button>
        <Button variant="outline">50</Button>
        <Button variant="outline">100</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Share options">
        <Button variant="outline">
          <Copy01 />
          Copy link
        </Button>
        <ButtonGroupSeparator />
        <Button variant="outline">
          <Share07 />
          Invite
        </Button>
      </ButtonGroup>
    </>
  )
}

export default ButtonGroupWithText
