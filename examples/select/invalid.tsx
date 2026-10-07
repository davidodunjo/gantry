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

function SelectInvalid() {
  return (
    <div className="flex flex-col gap-1.5">
      <Select items={regions}>
        <SelectTrigger
          aria-label="Required region"
          aria-invalid="true"
          aria-describedby="select-invalid-error"
          className="w-56"
        >
          <SelectValue placeholder="Select a region" />
        </SelectTrigger>
        <SelectContent>
          {regions.map((region) => (
            <SelectItem key={region.value} value={region.value}>
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p id="select-invalid-error" className="text-sm text-destructive">
        Pick a region to continue.
      </p>
    </div>
  )
}

export default SelectInvalid
