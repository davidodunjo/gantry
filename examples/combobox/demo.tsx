import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const countries = [
  "Argentina",
  "Australia",
  "Brazil",
  "Canada",
  "Denmark",
  "Egypt",
  "France",
  "Germany",
  "Ghana",
  "India",
  "Ireland",
  "Italy",
  "Japan",
  "Kenya",
  "Mexico",
  "Morocco",
  "Netherlands",
  "Norway",
  "Portugal",
  "Singapore",
  "South Africa",
  "Spain",
  "Sweden",
  "United Kingdom",
]

function ComboboxDemo() {
  return (
    <Combobox items={countries}>
      <ComboboxInput
        aria-label="Country"
        placeholder="Search countries"
        className="w-64"
      />
      <ComboboxContent>
        <ComboboxEmpty>No country matches that.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default ComboboxDemo
