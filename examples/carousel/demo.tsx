import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    company: "Northwind Traders",
    quote: "Cut checkout errors by 40% in the first month.",
  },
  {
    company: "Harlow Logistics",
    quote: "Migrated three warehouses without a single dropped shipment.",
  },
  {
    company: "Studio Lumen",
    quote: "Design reviews went from two days to two hours.",
  },
  {
    company: "Kestrel Health",
    quote: "Intake forms finally match how our clinicians actually work.",
  },
  {
    company: "Harbour & Finch",
    quote: "Support tickets are down even as our headcount doubled.",
  },
]

function CarouselDemo() {
  return (
    <Carousel
      aria-label="Featured case studies"
      className="mx-12 w-full max-w-lg"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.company}>
            <div className="flex aspect-video flex-col justify-center gap-2 rounded-xl border bg-muted/40 p-6">
              <p className="text-sm">{testimonial.quote}</p>
              <p className="text-sm font-medium text-muted-foreground">
                {testimonial.company}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselDemo
