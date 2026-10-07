import { useState } from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

function MenubarDemo() {
  const [toolbar, setToolbar] = useState(true)
  const [action, setAction] = useState("Use arrow keys to move between menus")

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => setAction("New file created")}>
              New file<MenubarShortcut>Ctrl N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Open recent</MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              variant="destructive"
              onClick={() => setAction("Close requested")}
            >
              Close file
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => setAction("Undo requested")}>
              Undo<MenubarShortcut>Ctrl Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked={toolbar} onCheckedChange={setToolbar}>
              Show toolbar
            </MenubarCheckboxItem>
            <MenubarSub>
              <MenubarSubTrigger>Zoom</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem onClick={() => setAction("Zoom 100%")}>
                  100%
                </MenubarItem>
                <MenubarItem onClick={() => setAction("Zoom 125%")}>
                  125%
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <output className="text-sm text-muted-foreground">{action}</output>
    </>
  )
}

export default MenubarDemo
