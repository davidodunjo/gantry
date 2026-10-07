import { Avatar, AvatarCompanyIcon } from "@/components/ui/avatar"

const portrait =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="#e5e5e5"/><circle cx="80" cy="60" r="30" fill="#a3a3a3"/><ellipse cx="80" cy="152" rx="60" ry="55" fill="#737373"/></svg>'
  )

const company =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><rect width="24" height="24" fill="#171717"/><path d="m4 12 8-7 8 7-8 7z" fill="white"/></svg>'
  )

function AvatarBadges() {
  return (
    <>
      <Avatar
        size="lg"
        src={portrait}
        alt="Olivia Rhye, online"
        status="online"
      />
      <Avatar
        size="lg"
        src={portrait}
        alt="Phoenix Baker, offline"
        status="offline"
      />
      <Avatar size="lg" src={portrait} alt="Lana Steiner, verified" verified />
      <Avatar
        size="lg"
        src={portrait}
        alt="Drew Cano, at Layers Inc."
        badge={<AvatarCompanyIcon size="lg" src={company} alt="Layers Inc." />}
      />
      <Avatar
        size="lg"
        initials="DW"
        alt="Demi Wilkinson, 5 unread"
        count={5}
      />
    </>
  )
}

export default AvatarBadges
