import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageGroup,
} from "@/components/ui/message"

function MessageDeliveryStatus() {
  return (
    <MessageGroup className="w-full max-w-sm">
      <Message align="end">
        <MessageContent>
          <Bubble align="end">
            <BubbleContent>
              Sent the invoice, let me know if anything's missing.
            </BubbleContent>
          </Bubble>
          <MessageFooter>Seen 10:34</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}

export default MessageDeliveryStatus
