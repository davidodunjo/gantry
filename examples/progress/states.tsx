import { Progress, ProgressBar } from "@/components/ui/progress"
import { ProgressCircle } from "@/components/ui/progress-circle"

function ProgressStates() {
  return (
    <>
      <div className="w-80 max-w-full space-y-6">
        <Progress value={0} aria-label="Empty" />
        <Progress value={100} aria-label="Complete" />
        <Progress value={null} aria-label="Loading" />
        <ProgressBar
          value={null}
          labelPosition="right"
          aria-label="Loading files"
        />
      </div>
      <ProgressCircle value={0} size="xxs" aria-label="Empty" />
      <ProgressCircle value={100} size="xxs" aria-label="Complete" />
      <ProgressCircle value={null} size="xxs" aria-label="Loading" />
      <ProgressCircle
        value={null}
        size="xs"
        variant="half-circle"
        aria-label="Loading"
      />
    </>
  )
}

export default ProgressStates
