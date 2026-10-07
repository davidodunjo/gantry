import { ArrowUp } from "@untitledui/icons"

import { Button } from "@/components/ui/button"

function ButtonDemo() {
  return (
    <>
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUp />
      </Button>
    </>
  )
}

export default ButtonDemo
