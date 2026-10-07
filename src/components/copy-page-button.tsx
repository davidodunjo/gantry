import { Check, Copy01 } from "@untitledui/icons"
import { useState } from "react"

import { Button } from "@/components/ui/button"

type CopyPageButtonProps = {
  slug: string
}

async function fetchMarkdown(slug: string) {
  const response = await fetch(`/docs/components/${slug}.md`)

  if (!response.ok) {
    throw new Error(
      `Missing docs/components/${slug}.md; run bun run docs:build`
    )
  }

  return new Blob([await response.text()], { type: "text/plain" })
}

function CopyPageButton(props: CopyPageButtonProps) {
  const { slug } = props
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.write([
      new ClipboardItem({ "text/plain": fetchMarkdown(slug) }),
    ])
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Button variant="outline" size="xs" onClick={handleCopy}>
      {copied ? <Check aria-hidden="true" /> : <Copy01 aria-hidden="true" />}
      {copied ? "Copied" : "Copy page"}
    </Button>
  )
}

export default CopyPageButton
