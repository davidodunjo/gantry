import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { User01 } from "@untitledui/icons"
import { cn } from "@/lib/utils"
import {
  AvatarOnlineIndicator,
  VerifiedTick,
  type AvatarProps,
} from "@/components/ui/avatar"

const profileSizes = {
  sm: {
    root: "size-18 p-0.75",
    content: "",
    icon: "size-9",
    initials: "text-3xl",
    badge: "bottom-0.5 end-0.5",
  },
  md: {
    root: "size-24 p-1",
    content: "shadow-xl",
    icon: "size-12",
    initials: "text-4xl",
    badge: "bottom-1 end-1",
  },
  lg: {
    root: "size-40 p-1.5",
    content: "shadow-2xl",
    icon: "size-20",
    initials: "text-6xl",
    badge: "bottom-2 end-2",
  },
}
type AvatarProfilePhotoProps = Omit<
  AvatarProps,
  "size" | "border" | "rounded" | "count" | "focusable"
> & { size?: "sm" | "md" | "lg" }
function AvatarProfilePhoto(props: AvatarProfilePhotoProps) {
  const {
    size = "md",
    src,
    alt = "",
    initials,
    placeholder,
    placeholderIcon: PlaceholderIcon = User01,
    status,
    verified,
    badge,
    className,
    contentClassName,
    children,
    ...rest
  } = props
  const indicatorSize = size === "sm" ? "2xl" : size === "md" ? "3xl" : "4xl"
  return (
    <AvatarPrimitive.Root
      data-slot="avatar-profile-photo"
      className={(state) =>
        cn(
          "relative flex shrink-0 items-center justify-center rounded-full bg-background ring-1 ring-border",
          profileSizes[size].root,
          state.imageLoadingStatus !== "loaded" &&
            (size === "sm" ? "p-1" : size === "md" ? "p-1.25" : "p-1.75"),
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      <AvatarPrimitive.Image
        src={src ?? undefined}
        alt={alt}
        className={cn(
          "size-full rounded-full object-cover outline-[0.75px] -outline-offset-[0.75px] outline-black/15",
          profileSizes[size].content,
          contentClassName
        )}
      />
      <AvatarPrimitive.Fallback
        className={cn(
          "flex size-full items-center justify-center rounded-full bg-muted font-semibold text-muted-foreground ring-1 ring-border",
          profileSizes[size].content,
          profileSizes[size].initials,
          contentClassName
        )}
      >
        <span className="sr-only">{alt}</span>
        {initials ? (
          <span aria-hidden>{initials}</span>
        ) : (
          (placeholder ?? (
            <PlaceholderIcon
              aria-hidden
              className={cn(
                "text-neutral-400 dark:text-neutral-500",
                profileSizes[size].icon
              )}
            />
          ))
        )}
      </AvatarPrimitive.Fallback>
      {status ? (
        <AvatarOnlineIndicator
          size={indicatorSize}
          status={status}
          className={profileSizes[size].badge}
        />
      ) : verified ? (
        <VerifiedTick
          size={indicatorSize}
          className={cn("absolute", profileSizes[size].badge)}
        />
      ) : (
        badge
      )}
      {children}
    </AvatarPrimitive.Root>
  )
}
export { AvatarProfilePhoto }
export type { AvatarProfilePhotoProps }
