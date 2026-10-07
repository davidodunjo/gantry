import { Textarea } from "@/components/ui/textarea"

function TextareaInvalid() {
  return (
    <div className="flex w-full max-w-md flex-col gap-1.5">
      <label htmlFor="textarea-invalid" className="text-sm font-medium">
        What went wrong?
      </label>
      <Textarea
        id="textarea-invalid"
        defaultValue="Broken."
        aria-invalid="true"
        aria-describedby="textarea-invalid-error"
      />
      <p id="textarea-invalid-error" className="text-sm text-destructive">
        Give us at least a sentence so support can reproduce it.
      </p>
    </div>
  )
}

export default TextareaInvalid
