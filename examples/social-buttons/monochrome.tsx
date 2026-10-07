import { SocialButton } from "@/components/ui/social-buttons"

const providers = [
  "google",
  "facebook",
  "apple",
  "twitter",
  "figma",
  "dribbble",
] as const

function SocialButtonsMonochrome() {
  return (
    <>
      {providers.map((provider) => (
        <SocialButton key={provider} provider={provider} />
      ))}
    </>
  )
}

export default SocialButtonsMonochrome
