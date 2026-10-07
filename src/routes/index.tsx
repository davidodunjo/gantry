import { createFileRoute } from "@tanstack/react-router"

import TextLink from "@/components/text-link"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-6 py-16">
      <nav aria-label="Gantry" className="group/links flex gap-8">
        <TextLink to="/components" label="Components" index={0} />
        <TextLink to="/blocks" label="Blocks" index={1} />
      </nav>
    </main>
  )
}
