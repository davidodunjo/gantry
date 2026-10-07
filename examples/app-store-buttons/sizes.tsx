import * as Solid from "@/components/ui/app-store-buttons"
import * as Outlined from "@/components/ui/app-store-buttons-outline"

const external = { target: "_blank", rel: "noreferrer" }

function AppStoreButtonsSizes() {
  return (
    <>
      <Solid.GooglePlayButton
        href="https://play.google.com/store"
        {...external}
      />
      <Solid.GooglePlayButton
        size="lg"
        href="https://play.google.com/store"
        {...external}
      />
      <Outlined.AppStoreButton
        href="https://www.apple.com/app-store/"
        {...external}
      />
      <Outlined.AppStoreButton
        size="lg"
        href="https://www.apple.com/app-store/"
        {...external}
      />
    </>
  )
}

export default AppStoreButtonsSizes
