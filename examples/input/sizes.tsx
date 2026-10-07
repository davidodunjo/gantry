import { Input } from "@/components/ui/input"

function InputSizes() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-3">
      <label
        htmlFor="input-size-sm"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        Small
        <Input id="input-size-sm" controlSize="sm" placeholder="Ada Lovelace" />
      </label>
      <label
        htmlFor="input-size-default"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        Default
        <Input id="input-size-default" placeholder="Ada Lovelace" />
      </label>
      <label
        htmlFor="input-size-lg"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        Large
        <Input id="input-size-lg" controlSize="lg" placeholder="Ada Lovelace" />
      </label>
    </div>
  )
}

export default InputSizes
