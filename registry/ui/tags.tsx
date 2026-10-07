import {
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  type ImgHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { Check, User01, XClose } from "@untitledui/icons"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tagVariants = cva(
  "group/tag inline-flex w-fit max-w-full shrink-0 items-center gap-1 rounded-md bg-background text-neutral-700 ring-1 ring-input transition-colors ring-inset dark:text-neutral-300",
  {
    variants: {
      size: {
        sm: "gap-1 px-2 py-0.75 text-xs leading-4.5 font-medium",
        md: "gap-1.25 px-2.25 py-0.5 text-sm font-medium",
        lg: "gap-1.5 px-2.5 py-1 text-sm font-medium",
      },
      selected: {
        true: "",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "",
      },
    },
    defaultVariants: { size: "sm", selected: false, disabled: false },
  }
)

type TagSize = NonNullable<VariantProps<typeof tagVariants>["size"]>
type SelectionMode = "none" | "single" | "multiple"

const avatarPadding: Record<TagSize, string> = {
  sm: "pl-1",
  md: "pl-1.25",
  lg: "pl-1.75",
}

const dotPadding: Record<TagSize, string> = {
  sm: "pl-1.5",
  md: "pl-1.75",
  lg: "pl-2.25",
}

const checkboxSize: Record<TagSize, string> = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-4.5",
}

const checkSize: Record<TagSize, string> = {
  sm: "size-2.5",
  md: "size-3",
  lg: "size-3.5",
}

const countSize: Record<TagSize, string> = {
  sm: "px-1 text-xs leading-4.5",
  md: "px-1.25 text-xs leading-4.5",
  lg: "px-1.5 text-sm",
}

type TagGroupContextValue = {
  size: TagSize
  selectionMode: SelectionMode
  selectedIds: string[]
  onSelect: (id: string) => void
}

const TagGroupContext = createContext<TagGroupContextValue>({
  size: "sm",
  selectionMode: "none",
  selectedIds: [],
  onSelect: () => undefined,
})

type TagAvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: ReactNode
}

function TagAvatar(props: TagAvatarProps) {
  const { alt = "", className, fallback, src, ...imageProps } = props
  const [failed, setFailed] = useState(false)

  function handleError() {
    setFailed(true)
  }

  return (
    <span
      className={cn(
        "inline-flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground outline-[0.5px] -outline-offset-[0.5px] outline-black/16",
        className
      )}
    >
      {src && !failed ? (
        <img
          {...imageProps}
          src={src}
          alt={alt}
          className="size-full object-cover"
          onError={handleError}
        />
      ) : (
        (fallback ?? <User01 aria-hidden="true" className="size-3" />)
      )}
    </span>
  )
}

type TagGroupProps = Omit<HTMLAttributes<HTMLFieldSetElement>, "onSelect"> & {
  label: string
  size?: TagSize
  selectionMode?: SelectionMode
  selectedIds?: string[]
  defaultSelectedIds?: string[]
  onSelectedIdsChange?: (ids: string[]) => void
  children: ReactNode
}

function TagGroup(props: TagGroupProps) {
  const {
    children,
    className,
    defaultSelectedIds = [],
    label,
    onSelectedIdsChange,
    selectedIds,
    selectionMode = "none",
    size = "sm",
    ...rest
  } = props
  const [uncontrolledSelectedIds, setUncontrolledSelectedIds] =
    useState(defaultSelectedIds)
  const activeSelectedIds = selectedIds ?? uncontrolledSelectedIds

  function handleSelect(id: string) {
    if (selectionMode === "none") {
      return
    }

    const next =
      selectionMode === "single"
        ? [id]
        : activeSelectedIds.includes(id)
          ? activeSelectedIds.filter((item) => item !== id)
          : [...activeSelectedIds, id]

    if (selectedIds === undefined) {
      setUncontrolledSelectedIds(next)
    }

    onSelectedIdsChange?.(next)
  }

  return (
    <TagGroupContext.Provider
      value={{
        size,
        selectionMode,
        selectedIds: activeSelectedIds,
        onSelect: handleSelect,
      }}
    >
      <fieldset
        {...rest}
        className={cn("flex flex-wrap items-center gap-2", className)}
      >
        <legend className="sr-only">{label}</legend>
        {children}
      </fieldset>
    </TagGroupContext.Provider>
  )
}

