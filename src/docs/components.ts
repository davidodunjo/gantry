import { type ComponentType, lazy } from "react"
import type { MDXProps } from "mdx/types"

import registry from "../../registry.json"

type MdxModule = { default: ComponentType<MDXProps> }

const PAGE_PATTERN = /^\/content\/components\/([^/]+)\.mdx$/

const pages = new Map(
  Object.entries(import.meta.glob<MdxModule>("/content/components/*.mdx")).map(
    ([path, load]) => [PAGE_PATTERN.exec(path)?.[1], lazy(load)]
  )
)

export const components = registry.items
  .filter((item) => item.type === "registry:ui")
  .map(({ name, title, description }) => ({ slug: name, title, description }))
  .sort((a, b) => a.title.localeCompare(b.title))

export function findComponent(slug: string) {
  return components.find((component) => component.slug === slug)
}

export function getComponentPage(slug: string) {
  const page = pages.get(slug)

  if (!page) {
    throw new Error(`Missing content/components/${slug}.mdx`)
  }

  return page
}
