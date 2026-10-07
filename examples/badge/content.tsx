import { Cloud01 } from "@untitledui/icons"

import { Badge, BadgeCount, BadgeImage } from "@/components/ui/badge"

const avatar = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="#e5e5e5"/><circle cx="16" cy="12" r="6" fill="#737373"/><path d="M4 32c0-15 24-15 24 0" fill="#737373"/></svg>')}`
const flag = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#008751" d="M0 0h24v24H0z"/><path fill="#fff" d="M8 0h8v24H8z"/></svg>')}`

function BadgeContent() {
  return (
    <>
      <Badge variant="outline">
        <BadgeImage src={avatar} /> Olivia Rhye
      </Badge>
      <Badge variant="outline">
        <BadgeImage src={flag} /> Lagos warehouse
      </Badge>
      <Badge variant="secondary">
        <Cloud01 aria-hidden /> Backed up
      </Badge>
      <Badge variant="secondary">
        Inbox <BadgeCount>12</BadgeCount>
      </Badge>
    </>
  )
}

export default BadgeContent