type TagProps = Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> & {
  id: string
  children: ReactNode
  size?: TagSize
  selected?: boolean
  selectionMode?: SelectionMode
  onSelect?: (id: string) => void
  onRemove?: (id: string) => void
  disabled?: boolean
  dot?: boolean
  dotClassName?: string
  count?: number
  avatar?: TagAvatarProps
}

function Tag(props: TagProps) {
  const context = useContext(TagGroupContext)
  const {
    avatar,
    children,
    className,
    count,
    disabled = false,
    dot = false,
    dotClassName,
    id,
    onRemove,
    onSelect,
    selected: selectedProp,
    selectionMode: selectionModeProp,
    size: sizeProp,
    ...rest
  } = props
  const size = sizeProp ?? context.size
  const selectionMode = selectionModeProp ?? context.selectionMode
  const selected = selectedProp ?? context.selectedIds.includes(id)
  const select = onSelect ?? context.onSelect
  const selectable = selectionMode !== "none"

  function handleSelectedChange() {
    select(id)
  }

  function handleRemove() {
    onRemove?.(id)
  }

  function handleRemoveKeyDown(event: KeyboardEvent) {
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault()
      handleRemove()
    }
  }

  const content = (
    <>
      {avatar && <TagAvatar {...avatar} />}
      {dot && (
        <span
          aria-hidden="true"
          className={cn(
            "size-2 shrink-0 rounded-full bg-foreground",
            dotClassName
          )}
        />
      )}
      <span className="truncate">{children}</span>
      {typeof count === "number" && (
        <span
          className={cn(
            "rounded-[3px] bg-muted text-center tabular-nums",
            countSize[size]
          )}
        >
          {count}
        </span>
      )}
    </>
  )

  return (
    <div
      {...rest}
      className={cn(
        tagVariants({ size, selected, disabled }),
        avatar && avatarPadding[size],
        dot && dotPadding[size],
        selectable && (size === "md" ? "pl-1" : "pl-1.25"),
        (onRemove || typeof count === "number") && "pr-1",
        className
      )}
    >
      {selectable ? (
        <TogglePrimitive
          type="button"
          disabled={disabled}
          pressed={selected}
          onPressedChange={handleSelectedChange}
          className="inline-flex min-w-0 items-center gap-[inherit] outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-foreground"
        >
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-[3px] border border-input bg-background",
              checkboxSize[size],
              selected && "border-foreground bg-foreground text-background"
            )}
          >
            {selected && (
              <Check aria-hidden="true" className={checkSize[size]} />
            )}
          </span>
          {content}
        </TogglePrimitive>
      ) : (
        content
      )}
      {onRemove && (
        <ButtonPrimitive
          type="button"
          aria-label={`Remove ${typeof children === "string" ? children : "tag"}`}
          disabled={disabled}
          className="inline-flex shrink-0 rounded-[3px] p-0.5 text-neutral-400 outline-none hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-foreground"
          onClick={handleRemove}
          onKeyDown={handleRemoveKeyDown}
        >
          <XClose
            aria-hidden="true"
            className={cn(
              "stroke-[2.86px]",
              size === "lg" ? "size-3.5" : "size-3"
            )}
          />
        </ButtonPrimitive>
      )}
    </div>
  )
}

export {
  Tag,
  TagAvatar,
  TagGroup,
  tagVariants,
  type TagAvatarProps,
  type TagGroupProps,
  type TagProps,
}
