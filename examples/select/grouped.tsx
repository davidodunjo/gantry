import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
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

function SelectGrouped() {
  return (
    <Select items={timezones} defaultValue="berlin">
      <SelectTrigger aria-label="Grouped timezone" className="w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="london">London, GMT+0</SelectItem>
          <SelectItem value="berlin">Berlin, GMT+1</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="tokyo">Tokyo, GMT+9</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Americas</SelectLabel>
          <SelectItem value="new-york">New York, GMT-5</SelectItem>
          <SelectItem value="sao-paulo">Sao Paulo, GMT-3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectGrouped
