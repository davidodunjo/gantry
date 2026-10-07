import { createFileRoute } from "@tanstack/react-router"
import { type ReactNode } from "react"

import { Button, type ButtonProps } from "@/components/ui/button"

export const Route = createFileRoute("/")({ component: Home })

const variants: NonNullable<ButtonProps["variant"]>[] = [
  "default",
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "destructive-outline",
  "destructive-ghost",
  "link",
  "link-muted",
  "destructive-link",
]

const sizes: NonNullable<ButtonProps["size"]>[] = [
  "xs",
  "sm",
  "default",
  "lg",
  "xl",
]

const iconSizes: NonNullable<ButtonProps["size"]>[] = [
  "icon-xs",
  "icon-sm",
  "icon",
  "icon-lg",
  "icon-xl",
]

function Home() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-base font-semibold">Button</h1>
      <Section title="Variants">
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            <PlusIcon />
            {variant}
          </Button>
        ))}
      </Section>
      <Section title="Sizes">
        {sizes.map((size) => (
          <Button key={size} size={size}>
            {size}
          </Button>
        ))}
        {iconSizes.map((size) => (
          <Button key={size} size={size} variant="outline" aria-label="Add">
            <PlusIcon />
          </Button>
        ))}
      </Section>
      <Section title="States">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
        <Button loading>Saving</Button>
        <Button loading showTextWhileLoading>
          <PlusIcon />
          Saving
        </Button>
        <Button variant="outline" loading showTextWhileLoading>
          Saving
        </Button>
        <Button variant="link" disabled>
          Disabled link
        </Button>
      </Section>
    </div>
  )
}

type SectionProps = {
  title: string
  children: ReactNode
}

function Section(props: SectionProps) {
  const { title, children } = props

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  )
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}
