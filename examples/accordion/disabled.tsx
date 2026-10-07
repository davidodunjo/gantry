import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function AccordionDisabled() {
  return (
    <Accordion className="max-w-xl" defaultValue={["options"]}>
      <AccordionItem value="options">
        <AccordionTrigger>What are your shipping options?</AccordionTrigger>
        <AccordionContent>
          Standard arrives in five to seven days, express in two to three, and
          overnight before noon the next working day. Orders over £60 ship free.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="enterprise" disabled>
        <AccordionTrigger>Enterprise delivery terms</AccordionTrigger>
        <AccordionContent>
          Available once an account manager is assigned.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How do I reach someone?</AccordionTrigger>
        <AccordionContent>
          Support answers from nine to six on weekdays. Replies usually land
          within a few hours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionDisabled
