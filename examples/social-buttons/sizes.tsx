import { SocialButton } from "@/components/ui/social-buttons"

function SocialButtonsSizes() {
  return (
    <>
      <SocialButton provider="google" size="md" />
      <SocialButton provider="google" size="lg" />
      <SocialButton provider="google" size="md" iconOnly />
      <SocialButton provider="google" size="lg" iconOnly />
    </>
  )
}

export default SocialButtonsSizes
