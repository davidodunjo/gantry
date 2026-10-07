import { type ComponentProps, type ComponentType, type ReactNode } from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { Plus, User01 } from "@untitledui/icons"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

type AvatarSize = "xs" | "sm" | "md" | "default" | "lg" | "xl" | "2xl"
type IndicatorSize = AvatarSize | "3xl" | "4xl"
type AvatarProps = AvatarPrimitive.Root.Props & {
  size?: AvatarSize
  src?: string | null
  alt?: string
  initials?: string
  placeholder?: ReactNode
  placeholderIcon?: ComponentType<{ className?: string }>
  rounded?: boolean
  border?: boolean
  focusable?: boolean
  contentClassName?: string
  status?: "online" | "offline"
  verified?: boolean
  count?: number
  badge?: ReactNode
}

function Avatar(props: AvatarProps) {
  const {
    className,
    size = "default",
    src,
    alt,
    initials,
    placeholder,
    placeholderIcon: PlaceholderIcon = User01,
    rounded = true,
    border = false,
    focusable = false,
    contentClassName,
    status,
    verified,
    count,
    badge,
    children,
    ...rest
  } = props
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={(state) =>
        cn(
          "group/avatar relative flex size-10 shrink-0 rounded-full select-none data-[size=2xl]:size-16 data-[size=lg]:size-12 data-[size=sm]:size-8 data-[size=xl]:size-14 data-[size=xs]:size-6",
          !rounded &&
            "rounded-[7px] [&>[data-slot=avatar-fallback]]:rounded-md [&>[data-slot=avatar-image]]:rounded-md",
          border &&
            "bg-background p-px ring-1 ring-border data-[size=2xl]:p-0.5 data-[size=lg]:p-[1.5px] data-[size=xl]:p-0.5",
          focusable &&
            "group-focus-visible:outline-2 group-focus-visible:outline-offset-2 group-focus-visible:outline-ring",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    >
      {children ?? (
        <>
          <AvatarImage
            src={src ?? undefined}
            alt={alt ?? ""}
            className={contentClassName}
          />
          <AvatarFallback className={contentClassName}>
            <span className="sr-only">{alt}</span>
            {initials ? (
              <span aria-hidden>{initials}</span>
            ) : (
              (placeholder ?? (
                <PlaceholderIcon
                  aria-hidden
                  className="size-6 text-neutral-400 group-data-[size=2xl]/avatar:size-8 group-data-[size=lg]/avatar:size-7 group-data-[size=sm]/avatar:size-5 group-data-[size=xl]/avatar:size-8 group-data-[size=xs]/avatar:size-4 dark:text-neutral-500"
                />
              ))
            )}
          </AvatarFallback>
        </>
      )}
      {status ? (
        <AvatarOnlineIndicator size={size} status={status} />
      ) : verified ? (
        <VerifiedTick size={size} className="absolute end-0 bottom-0" />
      ) : count !== undefined ? (
        <AvatarCount count={count} />
      ) : (
        badge
      )}
    </AvatarPrimitive.Root>
  )
}

type AvatarImageProps = AvatarPrimitive.Image.Props
function AvatarImage(props: AvatarImageProps) {
  const { className, ...rest } = props
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={(state) =>
        cn(
          "aspect-square size-full rounded-full object-cover outline-[0.5px] -outline-offset-[0.5px] outline-black/15",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type AvatarFallbackProps = AvatarPrimitive.Fallback.Props
function AvatarFallback(props: AvatarFallbackProps) {
  const { className, ...rest } = props
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={(state) =>
        cn(
          "flex size-full items-center justify-center rounded-full bg-muted text-base font-semibold text-muted-foreground ring-1 ring-border ring-inset group-data-[size=2xl]/avatar:text-2xl group-data-[size=lg]/avatar:text-lg group-data-[size=sm]/avatar:text-sm group-data-[size=xl]/avatar:text-xl group-data-[size=xs]/avatar:text-xs",
          typeof className === "function" ? className(state) : className
        )
      }
      {...rest}
    />
  )
}

type AvatarBadgeProps = ComponentProps<"span">
function AvatarBadge(props: AvatarBadgeProps) {
  const { className, ...rest } = props
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute end-0 bottom-0 z-10 inline-flex size-3 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none group-data-[size=lg]/avatar:size-3.5 group-data-[size=sm]/avatar:size-2 group-data-[size=default]/avatar:[&>svg]:size-2 group-data-[size=lg]/avatar:[&>svg]:size-2 group-data-[size=md]/avatar:[&>svg]:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        className
      )}
      {...rest}
    />
  )
}

