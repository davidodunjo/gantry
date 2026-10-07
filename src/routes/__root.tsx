import { Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({ component: Root })

function Root() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Outlet />
    </main>
  )
}
