import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

function DrawerSnapPoints() {
  return (
    <Drawer snapPoints={[0.4, 0.8]} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open snapping drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Activity feed</DrawerTitle>
          <DrawerDescription>
            Drag the handle to expand the drawer.
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto p-6">
          {Array.from({ length: 15 }, (_, i) => (
            <p key={i} className="border-b py-3 text-sm">
              Project update {i + 1}
            </p>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerSnapPoints
