import { useState } from "react"
import { Plus, Settings01, Trash01, User01 } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DropdownMenuDemo() {
  const [action, setAction] = useState("No action selected")

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          Open account menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setAction("Profile opened")}>
              <User01 aria-hidden="true" />
              <span className="flex flex-col">
                <span>View profile</span>
                <span className="text-xs font-normal text-muted-foreground">
                  Personal details and preferences
                </span>
              </span>
              <DropdownMenuShortcut>Ctrl P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setAction("Settings opened")}>
              <Settings01 aria-hidden="true" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Plus aria-hidden="true" />
                Invite a member
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() => setAction("Invite link copied")}
                >
                  Copy invitation link
                </DropdownMenuItem>
                <DropdownMenuItem disabled>Email invitation</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem disabled>Billing (unavailable)</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            onClick={() => setAction("Delete requested")}
          >
            <Trash01 aria-hidden="true" />
            Delete project
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <output className="text-sm text-muted-foreground">{action}</output>
    </>
  )
}

export default DropdownMenuDemo
