import { Zap } from "@untitledui/icons"

import {
  FeaturedIcon,
  type FeaturedIconProps,
} from "@/components/ui/featured-icon"

const sizes: NonNullable<FeaturedIconProps["size"]>[] = ["sm", "md", "lg", "xl"]

function FeaturedIconSizes() {
  return (
    <>
      {sizes.map((size) => (
        <FeaturedIcon
          key={size}
          size={size}
          icon={<Zap aria-hidden />}
          title={`Size ${size}`}
        />
      ))}
    </>
  )
}

export default FeaturedIconSizes
