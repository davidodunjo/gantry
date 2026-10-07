import type { MDXComponents } from "mdx/types"
import { type ComponentProps, isValidElement } from "react"

import CodeBlock from "@/components/code-block"
import ComponentPreview from "@/components/component-preview"

type FencedCodeProps = {
  className?: string
  children?: string
}

function FencedCode(props: ComponentProps<"pre">) {
  const { children } = props

  if (!isValidElement<FencedCodeProps>(children)) {
    throw new Error("Expected a code element inside a fenced block")
  }

  const { className = "", children: code = "" } = children.props
  const lang = className.replace("language-", "")

  return <CodeBlock code={code.trimEnd()} lang={lang} />
}

function Table(props: ComponentProps<"table">) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm" {...props} />
    </div>
  )
}

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...rest }) => (
    <h2 className="mt-8 text-sm font-medium" {...rest}>
      {children}
    </h2>
  ),
  p: (props) => (
    <p className="max-w-prose text-sm text-muted-foreground" {...props} />
  ),
  a: ({ children, ...rest }) => (
    <a className="text-foreground underline underline-offset-4" {...rest}>
      {children}
    </a>
  ),
  code: (props) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.8125rem] text-foreground"
      {...props}
    />
  ),
  pre: FencedCode,
  table: Table,
  th: (props) => <th className="border-b py-2 pr-6 font-medium" {...props} />,
  td: (props) => (
    <td
      className="border-b py-2 pr-6 align-top text-muted-foreground"
      {...props}
    />
  ),
  ComponentPreview,
}
