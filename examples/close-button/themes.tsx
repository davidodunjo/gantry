import { CloseButton } from "@/components/ui/close-button"

function CloseButtonThemes() {
  return (
    <>
      <CloseButton theme="light" />
      <div className="rounded-lg bg-neutral-950 p-2">
        <CloseButton theme="dark" />
      </div>
    </>
  )
}

export default CloseButtonThemes
