import { File01, RefreshCw01, XClose } from "@untitledui/icons"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { ProgressBar } from "@/components/ui/progress"
import { Spinner } from "@/components/ui/spinner"

const thumbnail =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" fill="#e5e5e5"/><circle cx="26" cy="24" r="8" fill="#a3a3a3"/><path d="M0 60 24 36l16 16 12-12 28 28V80H0z" fill="#737373"/></svg>'
  )

function AttachmentDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Attachment>
        <AttachmentMedia>
          <File01 aria-hidden />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Q3-Board-Deck.pdf</AttachmentTitle>
          <AttachmentDescription>2.4 MB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment>
        <AttachmentMedia variant="image">
          <img src={thumbnail} alt="" />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Site-hero-final.png</AttachmentTitle>
          <AttachmentDescription>860 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="uploading">
        <AttachmentMedia>
          <Spinner />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>
            Customer-Segmentation-And-Retention-Analysis-Export-2026.csv
          </AttachmentTitle>
          <ProgressBar
            value={62}
            aria-label="Upload progress"
            className="mt-1.5"
          />
        </AttachmentContent>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia>
          <File01 aria-hidden />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>Vendor-Contract-Signed.pdf</AttachmentTitle>
          <AttachmentDescription>
            Upload failed. File exceeds the 25 MB limit for this project.
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Retry upload">
            <RefreshCw01 />
          </AttachmentAction>
          <AttachmentAction aria-label="Remove attachment">
            <XClose />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
    </div>
  )
}

export default AttachmentDemo
