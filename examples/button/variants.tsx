import { Button, type ButtonProps } from "@/components/ui/button"

type Variant = NonNullable<ButtonProps["variant"]>

const variants: { value: Variant; label: string }[] = [
  { value: "default", label: "Default" },
  { value: "outline", label: "Outline" },
  { value: "secondary", label: "Secondary" },
  { value: "ghost", label: "Ghost" },
  { value: "destructive", label: "Destructive" },
  { value: "destructive-outline", label: "Destructive outline" },
  { value: "destructive-ghost", label: "Destructive ghost" },
  { value: "link", label: "Link" },
  { value: "link-muted", label: "Link muted" },
  { value: "destructive-link", label: "Destructive link" },
]

function ButtonVariants() {
  return (
    <>
      {variants.map(({ value, label }) => (
        <Button key={value} variant={value}>
          {label}
        </Button>
      ))}
    </>
  )
}

export default ButtonVariants
