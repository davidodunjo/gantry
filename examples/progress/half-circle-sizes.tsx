import { ProgressCircle } from "@/components/ui/progress-circle"

const sizes = ["xxs", "xs", "sm", "md", "lg"] as const

function ProgressHalfCircleSizes() {
  return (
    <>
      {sizes.map((size) => (
        <ProgressCircle
          key={size}
          size={size}
          variant="half-circle"
          value={40}
          label={size === "xxs" ? "Users" : "Active users"}
        />
      ))}
    </>
  )
}

export default ProgressHalfCircleSizes
