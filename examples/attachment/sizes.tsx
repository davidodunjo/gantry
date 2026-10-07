import { File01 } from "@untitledui/icons"

import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

const sizes = ["xs", "sm", "default"] as const

function AttachmentSizes() {
  return (
    <>
      {sizes.map((size) => (
        <Attachment size={size} key={size}>
          <AttachmentMedia>
            <File01 aria-hidden />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>Report.pdf</AttachmentTitle>
            <AttachmentDescription>{size}</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </>
  )
}

export default AttachmentSizes
