import { Textarea } from "@/components/ui/textarea"

function TextareaRtl() {
  return (
    <div dir="rtl" className="flex w-full max-w-md flex-col gap-1.5">
      <label htmlFor="textarea-rtl" className="text-sm font-medium">
        الرسالة
      </label>
      <Textarea id="textarea-rtl" placeholder="اكتب ما حدث بالتفصيل…" />
    </div>
  )
}

export default TextareaRtl
