import { cn } from "cn"
import { Suspense, createElement, use, useState } from "react"

import CodeBlock from "@/components/code-block"
import { getExampleComponent, getExampleSource } from "@/docs/examples"

type View = "preview" | "code"

type ComponentPreviewProps = {
  name: string
}

const VIEWS: View[] = ["preview", "code"]

function ComponentPreview(props: ComponentPreviewProps) {
  const { name } = props
  const [view, setView] = useState<View>("preview")
  const Example = getExampleComponent(name)

  return (
    <div className="flex flex-col gap-3">
      <div role="tablist" aria-label="View" className="flex gap-4">
        {VIEWS.map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={view === option}
            className={cn(
              "relative cursor-pointer pb-1.5 text-sm font-semibold text-muted-foreground capitalize transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-foreground after:opacity-0 after:transition-opacity hover:text-foreground focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4",
              view === option && "text-foreground after:opacity-100"
            )}
            onClick={() => setView(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {view === "preview" ? (
        <div className="flex min-h-32 flex-wrap items-center justify-center gap-4 rounded-xl border p-8">
          <Suspense fallback={null}>{createElement(Example)}</Suspense>
        </div>
      ) : (
        <Suspense fallback={null}>
          <ExampleCode name={name} />
        </Suspense>
      )}
    </div>
  )
}

function ExampleCode(props: ComponentPreviewProps) {
  const { name } = props
  const source = use(getExampleSource(name))

  return <CodeBlock code={source.trimEnd()} lang="tsx" />
}

export default ComponentPreview
