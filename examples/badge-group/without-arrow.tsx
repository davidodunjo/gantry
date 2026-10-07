import { BadgeGroup } from "@/components/ui/badge-group"

function BadgeGroupWithoutArrow() {
  return (
    <>
      <BadgeGroup addonText="New" iconTrailing={null}>
        Team billing is now live
      </BadgeGroup>
      <BadgeGroup theme="modern" addonText="New" iconTrailing={null}>
        Team billing is now live
      </BadgeGroup>
    </>
  )
}

export default BadgeGroupWithoutArrow
