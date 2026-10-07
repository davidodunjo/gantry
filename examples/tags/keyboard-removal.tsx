import { useState } from "react"

import { Tag, TagAvatar } from "@/components/ui/tags"

function TagsKeyboardRemoval() {
  const [present, setPresent] = useState(true)

  function handleRemove() {
    setPresent(false)
  }

  function handleRestore() {
    setPresent(true)
  }

  return (
    <>
      {present ? (
        <Tag id="keyboard" size="md" onRemove={handleRemove}>
          Focus, then press Delete
        </Tag>
      ) : (
        <button
          type="button"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          onClick={handleRestore}
        >
          Restore
        </button>
      )}
      <TagAvatar alt="Fallback avatar" />
    </>
  )
}

export default TagsKeyboardRemoval
