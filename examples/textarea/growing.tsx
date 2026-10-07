import { Textarea } from "@/components/ui/textarea"

function TextareaGrowing() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <Textarea
        aria-label="Growing notes"
        placeholder="Add lines here and watch the box get taller…"
        className="resize-none"
      />
      <Textarea
        rows={4}
        aria-label="Fixed notes"
        placeholder="Add lines here and this one scrolls instead…"
        className="field-sizing-fixed min-h-0 resize-none"
      />
    </div>
  )
}

export default TextareaGrowing
