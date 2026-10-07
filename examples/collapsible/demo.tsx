import { ChevronDown } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-md">
      <CollapsibleTrigger
        render={
          <Button variant="outline" className="group w-full justify-between" />
        }
      >
        Release notes
        <ChevronDown
          aria-hidden="true"
          className="transition-transform group-aria-expanded:rotate-180"
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="space-y-3 p-4 text-sm">
          <li>Faster search indexing</li>
          <li>Dark mode contrast fixes</li>
          <li>New keyboard shortcuts</li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleDemo
