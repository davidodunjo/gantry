import { ProgressCircle } from "@/components/ui/progress-circle"

const sizes = ["xxs", "xs", "sm", "md", "lg"] as const

function ProgressCircleSizes() {
  return (
    <>
      {sizes.map((size) => (
        <ProgressCircle
          key={size}
          size={size}
          value={40}
          label={size === "xxs" ? "Users" : "Active users"}
        />
      ))}
    </>
  )
}

export default ProgressCircleSizes
