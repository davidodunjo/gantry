import { useState } from "react"
import { File01, XClose } from "@untitledui/icons"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Button } from "@/components/ui/button"

const thumbnail =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" fill="#e5e5e5"/><circle cx="26" cy="24" r="8" fill="#a3a3a3"/><path d="M0 60 24 36l16 16 12-12 28 28V80H0z" fill="#737373"/></svg>'
  )

const initialFiles = ["brief", "logo", "invoice"]

function AttachmentInAGroup() {
  const [files, setFiles] = useState(initialFiles)

  function handleRemove(file: string) {
    setFiles(files.filter((entry) => entry !== file))
  }

  function handleRestore() {
    setFiles(initialFiles)
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <AttachmentGroup>
        {files.includes("brief") && (
          <Attachment size="sm">
            <AttachmentMedia>
              <File01 aria-hidden />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Client-brief.pdf</AttachmentTitle>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction
                aria-label="Remove Client-brief.pdf"
                onClick={() => handleRemove("brief")}
              >
                <XClose />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        )}
        {files.includes("logo") && (
          <Attachment size="sm">
            <AttachmentMedia variant="image">
              <img src={thumbnail} alt="" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Logo-final.png</AttachmentTitle>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction
                aria-label="Remove Logo-final.png"
                onClick={() => handleRemove("logo")}
              >
                <XClose />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        )}
        {files.includes("invoice") && (
          <Attachment size="sm">
            <AttachmentMedia>
              <File01 aria-hidden />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>Invoice-0042.pdf</AttachmentTitle>
            </AttachmentContent>
            <AttachmentActions>
              <AttachmentAction
                aria-label="Remove Invoice-0042.pdf"
                onClick={() => handleRemove("invoice")}
              >
                <XClose />
              </AttachmentAction>
            </AttachmentActions>
          </Attachment>
        )}
      </AttachmentGroup>
      {files.length === 0 && (
        <Button
          variant="outline"
          size="sm"
          className="self-start"
          onClick={handleRestore}
        >
          Restore attachments
        </Button>
      )}
    </div>
  )
}

export default AttachmentInAGroup
