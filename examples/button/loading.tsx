import { RefreshCw01 } from "@untitledui/icons"

import { Button } from "@/components/ui/button"

function ButtonLoading() {
  return (
    <>
      <Button>Save changes</Button>
      <Button loading>Save changes</Button>
      <Button loading showTextWhileLoading>
        Save changes
      </Button>
      <Button variant="outline" size="icon" loading aria-label="Refresh">
        <RefreshCw01 />
      </Button>
    </>
  )
}

export default ButtonLoading
