import { useState } from "react"

import {
  Avatar,
  AvatarAddButton,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

function AvatarGroupExample() {
  const [members, setMembers] = useState(["OR", "PB", "DW"])

  function handleAddMember() {
    setMembers([...members, "JD"])
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <AvatarGroup>
          {members.map((initials, index) => (
            <Avatar
              key={`${initials}-${index}`}
              size="sm"
              initials={initials}
              alt={initials}
            />
          ))}
          <AvatarGroupCount aria-label="Two more members">+2</AvatarGroupCount>
        </AvatarGroup>
        <AvatarAddButton
          size="sm"
          title="Add a member"
          onClick={handleAddMember}
          disabled={members.length >= 6}
        />
      </div>
      <output className="text-sm text-muted-foreground">
        {members.length} visible members
      </output>
    </>
  )
}

export default AvatarGroupExample
