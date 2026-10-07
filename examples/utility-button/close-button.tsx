import { CloseButton } from "@/components/ui/close-button"

function UtilityButtonCloseButton() {
  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        <CloseButton size="xs" />
        <CloseButton size="sm" />
        <CloseButton size="md" />
        <CloseButton size="lg" />
        <CloseButton disabled />
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-3 rounded-xl bg-neutral-950 p-4">
        <CloseButton size="xs" theme="dark" />
        <CloseButton size="sm" theme="dark" />
        <CloseButton size="md" theme="dark" />
        <CloseButton size="lg" theme="dark" />
        <CloseButton theme="dark" disabled />
      </div>
    </>
  )
}

export default UtilityButtonCloseButton
