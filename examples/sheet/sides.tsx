import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function SheetSides() {
  return (
    <>
      {(["right", "left", "top", "bottom"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" />}>
            {side}
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit project</SheetTitle>
              <SheetDescription>
                Update your workspace details.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2 px-6">
              <Label htmlFor={`sheet-${side}`}>Project name</Label>
              <Input id={`sheet-${side}`} defaultValue="Gantry" />
            </div>
            <SheetFooter>
              <SheetClose render={<Button />}>Save changes</SheetClose>
              <SheetClose render={<Button variant="outline" />}>
                Cancel
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </>
  )
}

export default SheetSides
