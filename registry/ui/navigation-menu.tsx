import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { ChevronDown } from "@untitledui/icons"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

type NavigationMenuProps = NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align">

function NavigationMenu(props: NavigationMenuProps) {
  const { align = "start", className, children, ...rest } = props

  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={(state) =>
        cn(
          "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  )
}

type NavigationMenuListProps = NavigationMenuPrimitive.List.Props

function NavigationMenuList(props: NavigationMenuListProps) {
  const { className, ...rest } = props

  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={(state) =>
        cn(
          "group flex flex-1 list-none items-center justify-center gap-1",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type NavigationMenuItemProps = NavigationMenuPrimitive.Item.Props

function NavigationMenuItem(props: NavigationMenuItemProps) {
  const { className, ...rest } = props

  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={(state) =>
        cn(
          "relative",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
)

type NavigationMenuTriggerProps = NavigationMenuPrimitive.Trigger.Props

function NavigationMenuTrigger(props: NavigationMenuTriggerProps) {
  const { className, children, ...rest } = props

  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={(state) =>
        cn(
          navigationMenuTriggerStyle(),
          "group",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children}{" "}
      <ChevronDown
        className="relative ms-2 size-4 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

type NavigationMenuContentProps = NavigationMenuPrimitive.Content.Props

function NavigationMenuContent(props: NavigationMenuContentProps) {
  const { className, ...rest } = props

  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={(state) =>
        cn(
          "data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] h-full w-auto p-2 transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10 group-data-[viewport=false]/navigation-menu:duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type NavigationMenuPositionerProps = NavigationMenuPrimitive.Positioner.Props

function NavigationMenuPositioner(props: NavigationMenuPositionerProps) {
  const {
    className,
    side = "bottom",
    sideOffset = 8,
    align = "start",
    alignOffset = 0,
    ...rest
  } = props

  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={(state) =>
          cn(
            "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0",
            typeof className === "function" ? className(state) : className
          )
        }
        {...rest}
      >
        <NavigationMenuPrimitive.Popup className="data-[ending-style]:easing-[ease] xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-xl bg-popover text-popover-foreground shadow-lg ring-1 ring-border transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0">
          <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

type NavigationMenuLinkProps = NavigationMenuPrimitive.Link.Props

function NavigationMenuLink(props: NavigationMenuLinkProps) {
  const { className, ...rest } = props

  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={(state) =>
        cn(
          "flex items-center gap-3 rounded-lg p-3 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-5",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type NavigationMenuIndicatorProps = NavigationMenuPrimitive.Icon.Props

function NavigationMenuIndicator(props: NavigationMenuIndicatorProps) {
  const { className, ...rest } = props

  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={(state) =>
        cn(
          "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Icon>
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
}
