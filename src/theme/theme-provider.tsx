import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"

import { ThemeContext } from "./theme-context"

type Theme = "light" | "dark" | "system"

type ThemeProviderProps = {
  children: ReactNode
}

const STORAGE_KEY = "theme"
const DARK_QUERY = "(prefers-color-scheme: dark)"

function readStoredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)

  return stored === "light" || stored === "dark" ? stored : "system"
}

function isDark(theme: Theme) {
  return (
    theme === "dark" || (theme === "system" && matchMedia(DARK_QUERY).matches)
  )
}

function isTyping(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || target.closest("input, textarea, select"))
  )
}

function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props
  const [theme, setTheme] = useState<Theme>(readStoredTheme)

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = isDark(current) ? "light" : "dark"
      localStorage.setItem(STORAGE_KEY, next)

      return next
    })
  }, [])

  useEffect(() => {
    function apply() {
      document.documentElement.classList.toggle("dark", isDark(theme))
    }

    apply()

    if (theme !== "system") {
      return
    }

    const query = matchMedia(DARK_QUERY)
    query.addEventListener("change", apply)

    return () => query.removeEventListener("change", apply)
  }, [theme])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const hasModifier = event.metaKey || event.ctrlKey || event.altKey

      if (
        event.key.toLowerCase() !== "d" ||
        hasModifier ||
        isTyping(event.target)
      ) {
        return
      }

      toggleTheme()
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleTheme])

  const value = useMemo(() => ({ toggleTheme }), [toggleTheme])

  return <ThemeContext value={value}>{children}</ThemeContext>
}

export default ThemeProvider
