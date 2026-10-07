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

function SelectSizes() {
  return (
    <>
      {(["sm", "default", "lg"] as const).map((size) => (
        <Select key={size} items={regions}>
          <SelectTrigger
            size={size}
            aria-label={`Region, ${size}`}
            className="w-56"
          >
            <SelectValue placeholder="Select a region" />
          </SelectTrigger>
          <SelectContent size={size}>
            {regions.map((region) => (
              <SelectItem key={region.value} value={region.value}>
                {region.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </>
  )
}

export default SelectSizes
