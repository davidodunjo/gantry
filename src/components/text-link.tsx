import { Link, type LinkProps } from "@tanstack/react-router"
import { type CSSProperties } from "react"

import { cn } from "cn"

type TextLinkProps = Omit<LinkProps, "children" | "className" | "style"> & {
  className?: string
  index?: number
  label: string
}

function TextLink(props: TextLinkProps) {
  const { className, index = 0, label, ...linkProps } = props

  return (
    <Link
      className={cn(
        "group/link relative -m-2 flex w-fit items-center p-2 font-semibold whitespace-nowrap transition-colors duration-200 group-hover/links:text-muted-foreground hover:text-foreground! focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4",
        className
      )}
      style={{ "--link-index": index } as CSSProperties}
      {...linkProps}
    >
      <span className="block overflow-hidden">
        <span className="text-link-label block">{label}</span>
      </span>
      <span
        aria-hidden="true"
        className="absolute right-2 bottom-1 left-2 h-0.5 origin-right scale-x-0 bg-foreground transition-transform duration-200 ease-out group-hover/link:origin-left group-hover/link:scale-x-100"
      />
    </Link>
  )
}

export default TextLink
