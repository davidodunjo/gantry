import { Button } from "@/components/ui/button"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"

function ItemHeaderAndFooter() {
  return (
    <Item variant="outline" className="max-w-lg">
      <ItemHeader>
        <ItemTitle>brand-guidelines.pdf</ItemTitle>
        <span className="text-muted-foreground">Just now</span>
      </ItemHeader>
      <ItemContent>
        <ItemDescription>
          Uploaded to Marketing, 18.6 MB. Anyone with the link can view it.
        </ItemDescription>
      </ItemContent>
      <ItemFooter>
        <span className="text-muted-foreground">Link expires in 7 days</span>
        <Button size="sm" variant="outline">
          Copy link
        </Button>
      </ItemFooter>
    </Item>
  )
}

export default ItemHeaderAndFooter
