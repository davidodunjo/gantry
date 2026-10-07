import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function HoverCardPlacement() {
  return (
    <>
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <HoverCard key={side} defaultOpen>
          <HoverCardTrigger
            href="#hover-card"
            className="underline underline-offset-4"
          >
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <p className="font-semibold">Project details</p>
            <p className="mt-1 text-muted-foreground">
              A preview without leaving the page.
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </>
  )
}

export default HoverCardPlacement
