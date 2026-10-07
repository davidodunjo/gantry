import {
  Illustration,
  type IllustrationProps,
} from "@/components/ui/illustration"

const sizes: NonNullable<IllustrationProps["size"]>[] = ["sm", "md", "lg"]

function IllustrationsSizes() {
  return (
    <>
      {sizes.map((size) => (
        <figure key={size} className="flex flex-col items-center gap-3">
          <Illustration type="box" size={size} />
          <figcaption className="text-sm text-muted-foreground">
            {size}
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default IllustrationsSizes
