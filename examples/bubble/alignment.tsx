import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"

function BubbleAlignment() {
  return (
    <BubbleGroup className="w-full">
      <Bubble variant="secondary">
        <BubbleContent>Can you review this?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Looks good to me.</BubbleContent>
        <BubbleReactions>👍 2</BubbleReactions>
      </Bubble>
    </BubbleGroup>
  )
}

export default BubbleAlignment
