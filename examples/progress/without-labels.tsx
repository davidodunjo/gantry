import { ProgressCircle } from "@/components/ui/progress-circle"

function ProgressWithoutLabels() {
  return (
    <>
      <ProgressCircle value={40} size="xs" aria-label="Upload progress" />
      <ProgressCircle
        value={40}
        size="xs"
        variant="half-circle"
        aria-label="Download progress"
      />
    </>
  )
}

export default ProgressWithoutLabels
