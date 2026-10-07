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

function DrawerSwipeDirection() {
  return (
    <>
      {(["down", "right", "left", "up"] as const).map((swipeDirection) => (
        <Drawer
          key={swipeDirection}
          swipeDirection={swipeDirection}
          showSwipeHandle
        >
          <DrawerTrigger render={<Button variant="outline" />}>
            {swipeDirection}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Project activity</DrawerTitle>
              <DrawerDescription>
                Swipe to dismiss or use the close button.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-6 text-sm">Your workspace is up to date.</div>
            <DrawerFooter>
              <DrawerClose render={<Button variant="outline" />}>
                Close
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </>
  )
}

export default DrawerSwipeDirection
