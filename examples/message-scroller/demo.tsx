import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

const messages = [
  "Are you around for a quick call?",
  "Sure, give me five minutes.",
  "The staging deploy just finished.",
  "Nice, I'll go check the numbers.",
]

function MessageScrollerDemo() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-64 w-full rounded-xl border">
        <MessageScrollerViewport aria-label="Conversation">
          <MessageScrollerContent className="p-4">
            {messages.map((message, index) => (
              <MessageScrollerItem key={message} messageId={String(index)}>
                <Bubble
                  align={index % 2 ? "end" : "start"}
                  variant={index % 2 ? "default" : "secondary"}
                >
                  <BubbleContent>{message}</BubbleContent>
                </Bubble>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  )
}

export default MessageScrollerDemo
