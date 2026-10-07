import { Tag } from "@/components/ui/tags"

const assignees = [
  { id: "olivia", name: "Olivia Rhye" },
  { id: "phoenix", name: "Phoenix Baker" },
  { id: "lana", name: "Lana Steiner" },
]

function TagsPeople() {
  return (
    <>
      {assignees.map((person) => (
        <Tag key={person.id} id={person.id} avatar={{ alt: person.name }}>
          {person.name}
        </Tag>
      ))}
    </>
  )
}

export default TagsPeople
