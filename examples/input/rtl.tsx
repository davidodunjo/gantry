import { Input } from "@/components/ui/input"

function InputRtl() {
  return (
    <div dir="rtl" className="w-full max-w-sm">
      <label
        htmlFor="input-rtl"
        className="flex flex-col gap-1.5 text-sm font-medium"
      >
        الاسم الكامل
        <Input id="input-rtl" placeholder="أدخل اسمك الكامل" />
      </label>
    </div>
  )
}

export default InputRtl
