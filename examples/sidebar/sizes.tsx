import { Home01 } from "@untitledui/icons"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
} from "@/components/ui/sidebar"

const sizes: Array<"sm" | "default" | "lg"> = ["sm", "default", "lg"]

function SidebarSizes() {
  return (
    <SidebarProvider className="min-h-0 max-w-sm rounded-xl border p-3">
      <SidebarMenu>
        {sizes.map((size) => (
          <SidebarMenuItem key={size}>
            <SidebarMenuButton size={size}>
              <Home01 aria-hidden="true" />
              <span>{size}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarProvider>
  )
}

export default SidebarSizes
