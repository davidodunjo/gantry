import { Avatar } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/components/ui/message"

function MessageDemo() {
  return (
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
  )
}

export default MessageDemo
