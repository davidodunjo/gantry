import { Tag } from "@/components/ui/tags"

function TagsContent() {
  return (
    <>
      <Tag id="active" dot>
        Active
      </Tag>
      <Tag id="olivia" size="md" avatar={{ alt: "Olivia Rhye" }}>
        Olivia Rhye
      </Tag>
      <Tag id="inbox" size="lg" count={12}>
        Inbox
      </Tag>
    </>
  )
}

export default TagsContent
