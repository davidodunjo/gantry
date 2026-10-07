import { createFileRoute } from "@tanstack/react-router"

import Page from "@/components/page"

export const Route = createFileRoute("/blocks")({ component: Blocks })

function Blocks() {
  return (
    <Page title="Blocks">
      <p className="text-sm text-muted-foreground">No blocks added yet.</p>
    </Page>
  )
}