type AvatarGroupProps = ComponentProps<"div">
function AvatarGroup(props: AvatarGroupProps) {
  const { className, ...rest } = props
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex items-center -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      )}
      {...rest}
    />
  )
}

type AvatarGroupCountProps = ComponentProps<"div">
function AvatarGroupCount(props: AvatarGroupCountProps) {
  const { className, ...rest } = props
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=2xl]/avatar-group:size-16 group-has-data-[size=lg]/avatar-group:size-12 group-has-data-[size=sm]/avatar-group:size-8 group-has-data-[size=xl]/avatar-group:size-14 group-has-data-[size=xs]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...rest}
    />
  )
}

const statusSizes = {
  xs: "size-1.5",
  sm: "size-2",
  md: "size-2.5",
  default: "size-2.5",
  lg: "size-3",
  xl: "size-3.5",
  "2xl": "size-4",
  "3xl": "size-4.5",
  "4xl": "size-5",
}
type AvatarOnlineIndicatorProps = ComponentProps<"span"> & {
  size?: IndicatorSize
  status: "online" | "offline"
}
function AvatarOnlineIndicator(props: AvatarOnlineIndicatorProps) {
  const { size = "md", status, className, ...rest } = props
  return (
    <span
      className={cn(
        "absolute end-0 bottom-0 z-10 rounded-full shadow-[inset_0_1px_1px_#ffffff40] ring-[1.5px] ring-background",
        status === "online" ? "bg-foreground" : "bg-muted-foreground/40",
        statusSizes[size],
        className
      )}
      {...rest}
    >
      <span className="sr-only">
        {status === "online" ? "Online" : "Offline"}
      </span>
    </span>
  )
}

