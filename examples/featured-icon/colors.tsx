import { Zap } from "@untitledui/icons"

import {
  FeaturedIcon,
  type FeaturedIconProps,
} from "@/components/ui/featured-icon"

const colors: NonNullable<FeaturedIconProps["color"]>[] = [
  "brand",
  "gray",
  "error",
  "warning",
  "success",
]

function FeaturedIconColors() {
  return (
    <>
      {colors.map((color) => (
        <figure key={color} className="flex flex-col items-center gap-3">
          <FeaturedIcon
            theme="dark"
            color={color}
            icon={<Zap aria-hidden />}
            title={color}
          />
          <figcaption className="text-sm text-muted-foreground">
            {color}
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default FeaturedIconColors
