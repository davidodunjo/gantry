import { ArrowRight, Plus, Upload01 } from "@untitledui/icons"

import { Button } from "@/components/ui/button"

function ButtonWithIcon() {
  return (
    <>
      <Button>
        <Plus />
        Invite teammate
      </Button>
      <Button variant="outline">
        Review changes
        <ArrowRight />
      </Button>
      <Button variant="secondary">
        <Upload01 />
        Publish site
        <ArrowRight />
      </Button>
    </>
  )
}

export default ButtonWithIcon
