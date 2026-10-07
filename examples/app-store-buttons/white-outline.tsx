import * as Solid from "@/components/ui/app-store-buttons"

const external = { target: "_blank", rel: "noreferrer" }

function AppStoreButtonsWhiteoutline() {
  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center gap-4 rounded-xl bg-neutral-800 p-6">
        <Solid.GooglePlayWhiteButton
          href="https://play.google.com/store"
          {...external}
        />
        <Solid.GooglePlayWhiteButton
          size="lg"
          href="https://play.google.com/store"
          {...external}
        />
      </div>
    </>
  )
}

export default AppStoreButtonsWhiteoutline
