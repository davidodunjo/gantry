import { AvatarAddButton } from "@/components/ui/avatar"

function AvatarAddButtonSizes() {
  return (
    <>
      <AvatarAddButton size="xs" />
      <AvatarAddButton size="sm" />
      <AvatarAddButton size="md" />
      <AvatarAddButton disabled title="Team is full" />
    </>
  )
}

export default AvatarAddButtonSizes
