import { Input } from "@/components/ui/input"

function InputDisabledReadOnly() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <label
        htmlFor="input-disabled"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        Disabled
        <Input id="input-disabled" disabled defaultValue="ada@basecamp.com" />
      </label>
      <label
        htmlFor="input-read-only"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        Read only
        <Input id="input-read-only" readOnly defaultValue="ada@basecamp.com" />
      </label>
    </div>
  )
}

export default InputDisabledReadOnly
