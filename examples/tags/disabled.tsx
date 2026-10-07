import { Tag } from "@/components/ui/tags"

function TagsDisabled() {
  return (
    <Tag id="legacy" disabled onRemove={() => undefined}>
      Legacy import
    </Tag>
  )
}

export default TagsDisabled