const companySizes = {
  xs: "size-2",
  sm: "size-3",
  md: "size-3.5",
  default: "size-3.5",
  lg: "size-4",
  xl: "size-4.5",
  "2xl": "size-5",
}
type AvatarCompanyIconProps = {
  size?: AvatarSize
  src?: string
  alt: string
  fallback?: ReactNode
  className?: string
}
function AvatarCompanyIcon(props: AvatarCompanyIconProps) {
  const { size = "md", src, alt, fallback, className } = props
  return (
    <AvatarPrimitive.Root
      className={cn(
        "absolute -end-0.5 -bottom-0.5 z-10 rounded-full bg-background ring-[1.5px] ring-background",
        companySizes[size],
        className
      )}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="size-full rounded-full object-cover"
      />
      <AvatarPrimitive.Fallback
        className="flex size-full items-center justify-center rounded-full bg-muted text-[0.55em] font-semibold text-foreground"
        aria-label={alt}
      >
        {fallback ?? alt.slice(0, 1)}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}

type AvatarCountProps = ComponentProps<"span"> & { count: number }
function AvatarCount(props: AvatarCountProps) {
  const { count, className, ...rest } = props
  return (
    <span
      className={cn(
        "absolute -end-1 -top-1 z-10 flex h-4 min-w-4 items-center justify-center rounded-full bg-background px-1 text-[10px] font-medium text-foreground ring-1 ring-border",
        className
      )}
      {...rest}
    >
      {count > 99 ? "99+" : Math.max(0, count)}
    </span>
  )
}

type AvatarAddButtonProps = Omit<ButtonPrimitive.Props, "size" | "title"> & {
  size?: "xs" | "sm" | "md"
  title?: string
}
function AvatarAddButton(props: AvatarAddButtonProps) {
  const { size = "md", title = "Add user", className, ...rest } = props
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <ButtonPrimitive
            {...rest}
            aria-label={rest["aria-label"] ?? title}
            className={(state) =>
              cn(
                "relative flex shrink-0 items-center justify-center rounded-full border border-dashed border-input bg-background text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50",
                size === "xs" ? "size-6" : size === "sm" ? "size-8" : "size-10",
                typeof className === "function" ? className(state) : className
              )
            }
          >
            <Plus aria-hidden className={size === "md" ? "size-5" : "size-4"} />
          </ButtonPrimitive>
        }
      />
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  )
}
const verifiedSizes = {
  xs: "size-2.5",
  sm: "size-3",
  md: "size-3.5",
  default: "size-3.5",
  lg: "size-4",
  xl: "size-4.5",
  "2xl": "size-5",
  "3xl": "size-6",
  "4xl": "size-8",
}
type VerifiedTickProps = ComponentProps<"svg"> & { size?: IndicatorSize }
function VerifiedTick(props: VerifiedTickProps) {
  const { size = "md", className, ...rest } = props
  return (
    <svg
      aria-label="Verified"
      className={cn(
        "z-10 text-foreground [&>path:last-child]:fill-background",
        verifiedSizes[size],
        className
      )}
      viewBox="0 0 10 10"
      fill="none"
      {...rest}
    >
      <path
        d="M7.72237 1.77098C7.81734 2.00068 7.99965 2.18326 8.2292 2.27858L9.03413 2.61199C9.26384 2.70714 9.44635 2.88965 9.5415 3.11936C9.63665 3.34908 9.63665 3.60718 9.5415 3.83689L9.20833 4.64125C9.11313 4.87106 9.113 5.12943 9.20863 5.35913L9.54122 6.16325C9.58839 6.27702 9.61268 6.39897 9.6127 6.52214C9.61272 6.6453 9.58847 6.76726 9.54134 6.88105C9.4942 6.99484 9.42511 7.09823 9.33801 7.18531C9.2509 7.27238 9.14749 7.34144 9.03369 7.38854L8.22934 7.72171C7.99964 7.81669 7.81706 7.99899 7.72174 8.22855L7.38833 9.03348C7.29318 9.26319 7.11067 9.4457 6.88096 9.54085C6.65124 9.636 6.39314 9.636 6.16343 9.54085L5.35907 9.20767C5.12935 9.11276 4.87134 9.11295 4.64177 9.20821L3.83684 9.54115C3.60725 9.63608 3.34937 9.636 3.11984 9.54092C2.89032 9.44585 2.70791 9.26356 2.6127 9.03409L2.27918 8.22892C2.18421 7.99923 2.0019 7.81665 1.77235 7.72133L0.967421 7.38792C0.737807 7.29281 0.555355 7.11041 0.460169 6.88083C0.364983 6.65125 0.364854 6.39327 0.45981 6.16359L0.792984 5.35924C0.8879 5.12952 0.887707 4.87151 0.792445 4.64193L0.459749 3.83642C0.41258 3.72265 0.388291 3.60069 0.388272 3.47753C0.388252 3.35436 0.412501 3.2324 0.459634 3.11861C0.506767 3.00482 0.57586 2.90144 0.662965 2.81436C0.75007 2.72728 0.853479 2.65822 0.967283 2.61113L1.77164 2.27795C2.00113 2.18306 2.1836 2.00099 2.27899 1.7717L2.6124 0.966768C2.70755 0.737054 2.89006 0.554547 3.11978 0.459397C3.34949 0.364246 3.60759 0.364246 3.83731 0.459397L4.64166 0.792571C4.87138 0.887487 5.12939 0.887293 5.35897 0.792031L6.16424 0.459913C6.39392 0.364816 6.65197 0.364836 6.88164 0.459968C7.11131 0.555099 7.29379 0.737554 7.38895 0.967208L7.72247 1.77238L7.72237 1.77098Z"
        className="fill-current"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.95829 3.68932C7.02509 3.58439 7.04747 3.45723 7.02051 3.3358C6.99356 3.21437 6.91946 3.10862 6.81454 3.04182C6.70961 2.97502 6.58245 2.95264 6.46102 2.97959C6.33959 3.00655 6.23384 3.08064 6.16704 3.18557L4.33141 6.06995L3.49141 5.01995C3.41375 4.92281 3.30069 4.8605 3.17709 4.84673C3.05349 4.83296 2.92949 4.86885 2.83235 4.94651C2.73522 5.02417 2.67291 5.13723 2.65914 5.26083C2.64536 5.38443 2.68125 5.50843 2.75891 5.60557L4.00891 7.16807C4.0555 7.22638 4.11533 7.27271 4.18344 7.30323C4.25154 7.33375 4.32595 7.34757 4.40047 7.34353C4.47499 7.3395 4.54747 7.31773 4.61188 7.28004C4.67629 7.24234 4.73077 7.18981 4.77079 7.12682L6.95829 3.68932Z"
        fill="white"
      />
    </svg>
  )
}
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarBadge,
  AvatarOnlineIndicator,
  AvatarCompanyIcon,
  AvatarCount,
  AvatarAddButton,
  VerifiedTick,
}
export type { AvatarProps, AvatarSize }
