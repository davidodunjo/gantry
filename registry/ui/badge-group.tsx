import { type ReactNode } from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { ArrowRight } from "@untitledui/icons"

import { cn } from "@/lib/utils"

type BadgeGroupProps = useRender.ComponentProps<"span"> & {
  addonText: ReactNode
  size?: "md" | "lg"
  theme?: "light" | "modern"
  align?: "leading" | "trailing"
  iconTrailing?: ReactNode
}

function BadgeGroup(props: BadgeGroupProps) {
  const {
    addonText,
    children,
    size = "md",
    theme = "light",
    align = "leading",
    iconTrailing = <ArrowRight aria-hidden />,
    className,
    render,
    ...rest
  } = props
  const modern = theme === "modern"
  const trailing = align === "trailing"
  const content = (
    <>
      {trailing && (
        <>
          {modern && (
            <span
              aria-hidden
              className={cn(
                "size-2 shrink-0 rounded-full bg-muted-foreground outline-3 -outline-offset-1 outline-muted",
                size === "md" ? "mr-1.5" : "mr-2"
              )}
            />
          )}
          {children}
        </>
      )}
      <span
        data-slot="badge-group-addon"
        className={cn(
          "inline-flex shrink-0 items-center bg-background py-0.5 ring-1 ring-input ring-inset",
          modern ? "rounded-md shadow-xs" : "rounded-full",
          size === "md" ? "px-2" : "px-2.5",
          modern && (size === "md" ? "gap-1 px-1.5" : "gap-1.5 px-2"),
          !!children && (trailing ? "ml-2" : "mr-2"),
          trailing &&
            (modern
              ? "pr-1.5 pl-2"
              : size === "md"
                ? "pr-1.5 pl-2"
                : "pr-2 pl-2.5")
        )}
      >
        {modern && !trailing && (
          <span
            aria-hidden
            className="size-2 shrink-0 rounded-full bg-muted-foreground outline-3 -outline-offset-1 outline-muted"
          />
        )}
        {addonText}
        {trailing && iconTrailing && (
          <span
            className={cn(
              "inline-flex text-muted-foreground [&_svg]:size-3 [&_svg]:stroke-[3px]",
              size === "md" ? "ml-0.5" : "ml-1"
            )}
          >
            {iconTrailing}
          </span>
        )}
      </span>
      {!trailing && (
        <>
          {children}
          {iconTrailing && (
            <span className="ml-1 inline-flex text-muted-foreground [&_svg]:size-4">
              {iconTrailing}
            </span>
          )}
        </>
      )}
    </>
  )
  return useRender({
    defaultTagName: "span",
    render,
    state: { slot: "badge-group", theme, size, align },
    props: mergeProps<"span">(
      {
        className: cn(
          "inline-flex w-fit max-w-full items-center py-1 font-medium text-foreground ring-1 ring-input transition duration-100 outline-none ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          modern
            ? "rounded-[10px] bg-background shadow-xs hover:bg-muted"
            : "rounded-full bg-muted/50 hover:bg-muted",
          size === "md" ? "text-xs" : "text-sm",
          trailing ? "pr-1 pl-3" : "pr-2 pl-1",
          modern && trailing && size === "md" && "pl-2.5",
          !trailing && !children && !iconTrailing && "pr-1",
          className
        ),
        children: content,
      },
      rest
    ),
  })
}

export { BadgeGroup }
export type { BadgeGroupProps }
