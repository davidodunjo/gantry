# Gantry

Gantry is a registry of React components for apps that use shadcn. Each component is built on Base UI and styled with Tailwind classes only. You install it with the shadcn CLI, the source is copied into your project, and from then on the code is yours to change.

## Install a component

Your app needs shadcn set up first, which means a `components.json` and Tailwind CSS v4. If you don't have that yet, run `bunx shadcn@latest init` in your app before continuing.

Add the Gantry registry to your `components.json`:

```json
"registries": {
  "@gantry": "https://gantry.ronaodunjo.workers.dev/r/{name}.json"
}
```

Then add a component:

```bash
bunx shadcn@latest add @gantry/button
```

This copies `button.tsx` into your `components/ui` folder and installs `@base-ui/react` and `class-variance-authority`. It also adds `cn` to `lib/utils` if your project doesn't have it. Components use the standard shadcn tokens (`--primary`, `--border` and the rest), so they pick up your existing theme.

[registry.json](registry.json) lists every component, and each one has a page on the site.

## Setup

To work on Gantry itself, install [Bun](https://bun.sh), then install dependencies:

```bash
bun install
```

## Development

```bash
bun dev
```

This starts the preview site at http://localhost:3000.

Component source lives in `registry/ui`, and each component needs an entry in `registry.json`. Inside a component, import from `@/components/ui/...` and `@/lib/utils`. Here those paths resolve to `registry/`, and in a user's app the CLI rewrites them to that app's folders.

## Checks

```bash
bun check
```

```bash
bun run build
```

The build writes the registry JSON to `public/r` and the preview site to `dist`. Both are git-ignored.

## License

MIT
