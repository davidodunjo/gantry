import { useState } from "react"
import { Clock, File01, UserPlus01 } from "@untitledui/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

function CommandGrouped() {
  const [action, setAction] = useState("No command selected")

  return (
    <>
      <Command className="max-w-md border shadow-lg">
        <CommandInput placeholder="Search recent items or actions" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Recent">
            <CommandItem onSelect={() => setAction("Q3 roadmap doc selected")}>
              <Clock aria-hidden="true" />
              Q3 roadmap doc
            </CommandItem>
            <CommandItem
              onSelect={() => setAction("Design system audit selected")}
            >
              <File01 aria-hidden="true" />
              Design system audit
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => setAction("Invite a teammate selected")}
            >
              <UserPlus01 aria-hidden="true" />
              Invite a teammate
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <output className="text-sm text-muted-foreground">{action}</output>
    </>
  )
}

export default CommandGrouped
