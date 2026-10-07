import { BadgeGroup } from "@/components/ui/badge-group"

function BadgeGroupStandaloneAddon() {
  return (
    <>
      <BadgeGroup addonText="Beta" iconTrailing={null} />
      <BadgeGroup theme="modern" addonText="Beta" iconTrailing={null} />
    </>
  )
}

export default BadgeGroupStandaloneAddon
