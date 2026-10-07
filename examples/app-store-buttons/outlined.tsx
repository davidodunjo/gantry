import * as Solid from "@/components/ui/app-store-buttons"
import * as Outlined from "@/components/ui/app-store-buttons-outline"

const external = { target: "_blank", rel: "noreferrer" }

const stores = [
  {
    name: "Google Play",
    href: "https://play.google.com/store",
    Solid: Solid.GooglePlayButton,
    Outlined: Outlined.GooglePlayButton,
  },
  {
    name: "App Store",
    href: "https://www.apple.com/app-store/",
    Solid: Solid.AppStoreButton,
    Outlined: Outlined.AppStoreButton,
  },
  {
    name: "Galaxy Store",
    href: "https://galaxystore.samsung.com",
    Solid: Solid.GalaxyStoreButton,
    Outlined: Outlined.GalaxyStoreButton,
  },
  {
    name: "AppGallery",
    href: "https://appgallery.huawei.com",
    Solid: Solid.AppGalleryButton,
    Outlined: Outlined.AppGalleryButton,
  },
]

function AppStoreButtonsOutlined() {
  return (
    <>
      {stores.map((store) => (
        <store.Outlined key={store.name} href={store.href} {...external} />
      ))}
    </>
  )
}

export default AppStoreButtonsOutlined
