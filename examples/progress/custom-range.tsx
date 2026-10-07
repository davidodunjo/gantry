import { ProgressBar } from "@/components/ui/progress"
import { ProgressCircle } from "@/components/ui/progress-circle"

function ProgressCustomRange() {
  return (
    <>
      <ProgressCircle
        value={6}
        min={0}
        max={12}
        size="xs"
        label="Tasks"
        valueFormatter={(current) => `${current}/12`}
      />
      <div className="w-80 max-w-full">
        <ProgressBar
          value={6}
          max={12}
          labelPosition="right"
          aria-label="Completed tasks"
          valueFormatter={(current) => `${current} of 12`}
        />
      </div>
    </>
  )
}

export default ProgressCustomRange
