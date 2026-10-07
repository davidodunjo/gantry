import { Input } from "@/components/ui/input"

function InputInvalid() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <label htmlFor="input-invalid" className="text-sm font-medium">
        Email
      </label>
      <Input
        id="input-invalid"
        type="email"
        defaultValue="ada@basecamp"
        aria-invalid="true"
        aria-describedby="input-invalid-error"
      />
      <p id="input-invalid-error" className="text-sm text-destructive">
        Add a domain ending, such as .com.
      </p>
    </div>
  )
}

export default InputInvalid
