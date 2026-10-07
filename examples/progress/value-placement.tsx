import { ProgressBar } from "@/components/ui/progress"

const labelPositions = [
  "right",
  "bottom",
  "top-floating",
  "bottom-floating",
] as const

function ProgressValuePlacement() {
  return (
    <div className="flex w-80 max-w-full flex-col gap-6">
      <ProgressBar value={40} aria-label="No visible value" />
      {labelPositions.map((labelPosition) => (
        <ProgressBar
          key={labelPosition}
          value={40}
          labelPosition={labelPosition}
          aria-label={labelPosition}
        />
      ))}
    </div>
  )
}

export default ProgressValuePlacement
