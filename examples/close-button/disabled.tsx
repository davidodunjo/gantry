import { CloseButton } from "@/components/ui/close-button"

function CloseButtonDisabled() {
  return (
    <>
      <CloseButton />
      <CloseButton disabled />
    </>
  )
}

export default CloseButtonDisabled
