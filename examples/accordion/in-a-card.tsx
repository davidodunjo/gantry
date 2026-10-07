import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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

function AccordionInACard() {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Shipping and returns</CardTitle>
        <CardDescription>
          What to expect once an order leaves the warehouse.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["options"]}>
          {shipping.map((entry) => (
            <AccordionItem key={entry.value} value={entry.value}>
              <AccordionTrigger>{entry.question}</AccordionTrigger>
              <AccordionContent>{entry.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default AccordionInACard
