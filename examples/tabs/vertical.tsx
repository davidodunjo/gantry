import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function TabsVertical() {
  return (
    <Tabs orientation="vertical" defaultValue="account">
      <TabsList variant="line">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Your account settings.</TabsContent>
      <TabsContent value="security">Your security settings.</TabsContent>
    </Tabs>
  )
}

export default TabsVertical
