import { BadgeGroup } from "@/components/ui/badge-group"

const sizes = ["md", "lg"] as const

function BadgeGroupLight() {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-start gap-3">
          <BadgeGroup
            size={size}
            addonText="New"
            render={<a href="#billing" aria-label="Read about team billing" />}
          >
            Team billing is now live
          </BadgeGroup>
          <BadgeGroup
            size={size}
            align="trailing"
            addonText="v2.4"
            render={<a href="#changelog" aria-label="Read the changelog" />}
          >
            Read the changelog
          </BadgeGroup>
        </div>
      ))}
    </div>
  )
}

export default BadgeGroupLight
