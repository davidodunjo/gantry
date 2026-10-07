import { useState } from "react"
import { Plus, Settings01, Trash01, User01 } from "@untitledui/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

function ContextMenuDemo() {
  const [action, setAction] = useState("No action selected")

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger
          className="flex h-36 w-80 items-center justify-center rounded-xl border border-dashed text-sm"
          tabIndex={0}
        >
          Right-click here, or press Shift+F10
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuLabel>My account</ContextMenuLabel>
            <ContextMenuItem onClick={() => setAction("Profile opened")}>
              <User01 aria-hidden="true" />
              <span className="flex flex-col">
                <span>View profile</span>
                <span className="text-xs font-normal text-muted-foreground">
                  Personal details and preferences
                </span>
              </span>
              <ContextMenuShortcut>Ctrl P</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem onClick={() => setAction("Settings opened")}>
              <Settings01 aria-hidden="true" />
              Settings
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <Plus aria-hidden="true" />
                Invite a member
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem
                  onClick={() => setAction("Invite link copied")}
                >
                  Copy invitation link
                </ContextMenuItem>
                <ContextMenuItem disabled>Email invitation</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuItem disabled>Billing (unavailable)</ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuItem
            variant="destructive"
            onClick={() => setAction("Delete requested")}
          >
            <Trash01 aria-hidden="true" />
            Delete project
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <output className="text-sm text-muted-foreground">{action}</output>
    </>
  )
}

export default ContextMenuDemo
