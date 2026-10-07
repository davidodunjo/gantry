import { Input } from "@/components/ui/input"

function InputTypes() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <label
        htmlFor="input-type-email"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        Email
        <Input
          id="input-type-email"
          type="email"
          autoComplete="email"
          placeholder="ada@basecamp.com"
        />
      </label>
      <label
        htmlFor="input-type-password"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        Password
        <Input
          id="input-type-password"
          type="password"
          autoComplete="new-password"
          defaultValue="correct horse battery"
        />
      </label>
      <label
        htmlFor="input-type-search"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        Search
        <Input id="input-type-search" type="search" defaultValue="invoices" />
      </label>
      <label
        htmlFor="input-type-date"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        Start date
        <Input id="input-type-date" type="date" defaultValue="2026-03-02" />
      </label>
    </div>
  )
}

export default InputTypes
