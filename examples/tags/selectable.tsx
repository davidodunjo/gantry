import { useState } from "react"

import { Tag, TagGroup } from "@/components/ui/tags"

function TagsSelectable() {
  const [selected, setSelected] = useState(["design"])

  return (
    <>
      <TagGroup
        label="Topics"
        size="md"
        selectionMode="multiple"
        selectedIds={selected}
        onSelectedIdsChange={setSelected}
      >
        <Tag id="design">Design</Tag>
        <Tag id="engineering">Engineering</Tag>
        <Tag id="product">Product</Tag>
      </TagGroup>
      <output className="text-sm text-muted-foreground">
        Selected: {selected.join(", ") || "none"}
      </output>
    </>
  )
}

export default TagsSelectable
