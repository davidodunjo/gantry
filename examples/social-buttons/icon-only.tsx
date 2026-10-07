import { SocialButton } from "@/components/ui/social-buttons"

const providers = [
  "google",
  "facebook",
  "apple",
  "twitter",
  "figma",
  "dribbble",
] as const

function SocialButtonsIconOnly() {
  return (
    <>
      {providers.map((provider) => (
        <SocialButton key={provider} provider={provider} iconOnly />
      ))}
      {providers.map((provider) => (
        <SocialButton
          key={provider}
          provider={provider}
          theme="brand"
          iconOnly
        />
      ))}
    </>
  )
}

export default SocialButtonsIconOnly
