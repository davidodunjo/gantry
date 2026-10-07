import { Textarea } from "@/components/ui/textarea"

function TextareaDisabledReadOnly() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <Textarea
        disabled
        aria-label="Disabled note"
        defaultValue="Closed on 2 March by Priya. This thread can no longer be edited."
      />
      <Textarea
        readOnly
        aria-label="Read only note"
        defaultValue="Closed on 2 March by Priya. This thread can no longer be edited."
      />
    </div>
  )
}

export default TextareaDisabledReadOnly
