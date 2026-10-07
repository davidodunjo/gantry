import { Avatar } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"

function MessageConversation() {
  return (
    <MessageGroup className="w-full">
      <Message>
        <MessageAvatar>
          <Avatar size="sm" initials="OR" alt="Olivia Rhye" />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>
            <span>Olivia Rhye</span>
            <time className="text-xs font-normal">10:30</time>
          </MessageHeader>
          <Bubble variant="secondary">
            <BubbleContent>The latest designs are ready.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <MessageHeader>
            <span>You</span>
            <time className="text-xs font-normal">10:32</time>
          </MessageHeader>
          <Bubble align="end" variant="outline">
            <BubbleContent>Thanks, reviewing them now.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}

export default MessageConversation
