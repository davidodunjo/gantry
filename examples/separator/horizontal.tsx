import { Separator } from "@/components/ui/separator"

function SeparatorHorizontal() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1">
        <p className="font-medium">Olivia Rhye</p>
        <p className="text-muted-foreground">Product designer at Layers</p>
      </div>
      <Separator />
      <p className="text-muted-foreground">London, joined March 2024</p>
    </div>
  )
}

export default SeparatorHorizontal
