import { StarIcon } from "@/components/ui/rating-stars"

function RatingFillProgress() {
  return (
    <>
      {[0, 25, 50, 75, 100].map((progress) => (
        <span key={progress}>
          <span className="sr-only">{`${progress}% filled star`}</span>
          <StarIcon progress={progress} />
        </span>
      ))}
    </>
  )
}

export default RatingFillProgress
