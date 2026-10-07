import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function HoverCardBasic() {
  return (
    <HoverCard defaultOpen>
      <HoverCardTrigger
        href="#hover-card"
        className="font-semibold underline underline-offset-4"
      >
        @gantry
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="font-semibold">Gantry</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Reusable foundations for your next project.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          Joined September 2026
        </p>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverCardBasic
