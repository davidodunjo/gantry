import { createFileRoute } from "@tanstack/react-router"

import Page from "@/components/page"
import TextLink from "@/components/text-link"
import { components } from "@/docs/components"

export const Route = createFileRoute("/components/")({ component: Components })

function Components() {
  return (
    <Page title="Components">
      <nav
        aria-label="All components"
        className="group/links grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3"
      >
        {components.map(({ slug, title }, index) => (
          <TextLink
            key={slug}
            to="/components/$slug"
            params={{ slug }}
            label={title}
            index={Math.min(index, 6)}
            className="text-sm font-medium"
          />
        ))}
      </nav>
    </Page>
  )
}
