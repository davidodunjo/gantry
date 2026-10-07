import { SocialButton } from "@/components/ui/social-buttons"

const providers = [
  "google",
  "facebook",
  "apple",
  "twitter",
  "figma",
  "dribbble",
] as const

function SocialButtonsColourLogos() {
  return (
    <>
      {providers.map((provider) => (
        <SocialButton key={provider} provider={provider} theme="color" />
      ))}
    </>
  )
}

export default SocialButtonsColourLogos
