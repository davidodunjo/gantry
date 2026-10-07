import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const timezones = [
  { value: "london", label: "London, GMT+0" },
  { value: "berlin", label: "Berlin, GMT+1" },
  { value: "tokyo", label: "Tokyo, GMT+9" },
  { value: "new-york", label: "New York, GMT-5" },
  { value: "sao-paulo", label: "Sao Paulo, GMT-3" },
]

function SelectAlignedPopup() {
  return (
    <Select items={timezones} defaultValue="tokyo">
      <SelectTrigger aria-label="Aligned timezone" className="w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger>
        {timezones.map((timezone) => (
          <SelectItem key={timezone.value} value={timezone.value}>
            {timezone.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectAlignedPopup
