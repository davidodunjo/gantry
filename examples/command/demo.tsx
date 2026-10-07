import { useState } from "react"
import { SearchLg, Settings01, User01 } from "@untitledui/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"

function CommandDemo() {
  const [action, setAction] = useState("No command selected")

  return (
    <>
      <Command className="max-w-md border shadow-lg">
        <CommandInput placeholder="Type a command or search" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Workspace">
            <CommandItem onSelect={() => setAction("Search selected")}>
              <SearchLg aria-hidden="true" />
              Search projects
              <CommandShortcut>Ctrl K</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setAction("Profile selected")}>
              <User01 aria-hidden="true" />
              Profile
            </CommandItem>
            <CommandItem disabled>
              <Settings01 aria-hidden="true" />
              Workspace settings (disabled)
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <output className="text-sm text-muted-foreground">{action}</output>
    </>
  )
}

export default CommandDemo
