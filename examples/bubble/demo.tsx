import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"

function BubbleDemo() {
  return (
    <BubbleGroup className="w-full">
      <Bubble variant="secondary">
        <BubbleContent>Can you review this?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Looks good to me.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}

export default BubbleDemo
