import { SocialButton } from "@/components/ui/social-buttons"

function SocialButtonsLoadingAndDisabled() {
  return (
    <>
      <SocialButton provider="google" loading />
      <SocialButton provider="google" loading showTextWhileLoading>
        Opening Google
      </SocialButton>
      <SocialButton provider="apple" disabled />
    </>
  )
}

export default SocialButtonsLoadingAndDisabled
