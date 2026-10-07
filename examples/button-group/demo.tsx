import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

function ButtonGroupDemo() {
  return (
    <ButtonGroup aria-label="Message actions">
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Snooze</Button>
      <Button variant="outline">Report spam</Button>
    </ButtonGroup>
  )
}

export default ButtonGroupDemo
