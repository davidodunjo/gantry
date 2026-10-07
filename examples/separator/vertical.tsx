import { Separator } from "@/components/ui/separator"

function SeparatorVertical() {
  return (
    <div className="flex h-5 items-center gap-4 text-sm">
      Docs
      <Separator orientation="vertical" />
      Changelog
      <Separator orientation="vertical" />
      Support
    </div>
  )
}

export default SeparatorVertical
