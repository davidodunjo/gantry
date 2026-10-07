import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

function fromRoot(folder: string) {
  return path.resolve(import.meta.dirname, folder)
}

export default defineConfig({
  plugins: [tanstackRouter(), react(), tailwindcss()],
  resolve: {
    alias: [
      { find: "@/components/ui", replacement: fromRoot("registry/ui") },
      { find: "@/lib", replacement: fromRoot("registry/lib") },
      { find: "@", replacement: fromRoot("src") },
    ],
  },
})
