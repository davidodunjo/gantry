import {
  Code01,
  LayersTwo01,
  MessageSquare01,
  PenTool01,
} from "@untitledui/icons"

import {
  MultiSelect,
  type MultiSelectOption,
} from "@/components/ui/multi-select"

const integrations: MultiSelectOption[] = [
  {
    value: "slack",
    label: "Slack",
    description: "Post build results",
    icon: <MessageSquare01 />,
  },
  {
    value: "github",
    label: "GitHub",
    description: "Open a pull request",
    icon: <Code01 />,
  },
  {
    value: "figma",
    label: "Figma",
    description: "Sync design tokens",
    icon: <PenTool01 />,
  },
  {
    value: "notion",
    label: "Notion",
    description: "Write the changelog",
    icon: <LayersTwo01 />,
  },
  {
    value: "jira",
    label: "Jira",
    description: "Needs an admin to connect",
    disabled: true,
  },
]

function MultiSelectInvalid() {
  return (
    <MultiSelect
      className="max-w-80"
      label="Integrations"
      options={integrations}
      required
      invalid
      hint="Connect at least one integration."
    />
  )
}

export default MultiSelectInvalid
