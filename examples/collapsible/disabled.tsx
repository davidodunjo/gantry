import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

function CollapsibleDisabled() {
  return (
    <Collapsible disabled>
      <CollapsibleTrigger render={<Button variant="outline" />}>
        Restricted files
      </CollapsibleTrigger>
      <CollapsibleContent>Private content.</CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleDisabled
