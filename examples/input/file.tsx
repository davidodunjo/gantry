import { Input } from "@/components/ui/input"

function InputFile() {
  return (
    <Input
      type="file"
      aria-label="Profile photo"
      accept="image/*"
      className="max-w-sm"
    />
  )
}

export default InputFile
