import { Button, type ButtonProps } from "@/components/ui/button"

type Variant = NonNullable<ButtonProps["variant"]>

const actions: { value: Variant; label: string }[] = [
  { value: "default", label: "Save changes" },
  { value: "outline", label: "Duplicate" },
  { value: "secondary", label: "Export CSV" },
  { value: "destructive", label: "Delete project" },
]

function ButtonDisabled() {
  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        {actions.map(({ value, label }) => (
          <Button key={value} variant={value}>
            {label}
          </Button>
        ))}
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        {actions.map(({ value, label }) => (
          <Button key={value} variant={value} disabled>
            {label}
          </Button>
        ))}
      </div>
    </>
  )
}

export default ButtonDisabled
