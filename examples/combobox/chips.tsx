import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
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

function ComboboxWithChips() {
  const chipsAnchor = useComboboxAnchor()

  return (
    <Combobox
      items={countries}
      multiple
      defaultValue={["United Kingdom", "Portugal"]}
    >
      <ComboboxChips ref={chipsAnchor} className="w-80">
        <ComboboxValue>
          {(values: string[]) =>
            values.map((value) => (
              <ComboboxChip key={value}>{value}</ComboboxChip>
            ))
          }
        </ComboboxValue>
        <ComboboxChipsInput
          aria-label="Add countries"
          placeholder="Add a country"
        />
      </ComboboxChips>
      <ComboboxContent anchor={chipsAnchor}>
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

export default ComboboxWithChips
