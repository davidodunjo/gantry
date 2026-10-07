import { Kbd, KbdGroup } from "@/components/ui/kbd"

function KbdCombinations() {
  return (
    <>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd>
      </KbdGroup>
    </>
  )
}

export default KbdCombinations
