import { Switch } from "@/components/ui/switch"

function SwitchSlim() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Switch defaultChecked aria-label="Regular small" />
        <Switch slim defaultChecked aria-label="Slim small" />
        <span className="text-sm text-muted-foreground">Small</span>
      </div>
      <div className="flex items-center gap-4">
        <Switch size="md" defaultChecked aria-label="Regular medium" />
        <Switch slim size="md" defaultChecked aria-label="Slim medium" />
        <span className="text-sm text-muted-foreground">Medium</span>
      </div>
    </div>
  )
}

export default SwitchSlim
