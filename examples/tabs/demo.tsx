import { Home01, Users01 } from "@untitledui/icons"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="default">
        <TabsTrigger value="overview">
          <Home01 aria-hidden="true" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="team">
          <Users01 aria-hidden="true" />
          Team <span className="rounded-full bg-muted px-1.5 text-xs">8</span>
        </TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Billing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Your workspace overview.</TabsContent>
      <TabsContent value="team">Manage the people on your team.</TabsContent>
    </Tabs>
  )
}

export default TabsDemo
