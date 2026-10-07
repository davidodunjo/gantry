import { useEffect, useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
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

function CarouselSlideIndicator() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const count = testimonials.length

  useEffect(() => {
    if (!api) return

    const currentApi = api

    function handleSelect() {
      setSelected(currentApi.selectedScrollSnap())
    }

    currentApi.on("select", handleSelect)

    return () => {
      currentApi.off("select", handleSelect)
    }
  }, [api])

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-4">
      <Carousel setApi={setApi} aria-label="Customer testimonials">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.company}>
              <div className="flex min-h-32 flex-col justify-center gap-2 rounded-xl border p-6">
                <p className="text-sm">{testimonial.quote}</p>
                <p className="text-sm font-medium text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={
                index === selected
                  ? "size-2 rounded-full bg-foreground"
                  : "size-2 rounded-full bg-muted-foreground/30"
              }
            />
          ))}
        </div>
        <output className="text-sm text-muted-foreground">
          {selected + 1} of {count}
        </output>
      </div>
    </div>
  )
}

export default CarouselSlideIndicator
