import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"

const variants = [
  { value: "default", copy: "Your refund has been approved." },
  { value: "secondary", copy: "Thanks for the update." },
  { value: "muted", copy: "This conversation is now closed." },
  { value: "tinted", copy: "Reminder: your trial ends in three days." },
  { value: "outline", copy: "Could you resend the attachment?" },
  { value: "ghost", copy: "Marked as read" },
  { value: "destructive", copy: "This message failed to send. Tap to retry." },
] as const

function BubbleVariants() {
  return (
    <BubbleGroup className="w-full">
      {variants.map(({ value, copy }) => (
        <Bubble key={value} variant={value}>
          <BubbleContent>{copy}</BubbleContent>
        </Bubble>
      ))}
    </BubbleGroup>
  )
}

export default BubbleVariants
