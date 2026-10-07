import { RatingBadge } from "@/components/ui/rating-badge"

function RatingBadgeExample() {
  return (
    <>
      <RatingBadge
        rating={4.8}
        title="Customer favorite"
        subtitle="128 reviews"
      />
      <div className="rounded-xl bg-neutral-950 p-6">
        <RatingBadge
          theme="light"
          rating={4.5}
          title="Highly rated"
          subtitle="256 reviews"
        />
      </div>
    </>
  )
}

export default RatingBadgeExample
