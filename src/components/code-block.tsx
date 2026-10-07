import { Check, Copy01 } from "@untitledui/icons"
import { Suspense, use, useState } from "react"

import { Button } from "@/components/ui/button"
import { highlight } from "@/docs/highlight"

type CodeBlockProps = {
  code: string
  lang: string
}

const CODE_CLASSES = "overflow-x-auto p-4 pr-14 font-mono text-[0.8125rem]/6"

function CodeBlock(props: CodeBlockProps) {
  const { code, lang } = props
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative rounded-xl border">
      <Suspense fallback={<pre className={CODE_CLASSES}>{code}</pre>}>
        <HighlightedCode code={code} lang={lang} />
      </Suspense>
      <Button
        variant="ghost"
        size="icon-xs"
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute top-2 right-2"
        onClick={handleCopy}
      >
        {copied ? <Check aria-hidden="true" /> : <Copy01 aria-hidden="true" />}
      </Button>
    </div>
  )
}

function HighlightedCode(props: CodeBlockProps) {
  const { code, lang } = props
  const html = use(highlight(code, lang))

  return (
    <div
      className="[&_pre]:overflow-x-auto [&_pre]:p-4 [&_pre]:pr-14 [&_pre]:font-mono [&_pre]:text-[0.8125rem]/6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default CodeBlock
