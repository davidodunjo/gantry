import { Copy01 } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

function ButtonGroupWithAField() {
  return (
    <ButtonGroup className="w-full max-w-sm" aria-label="Page address">
      <ButtonGroupText>gantry.dev/</ButtonGroupText>
      <Input defaultValue="changelog" aria-label="Page slug" />
      <Button variant="outline" aria-label="Copy address">
        <Copy01 />
      </Button>
    </ButtonGroup>
  )
}

export default ButtonGroupWithAField
