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
      <fieldset className="flex gap-4">
        <legend className="sr-only">View</legend>
        {VIEWS.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={view === option}
            className={cn(
              "-m-2 cursor-pointer p-2 text-sm font-semibold text-muted-foreground capitalize transition-colors hover:text-foreground focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4",
              view === option && "text-foreground"
            )}
            onClick={() => setView(option)}
          >
            {option}
          </button>
        ))}
      </fieldset>
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
