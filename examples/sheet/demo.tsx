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

function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Edit project
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit project</SheetTitle>
          <SheetDescription>Update your workspace details.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-6">
          <Label htmlFor="sheet-demo-name">Project name</Label>
          <Input id="sheet-demo-name" defaultValue="Gantry" />
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>Save changes</SheetClose>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetDemo
