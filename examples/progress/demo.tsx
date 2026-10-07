import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

function ProgressDemo() {
  return (
    <Progress value={40} className="w-80 max-w-full">
      <ProgressLabel>Upload</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}

export default ProgressDemo
