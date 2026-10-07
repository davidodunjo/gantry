import { useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"

const shipping = [
  {
    value: "options",
    question: "What are your shipping options?",
    answer:
      "Standard arrives in five to seven days, express in two to three, and overnight before noon the next working day. Orders over £60 ship free.",
  },
  {
    value: "returns",
    question: "What is your return policy?",
    answer:
      "Anything unworn can go back within thirty days. We email a prepaid label as soon as you start the return.",
  },
  {
    value: "support",
    question: "How do I reach someone?",
    answer:
      "Support answers from nine to six on weekdays. Replies usually land within a few hours.",
  },
]

function AccordionControlled() {
  const [open, setOpen] = useState<string[]>(["options"])

  function handleExpandAll() {
    setOpen(shipping.map((entry) => entry.value))
  }

  function handleCollapseAll() {
    setOpen([])
  }

  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={handleExpandAll}>
          Expand all
        </Button>
        <Button size="sm" variant="outline" onClick={handleCollapseAll}>
          Collapse all
        </Button>
      </div>
      <Accordion multiple value={open} onValueChange={setOpen}>
        {shipping.map((entry) => (
          <AccordionItem key={entry.value} value={entry.value}>
            <AccordionTrigger>{entry.question}</AccordionTrigger>
            <AccordionContent>{entry.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default AccordionControlled
