import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { InputGroupAddon } from "@/components/ui/input-group"
import { SearchLg } from "@untitledui/icons"

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

function ComboboxSearchField() {
  const searchAnchor = useComboboxAnchor()

  return (
    <Combobox items={countries}>
      <ComboboxInput
        aria-label="Search countries"
        placeholder="Search countries"
        showClear
        showTrigger={false}
        anchorRef={searchAnchor}
        className="w-64"
      >
        <InputGroupAddon>
          <SearchLg aria-hidden="true" />
        </InputGroupAddon>
      </ComboboxInput>
      <ComboboxContent anchor={searchAnchor}>
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

export default ComboboxSearchField
