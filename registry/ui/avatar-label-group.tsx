import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Avatar, type AvatarProps } from "@/components/ui/avatar"

type AvatarLabelGroupProps = Omit<
  AvatarProps,
  "size" | "title" | "className"
> & {
  size?: "sm" | "md" | "lg"
  title: ReactNode
  subtitle?: ReactNode
  className?: string
  avatarClassName?: AvatarProps["className"]
}
function AvatarLabelGroup(props: AvatarLabelGroupProps) {
  const {
    size = "md",
    title,
    subtitle,
    className,
    avatarClassName,
    ...rest
  } = props
  return (
    <figure className={cn("group flex min-w-0 items-center gap-2", className)}>
      <Avatar border size={size} className={avatarClassName} {...rest} />
      <figcaption className="min-w-0">
        <p
          className={cn(
            "font-semibold text-foreground",
            size === "lg" ? "text-base" : "text-sm"
          )}
        >
          {title}
        </p>
        {subtitle !== undefined && (
          <p
            className={cn(
              "truncate text-muted-foreground",
              size === "sm"
                ? "text-xs"
                : size === "md"
                  ? "text-sm"
                  : "text-base"
            )}
          >
            {subtitle}
          </p>
        )}
      </figcaption>
    </figure>
  )
}
export { AvatarLabelGroup }
export type { AvatarLabelGroupProps }
