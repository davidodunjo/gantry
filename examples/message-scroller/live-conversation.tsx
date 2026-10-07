import { useState } from "react"

import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

const conversation = [
  "Are you around for a quick call?",
  "Sure, give me five minutes.",
  "The staging deploy just finished.",
  "Nice, I'll go check the numbers.",
  "Signups are up eight percent since launch.",
  "That's a good sign, let's watch it through the weekend.",
]

function MessageScrollerLiveConversation() {
  const [count, setCount] = useState(conversation.length)

  return (
    <div className="w-full space-y-4">
      <MessageScrollerProvider>
        <MessageScroller className="h-80 rounded-xl border">
          <MessageScrollerViewport aria-label="Conversation">
            <MessageScrollerContent className="p-4">
              {Array.from({ length: count }, (_, index) => (
                <MessageScrollerItem key={index} messageId={String(index)}>
                  <Bubble
                    align={index % 2 ? "end" : "start"}
                    variant={index % 2 ? "default" : "secondary"}
                  >
                    <BubbleContent>
                      {conversation[index % conversation.length]}
                    </BubbleContent>
                  </Bubble>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton direction="start" />
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Add message
      </Button>
    </div>
  )
}

export default MessageScrollerLiveConversation
