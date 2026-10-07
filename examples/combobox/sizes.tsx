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

const controlSizes = ["sm", "default", "lg"] as const

function ComboboxSizes() {
  return (
    <>
      {controlSizes.map((controlSize) => (
        <Combobox key={controlSize} items={countries}>
          <ComboboxInput
            controlSize={controlSize}
            aria-label={`Country, ${controlSize}`}
            placeholder="Search countries"
            className="w-56"
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
      ))}
    </>
  )
}

export default ComboboxSizes
