import {
  Illustration,
  type IllustrationProps,
} from "@/components/ui/illustration"

const kinds: { value: IllustrationProps["type"]; label: string }[] = [
  { value: "box", label: "Box" },
  { value: "cloud", label: "Cloud" },
  { value: "credit-card", label: "Credit card" },
  { value: "documents", label: "Documents" },
]

function IllustrationsKinds() {
  return (
    <>
      {kinds.map((kind) => (
        <figure key={kind.value} className="flex flex-col items-center gap-3">
          <Illustration type={kind.value} size="md" />
          <figcaption className="text-sm text-muted-foreground">
            {kind.label}
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default IllustrationsKinds
