import { ArrowRight, Plus } from "@untitledui/icons"

import { Button } from "@/components/ui/button"

function ButtonRtl() {
  return (
    <div
      dir="rtl"
      className="flex w-full flex-wrap items-center justify-center gap-3"
    >
      <Button>
        <Plus />
        دعوة زميل
      </Button>
      <Button variant="outline">
        مراجعة التغييرات
        <ArrowRight className="rtl:rotate-180" />
      </Button>
      <Button variant="secondary" loading showTextWhileLoading>
        جارٍ الحفظ
      </Button>
    </div>
  )
}

export default ButtonRtl
