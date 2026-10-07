import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

import registry from "../registry.json"

const PREVIEW_PATTERN = /<ComponentPreview\s+name="([^"]+)"\s*\/>/g
const DOCS_DIR = join("public", "docs", "components")

function exampleSource(slug: string, name: string) {
  if (!name.startsWith(`${slug}-`)) {
    throw new Error(`Example "${name}" must start with "${slug}-"`)
  }

  const example = name.slice(slug.length + 1)

  return readFileSync(
    join("examples", slug, `${example}.tsx`),
    "utf8"
  ).trimEnd()
}

function buildPage(item: (typeof registry.items)[number]) {
  const mdx = readFileSync(
    join("content", "components", `${item.name}.mdx`),
    "utf8"
  )
  const body = mdx.replace(
    PREVIEW_PATTERN,
    (_, name: string) => `\`\`\`tsx\n${exampleSource(item.name, name)}\n\`\`\``
  )

  return `# ${item.title}\n\n${item.description}\n\n${body}`
}

const items = registry.items
  .filter((item) => item.type === "registry:ui")
  .sort((a, b) => a.title.localeCompare(b.title))

mkdirSync(DOCS_DIR, { recursive: true })

for (const item of items) {
  writeFileSync(join(DOCS_DIR, `${item.name}.md`), buildPage(item))
}

const index = items
  .map(
    (item) =>
      `- [${item.title}](/docs/components/${item.name}.md): ${item.description}`
  )
  .join("\n")

writeFileSync(
  join("public", "llms.txt"),
  `# Gantry\n\n> A registry of React components for apps that use shadcn, built on Base UI and styled with Tailwind classes.\n\n## Components\n\n${index}\n`
)
