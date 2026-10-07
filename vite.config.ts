import mdx from "@mdx-js/rollup"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import remarkGfm from "remark-gfm"
import { defineConfig } from "vite"

function fromRoot(folder: string) {
  return path.resolve(import.meta.dirname, folder)
}

export default defineConfig({
  plugins: [
    tanstackRouter(),
    { enforce: "pre", ...mdx({ remarkPlugins: [remarkGfm] }) },
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      { find: "@/components/ui", replacement: fromRoot("registry/ui") },
      { find: "@/lib", replacement: fromRoot("registry/lib") },
      { find: "@", replacement: fromRoot("src") },
    ],
  },
})
