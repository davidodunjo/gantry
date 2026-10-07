import {
  AppStoreButton,
  GooglePlayButton,
} from "@/components/ui/app-store-buttons"

function AppStoreButtonsDemo() {
  return (
    <>
      <GooglePlayButton
        href="https://play.google.com/store"
        target="_blank"
        rel="noreferrer"
      />
      <AppStoreButton
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noreferrer"
      />
    </>
  )
}

export default AppStoreButtonsDemo
