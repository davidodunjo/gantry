import { createHighlighterCore } from "shiki/core"
import { createJavaScriptRegexEngine } from "shiki/engine/javascript"

const highlighter = createHighlighterCore({
  themes: [
    import("shiki/themes/github-light.mjs"),
    import("shiki/themes/github-dark.mjs"),
  ],
  langs: [import("shiki/langs/tsx.mjs"), import("shiki/langs/bash.mjs")],
  engine: createJavaScriptRegexEngine(),
})

const highlighted = new Map<string, Promise<string>>()

export function highlight(code: string, lang: string) {
  const key = `${lang}:${code}`
  const cached = highlighted.get(key)

  if (cached) {
    return cached
  }

  const html = highlighter.then((core) =>
    core.codeToHtml(code, {
      lang,
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    })
  )
  highlighted.set(key, html)

  return html
}
