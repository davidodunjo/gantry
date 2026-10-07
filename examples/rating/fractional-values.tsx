import { RatingStars } from "@/components/ui/rating-stars"

const products = [
  { name: "Wireless keyboard", rating: 4.8 },
  { name: "Standing desk", rating: 3.75 },
  { name: "Desk lamp", rating: 2.5 },
  { name: "Monitor arm", rating: 0 },
  { name: "Noise-cancelling headset", rating: 5 },
]

function RatingFractionalValues() {
  return (
    <>
      {products.map((product) => (
        <div key={product.name} className="flex items-center gap-3">
          <RatingStars rating={product.rating} />
          <span className="text-sm text-muted-foreground">
            {product.name}, {product.rating || "no ratings yet"}
          </span>
        </div>
      ))}
    </>
  )
}

export default RatingFractionalValues
