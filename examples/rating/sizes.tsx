import { RatingStars } from "@/components/ui/rating-stars"

function RatingSizes() {
  return (
    <>
      <RatingStars rating={4.5} starClassName="size-4" />
      <RatingStars rating={4.5} />
      <RatingStars rating={4.5} starClassName="size-6" />
    </>
  )
}

export default RatingSizes
