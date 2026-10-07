import { Textarea } from "@/components/ui/textarea"

function TextareaBasic() {
  return (
    <Textarea
      aria-label="Message"
      placeholder="Tell us what happened…"
      className="max-w-md"
    />
  )
}

export default TextareaBasic
