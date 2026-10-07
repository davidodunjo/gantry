import { AvatarProfilePhoto } from "@/components/ui/avatar-profile-photo"

const portrait =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="#e5e5e5"/><circle cx="80" cy="60" r="30" fill="#a3a3a3"/><ellipse cx="80" cy="152" rx="60" ry="55" fill="#737373"/></svg>'
  )

function AvatarProfilePhotoExample() {
  return (
    <>
      <AvatarProfilePhoto size="lg" src={portrait} alt="Olivia Rhye" verified />
      <AvatarProfilePhoto
        size="md"
        initials="PB"
        alt="Phoenix Baker"
        status="online"
      />
      <AvatarProfilePhoto
        size="sm"
        alt="Photo failed to load"
        src="data:image/png;base64,invalid"
      />
    </>
  )
}

export default AvatarProfilePhotoExample
