import { createFileRoute, notFound } from "@tanstack/react-router"
import { Suspense, createElement } from "react"

import { mdxComponents } from "@/components/mdx-components"
import Page from "@/components/page"
import { findComponent, getComponentPage } from "@/docs/components"

export const Route = createFileRoute("/components/$slug")({
  loader: ({ params }) => {
    const component = findComponent(params.slug)

    if (!component) {
      throw notFound()
    }

    return component
  },
  component: ComponentPage,
})

function ComponentPage() {
  const { slug, title, description } = Route.useLoaderData()
  const Content = getComponentPage(slug)

  return (
    <Page title={title} description={description}>
      <div className="flex flex-col gap-4">
        <Suspense fallback={null}>
          {createElement(Content, { components: mdxComponents })}
        </Suspense>
      </div>
    </Page>
  )
}
