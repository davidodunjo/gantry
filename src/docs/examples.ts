import { type ComponentType, lazy } from "react"

type ExampleModule = { default: ComponentType }

const FILE_PATTERN = /^\/examples\/([^/]+)\/([^/]+)\.tsx$/

const loadSources = import.meta.glob<string>("/examples/*/*.tsx", {
  query: "?raw",
  import: "default",
})

const examples = new Map(
  Object.entries(import.meta.glob<ExampleModule>("/examples/*/*.tsx")).map(
    ([path, load]) => {
      const [, slug, example] = FILE_PATTERN.exec(path) ?? []

      return [
        `${slug}-${example}`,
        { Component: lazy(load), loadSource: loadSources[path] },
      ]
    }
  )
)

const sources = new Map<string, Promise<string>>()

function getExample(name: string) {
  const example = examples.get(name)

  if (!example) {
    throw new Error(`Unknown example "${name}"`)
  }

  return example
}

export function getExampleComponent(name: string) {
  return getExample(name).Component
}

export function getExampleSource(name: string) {
  const cached = sources.get(name)

  if (cached) {
    return cached
  }

  const source = getExample(name).loadSource()
  sources.set(name, source)

  return source
}
