import { Folder, Home01, Settings01, Users01 } from "@untitledui/icons"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar"

function SidebarDemo() {
  return (
    <SidebarProvider className="h-[420px] min-h-0 w-full max-w-2xl overflow-hidden rounded-xl border">
      <Sidebar collapsible="none" className="w-64 shrink-0 border-e">
        <SidebarHeader>
          <span className="text-lg font-semibold">Gantry</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <Home01 aria-hidden="true" />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Folder aria-hidden="true" />
                    <span>Projects</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>4</SidebarMenuBadge>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        Design system
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#">
                        Website
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton disabled>
                    <Users01 aria-hidden="true" />
                    <span>Team</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                render={<a href="#settings" aria-label="Settings" />}
              >
                <Settings01 aria-hidden="true" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <div className="hidden flex-1 items-center p-6 text-sm text-muted-foreground sm:flex">
        Page content would sit here, next to the sidebar.
      </div>
    </SidebarProvider>
  )
}

export default SidebarDemo
