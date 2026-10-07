import { User01 } from "@untitledui/icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

function AvatarComposition() {
  return (
    <Avatar>
      <AvatarImage src="data:image/png;base64,invalid" alt="Olivia Rhye" />
      <AvatarFallback>OR</AvatarFallback>
      <AvatarBadge aria-label="Team member">
        <User01 aria-hidden className="size-2" />
      </AvatarBadge>
    </Avatar>
  )
}

export default AvatarComposition
