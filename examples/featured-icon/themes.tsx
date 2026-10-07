import { Zap } from "@untitledui/icons"

import {
  FeaturedIcon,
  type FeaturedIconProps,
} from "@/components/ui/featured-icon"

const themes: {
  value: NonNullable<FeaturedIconProps["theme"]>
  label: string
}[] = [
  { value: "light", label: "Light" },
  { value: "gradient", label: "Gradient" },
  { value: "dark", label: "Dark" },
  { value: "outline", label: "Outline" },
  { value: "modern", label: "Modern" },
  { value: "modern-neue", label: "Modern neue" },
]

function FeaturedIconThemes() {
  return (
    <>
      {themes.map((theme) => (
        <figure key={theme.value} className="flex flex-col items-center gap-3">
          <FeaturedIcon
            theme={theme.value}
            icon={<Zap aria-hidden />}
            title={theme.label}
          />
          <figcaption className="text-sm text-muted-foreground">
            {theme.label}
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default FeaturedIconThemes
