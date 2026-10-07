import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function AccordionRtl() {
  return (
    <div dir="rtl" className="w-full max-w-xl">
      <Accordion defaultValue={["options"]}>
        <AccordionItem value="options">
          <AccordionTrigger>ما هي خيارات الشحن لديكم؟</AccordionTrigger>
          <AccordionContent>
            الشحن العادي يستغرق من خمسة إلى سبعة أيام، والسريع من يومين إلى
            ثلاثة.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>ما هي سياسة الإرجاع؟</AccordionTrigger>
          <AccordionContent>
            يمكنك إرجاع أي قطعة غير مستعملة خلال ثلاثين يومًا.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default AccordionRtl
