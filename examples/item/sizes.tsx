import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

function ItemSizes() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      {(["default", "sm", "xs"] as const).map((size) => (
        <Item key={size} size={size} variant="outline">
          <ItemContent>
            <ItemTitle>Weekly digest</ItemTitle>
            <ItemDescription>
              A summary of your team's activity, every Monday at 9:00.
            </ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  )
}

export default ItemSizes
