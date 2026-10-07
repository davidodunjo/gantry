import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function TabsMedium() {
  return (
    <Tabs defaultValue="a">
      <TabsList size="md">
        <TabsTrigger value="a">Overview</TabsTrigger>
        <TabsTrigger value="b">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="a">Medium tabs use 16px labels.</TabsContent>
      <TabsContent value="b">There is no recent activity.</TabsContent>
    </Tabs>
  )
}

export default TabsMedium
