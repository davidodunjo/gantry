import type { HTMLAttributes } from "react"

import { BoxIllustration } from "@/components/ui/illustration-box"
import { CloudIllustration } from "@/components/ui/illustration-cloud"
import { CreditCardIllustration } from "@/components/ui/illustration-credit-card"
import { DocumentsIllustration } from "@/components/ui/illustration-documents"

const illustrations = {
  box: BoxIllustration,
  cloud: CloudIllustration,
  "credit-card": CreditCardIllustration,
  documents: DocumentsIllustration,
}

type IllustrationProps = HTMLAttributes<HTMLDivElement> & {
  type: keyof typeof illustrations
  size?: "sm" | "md" | "lg"
  svgClassName?: string
  childrenClassName?: string
}

function Illustration(props: IllustrationProps) {
  const { type, ...rest } = props
  const Component = illustrations[type]

  return <Component {...rest} />
}

export {
  Illustration,
  BoxIllustration,
  CloudIllustration,
  CreditCardIllustration,
  DocumentsIllustration,
}
export type { IllustrationProps }
