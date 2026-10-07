import { useState } from "react"

import { Tag } from "@/components/ui/tags"

const initialSkills = ["react", "typescript", "accessibility"]

function TagsRemovable() {
  const [skills, setSkills] = useState(initialSkills)

  function handleRemove(id: string) {
    setSkills((current) => current.filter((skill) => skill !== id))
  }

  function handleRestore() {
    setSkills(initialSkills)
  }

  return (
    <>
      {skills.map((skill) => (
        <Tag key={skill} id={skill} size="md" onRemove={handleRemove}>
          {skill}
        </Tag>
      ))}
      <button
        type="button"
        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        onClick={handleRestore}
      >
        Restore
      </button>
    </>
  )
}

export default TagsRemovable
