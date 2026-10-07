import { Link, type LinkProps, useLocation } from "@tanstack/react-router"
import { ArrowLeft, Contrast02 } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/theme/use-theme"

function parentOf(pathname: string) {
  return (pathname.replace(/\/[^/]+$/, "") || "/") as LinkProps["to"]
}

function AppHeader() {
  const { toggleTheme } = useTheme()
  const { pathname } = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-(--header-height) bg-background/90 backdrop-blur-md backdrop-saturate-150">
      <div className="flex h-full items-center px-6">
        {pathname !== "/" && (
          <Link
            to={parentOf(pathname)}
            className="-m-2 flex items-center gap-1.5 p-2 text-sm font-semibold whitespace-nowrap text-muted-foreground focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Return
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle light and dark theme"
          className="-mr-2 ml-auto"
          onClick={toggleTheme}
        >
          <Contrast02 aria-hidden="true" />
        </Button>
      </div>
    </header>
  )
}

export default AppHeader
