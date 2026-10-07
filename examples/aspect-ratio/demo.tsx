import { Image01, User01, VideoRecorder } from "@untitledui/icons"

import { AspectRatio } from "@/components/ui/aspect-ratio"

const frames = [
  { ratio: 16 / 9, label: "16:9, video", icon: VideoRecorder },
  { ratio: 4 / 3, label: "4:3, photo", icon: Image01 },
  { ratio: 1, label: "1:1, avatar", icon: User01 },
]

function AspectRatioDemo() {
  return (
    <>
      {frames.map((frame) => (
        <figure key={frame.label} className="flex w-44 flex-col gap-2">
          <AspectRatio
            ratio={frame.ratio}
            className="flex items-center justify-center rounded-xl bg-muted text-muted-foreground"
          >
            <frame.icon aria-hidden="true" className="size-6" />
          </AspectRatio>
          <figcaption className="text-sm text-muted-foreground">
            {frame.label}
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default AspectRatioDemo
