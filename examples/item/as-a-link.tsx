import { Fragment } from "react"
import { Bell01, ChevronRight, CreditCard01, Users01 } from "@untitledui/icons"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

const settings = [
  {
    href: "#billing",
    icon: CreditCard01,
    title: "Billing",
    description: "Plan, invoices and payment method",
  },
  {
    href: "#team",
    icon: Users01,
    title: "Team",
    description: "Invite people and manage their roles",
  },
  {
    href: "#notifications",
    icon: Bell01,
    title: "Notifications",
    description: "Choose what reaches your inbox",
  },
]

function ItemAsALink() {
  return (
    <ItemGroup className="max-w-lg">
      {settings.map((entry, index) => (
        <Fragment key={entry.href}>
          {index > 0 && <ItemSeparator />}
          <Item render={<a href={entry.href} aria-label={entry.title} />}>
            <ItemMedia variant="icon">
              <entry.icon aria-hidden="true" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{entry.title}</ItemTitle>
              <ItemDescription>{entry.description}</ItemDescription>
            </ItemContent>
            <ChevronRight aria-hidden="true" className="size-5" />
          </Item>
        </Fragment>
      ))}
    </ItemGroup>
  )
}

export default ItemAsALink
