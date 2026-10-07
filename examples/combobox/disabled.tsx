import {
  Combobox,
  ComboboxContent,
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

function ComboboxDisabled() {
  return (
    <Combobox items={countries} disabled defaultValue="Ireland">
      <ComboboxInput aria-label="Locked country" disabled className="w-64" />
      <ComboboxContent>
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

export default ComboboxDisabled
