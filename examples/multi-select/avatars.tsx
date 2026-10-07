import {
  MultiSelect,
  type MultiSelectOption,
} from "@/components/ui/multi-select"

function avatarFor(initial: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><rect width="24" height="24" rx="12" fill="#525252"/><text x="12" y="16" text-anchor="middle" font-size="13" fill="white">${initial}</text></svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const members: MultiSelectOption[] = [
  {
    value: "olivia",
    label: "Olivia Rhye",
    description: "@olivia",
    avatarUrl: avatarFor("O"),
  },
  {
    value: "phoenix",
    label: "Phoenix Baker",
    description: "@phoenix",
    avatarUrl: avatarFor("P"),
  },
  {
    value: "demi",
    label: "Demi Wilkinson",
    description: "@demi",
    avatarUrl: avatarFor("D"),
  },
]

function MultiSelectAvatars() {
  return (
    <MultiSelect
      className="max-w-80"
      label="Invite to the workspace"
      options={members}
      placeholder="Choose people"
    />
  )
}

export default MultiSelectAvatars
