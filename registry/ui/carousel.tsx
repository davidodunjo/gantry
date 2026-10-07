import {
  type ComponentProps,
  createContext,
  type KeyboardEvent,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CarouselApi = UseEmblaCarouselType[1]
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0]
type CarouselPlugins = Parameters<typeof useEmblaCarousel>[1]
type CarouselOrientation = "horizontal" | "vertical"

type CarouselProps = ComponentProps<"div"> & {
  opts?: CarouselOptions
  plugins?: CarouselPlugins
  orientation?: CarouselOrientation
  setApi?: (api: CarouselApi) => void
}

type CarouselContextValue = {
  carouselRef: UseEmblaCarouselType[0]
  api: CarouselApi
  opts?: CarouselOptions
  orientation: CarouselOrientation
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel(props: CarouselProps) {
  const {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...rest
  } = props
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins
  )
  const subscribe = useCallback(
    (notify: () => void) => {
      if (!api) return () => {}

      api.on("reInit", notify)
      api.on("select", notify)

      return () => {
        api.off("reInit", notify)
        api.off("select", notify)
      }
    },
    [api]
  )
  const canScrollPrev = useSyncExternalStore(
    subscribe,
    () => api?.canScrollPrev() ?? false,
    () => false
  )
  const canScrollNext = useSyncExternalStore(
    subscribe,
    () => api?.canScrollNext() ?? false,
    () => false
  )

  useEffect(() => {
    if (!api || !setApi) return

    setApi(api)
  }, [api, setApi])

  function scrollPrev() {
    api?.scrollPrev()
  }

  function scrollNext() {
    api?.scrollNext()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (
      event.target !== event.currentTarget ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey
    )
      return

    const isRtl = opts?.direction === "rtl"
    const previousKey =
      orientation === "vertical"
        ? "ArrowUp"
        : isRtl
          ? "ArrowRight"
          : "ArrowLeft"
    const nextKey =
      orientation === "vertical"
        ? "ArrowDown"
        : isRtl
          ? "ArrowLeft"
          : "ArrowRight"

    if (event.key === previousKey) {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === nextKey) {
      event.preventDefault()
      scrollNext()
    }
  }

  return (
    <CarouselContext
      value={{
        carouselRef,
        api,
        opts,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- The labelled region offers optional arrow-key navigation. */}
      <div
        onKeyDown={handleKeyDown}
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- A focusable region lets keyboard users scroll slides without capturing child controls.
        tabIndex={0}
        className={cn(
          "relative rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- Keep the div so the labelled carousel region keeps its public API.
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...rest}
      >
        {children}
      </div>
    </CarouselContext>
  )
}

type CarouselContentProps = ComponentProps<"div">

function CarouselContent(props: CarouselContentProps) {
  const { className, ...rest } = props
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ms-6" : "-mt-6 flex-col",
          className
        )}
        {...rest}
      />
    </div>
  )
}

type CarouselItemProps = ComponentProps<"div">

function CarouselItem(props: CarouselItemProps) {
  const { className, ...rest } = props
  const { orientation } = useCarousel()

  return (
    <div
      // oxlint-disable-next-line jsx-a11y/prefer-tag-over-role -- A slide is a generic ARIA group, not a fieldset or disclosure.
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "ps-6" : "pt-6",
        className
      )}
      {...rest}
    />
  )
}

type CarouselPreviousProps = ComponentProps<typeof Button>

function CarouselPrevious(props: CarouselPreviousProps) {
  const { className, variant = "outline", size = "icon-sm", ...rest } = props
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "inset-y-0 left-4 my-auto"
          : "top-4 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...rest}
    >
      <ChevronLeft aria-hidden="true" className="rtl:rotate-180" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

type CarouselNextProps = ComponentProps<typeof Button>

function CarouselNext(props: CarouselNextProps) {
  const { className, variant = "outline", size = "icon-sm", ...rest } = props
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "inset-y-0 right-4 my-auto"
          : "bottom-4 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...rest}
    >
      <ChevronRight aria-hidden="true" className="rtl:rotate-180" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
}
