import { Spinner } from "@/components/ui/spinner"

const sizes = ["inline", "sm", "default", "lg", "xl"] as const

function SpinnerSizes() {
  return (
    <>
      {sizes.map((size) => (
        <Spinner key={size} size={size} />
      ))}
    </>
  )
}

export default SpinnerSizes
