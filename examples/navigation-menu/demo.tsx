import { BookOpen01, Code01 } from "@untitledui/icons"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-1">
              <NavigationMenuLink href="#components">
                <BookOpen01 aria-hidden="true" />
                <span>
                  <span className="block font-semibold">Components</span>
                  <span className="text-muted-foreground">
                    Explore the library.
                  </span>
                </span>
              </NavigationMenuLink>
              <NavigationMenuLink href="#tabs">
                <Code01 aria-hidden="true" />
                <span>
                  <span className="block font-semibold">Examples</span>
                  <span className="text-muted-foreground">
                    Build with real components.
                  </span>
                </span>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#button">Buttons</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger disabled>Coming soon</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationMenuDemo
