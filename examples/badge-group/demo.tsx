import { BadgeGroup } from "@/components/ui/badge-group"

function BadgeGroupDemo() {
  return (
    <BadgeGroup
      addonText="New"
      render={<a href="#billing" aria-label="Read about team billing" />}
    >
      Team billing is now live
    </BadgeGroup>
  )
}

export default BadgeGroupDemo
