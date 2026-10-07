import { File02 } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

function ItemDemo() {
  return (
    <Item variant="outline" className="max-w-lg">
      <ItemMedia variant="icon">
        <File02 aria-hidden="true" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Q3 board deck.pdf</ItemTitle>
        <ItemDescription>2.4 MB, updated today</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="sm">
          Open
        </Button>
      </ItemActions>
    </Item>
  )
}

export default ItemDemo
