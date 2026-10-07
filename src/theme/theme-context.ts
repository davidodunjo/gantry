import { createContext } from "react"

export type ThemeContextValue = {
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined
)
