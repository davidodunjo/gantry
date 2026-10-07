import { Cloud01 } from "@untitledui/icons"

import { Badge, BadgeCount, BadgeImage } from "@/components/ui/badge"

const avatar = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="#e5e5e5"/><circle cx="16" cy="12" r="6" fill="#737373"/><path d="M4 32c0-15 24-15 24 0" fill="#737373"/></svg>')}`
const flag = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice"><clipPath id="t"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><path fill="#012169" d="M0 0h60v30H0z"/><path stroke="#fff" stroke-width="6" d="m0 0 60 30m0-30L0 30"/><path stroke="#c8102e" stroke-width="4" clip-path="url(#t)" d="m0 0 60 30m0-30L0 30"/><path stroke="#fff" stroke-width="10" d="M30 0v30M0 15h60"/><path stroke="#c8102e" stroke-width="6" d="M30 0v30M0 15h60"/></svg>')}`

function BadgeContent() {
  return (
    <>
      <Badge variant="outline">
        <BadgeImage src={avatar} /> Olivia Rhye
      </Badge>
      <Badge variant="outline">
        <BadgeImage src={flag} /> London warehouse
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
