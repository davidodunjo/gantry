import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const regions = [
  { value: "eu-west", label: "Europe, Ireland" },
  { value: "eu-central", label: "Europe, Frankfurt" },
  { value: "us-east", label: "US East, Virginia" },
]

function SelectDisabled() {
  return (
    <>
      <Select items={regions} defaultValue="eu-west" disabled>
        <SelectTrigger aria-label="Locked region" className="w-56">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {regions.map((region) => (
            <SelectItem key={region.value} value={region.value}>
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={regions}>
        <SelectTrigger aria-label="Available regions" className="w-56">
          <SelectValue placeholder="Select a region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eu-west">Europe, Ireland</SelectItem>
          <SelectItem value="eu-central" disabled>
            Europe, Frankfurt, at capacity
          </SelectItem>
          <SelectItem value="us-east">US East, Virginia</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}

export default SelectDisabled
