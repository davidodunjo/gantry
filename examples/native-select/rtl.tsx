import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

function NativeSelectRtl() {
  return (
    <div dir="rtl">
      <NativeSelect aria-label="المكتب" defaultValue="cairo">
        <NativeSelectOption value="cairo">القاهرة</NativeSelectOption>
        <NativeSelectOption value="amman">عمّان</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}

export default NativeSelectRtl
