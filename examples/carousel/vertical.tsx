import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const agenda = [
  "Welcome and goals",
  "Metrics review",
  "Roadmap risks",
  "Open questions",
]

function CarouselVertical() {
  return (
    <Carousel
      orientation="vertical"
      aria-label="Meeting agenda"
      className="my-12 w-64"
    >
      <CarouselContent className="h-48">
        {agenda.map((item) => (
          <CarouselItem key={item}>
            <div className="flex h-full items-center justify-center rounded-xl border bg-muted/40 px-4 text-center text-sm font-medium">
              {item}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselVertical
