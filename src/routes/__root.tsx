import { Outlet, createRootRoute } from "@tanstack/react-router"

import AppHeader from "@/components/app-header"
import Page from "@/components/page"
import ThemeProvider from "@/theme/theme-provider"

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
})

function Root() {
  return (
    <ThemeProvider>
      <AppHeader />
      <Outlet />
    </ThemeProvider>
  )
}

function NotFound() {
  return (
    <Page title="Page not found">
      <p className="text-sm text-muted-foreground">This page does not exist.</p>
    </Page>
  )
}
