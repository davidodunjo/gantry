import { Plus } from "@untitledui/icons"

import { Button, type ButtonProps } from "@/components/ui/button"

type Size = NonNullable<ButtonProps["size"]>

const sizes: { value: Size; iconValue: Size; label: string }[] = [
  { value: "xs", iconValue: "icon-xs", label: "Extra small" },
  { value: "sm", iconValue: "icon-sm", label: "Small" },
  { value: "default", iconValue: "icon", label: "Default" },
  { value: "lg", iconValue: "icon-lg", label: "Large" },
  { value: "xl", iconValue: "icon-xl", label: "Extra large" },
]

function ButtonSizes() {
  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        {sizes.map(({ value, label }) => (
          <Button key={value} variant="outline" size={value}>
            {label}
          </Button>
        ))}
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        {sizes.map(({ iconValue }) => (
          <Button
            key={iconValue}
            variant="outline"
            size={iconValue}
            aria-label="New project"
          >
            <Plus />
          </Button>
        ))}
      </div>
    </>
  )
}

export default ButtonSizes
