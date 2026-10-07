import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  "Q1 roadmap",
  "Design system audit",
  "Onboarding rebuild",
  "Billing migration",
  "Support triage",
  "Mobile beta",
]

function CarouselMultipleVisible() {
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      aria-label="Team projects"
      className="mx-12 w-full max-w-lg"
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project} className="basis-1/2">
            <div className="flex aspect-square items-center justify-center rounded-xl border p-4 text-center text-sm font-medium">
              {project}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselMultipleVisible
