import { type ReactNode } from "react"

type PageProps = {
  title: string
  description?: string
  action?: ReactNode
  children: ReactNode
}

function Page(props: PageProps) {
  const { title, description, action, children } = props

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-240 flex-col gap-8 px-(--gutter) pt-[calc(var(--header-height)+2.5rem)] pb-24">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-base font-semibold">{title}</h1>
          {action}
        </div>
        {description && (
          <p className="max-w-prose text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </main>
  )
}

export default Page
