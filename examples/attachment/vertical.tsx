import { File01 } from "@untitledui/icons"

import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

const thumbnail =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" fill="#e5e5e5"/><circle cx="26" cy="24" r="8" fill="#a3a3a3"/><path d="M0 60 24 36l16 16 12-12 28 28V80H0z" fill="#737373"/></svg>'
  )

function AttachmentVertical() {
  return (
    <>
      <Attachment orientation="vertical">
        <AttachmentMedia>
          <File01 aria-hidden />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Design-system.pdf</AttachmentTitle>
          <AttachmentDescription>1.2 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment orientation="vertical">
        <AttachmentMedia variant="image">
          <img src={thumbnail} alt="" />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Cover-photo.jpg</AttachmentTitle>
          <AttachmentDescription>3.1 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </>
  )
}

export default AttachmentVertical
