import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const plans = [
  {
    value: "personal",
    label: "Personal",
    hint: "One workspace, just for you.",
  },
  {
    value: "team",
    label: "Team",
    hint: "Shared workspaces and a billing owner.",
  },
  {
    value: "enterprise",
    label: "Enterprise",
    hint: "Single sign-on, audit logs and a named contact.",
  },
]

function RadioGroupWithDescriptions() {
  return (
    <RadioGroup aria-label="Plan" defaultValue="team" className="max-w-sm">
      {plans.map((plan) => (
        <div key={plan.value} className="flex items-start gap-2">
          <RadioGroupItem
            id={`radio-${plan.value}`}
            value={plan.value}
            className="mt-0.5"
            aria-describedby={`radio-${plan.value}-hint`}
          />
          <div>
            <Label htmlFor={`radio-${plan.value}`}>{plan.label}</Label>
            <p
              id={`radio-${plan.value}-hint`}
              className="text-sm leading-5 text-muted-foreground"
            >
              {plan.hint}
            </p>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}

export default RadioGroupWithDescriptions
