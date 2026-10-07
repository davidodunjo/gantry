import { useId, useRef, useState, type ReactNode } from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"
import { Check, SearchLg, XClose } from "@untitledui/icons"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  ComboboxContent,
  ComboboxList,
  ComboboxTrigger,
  ComboboxChips,
  ComboboxChip,
} from "@/components/ui/combobox"
import { cn } from "@/lib/utils"

type MultiSelectOption = {
  value: string
  label: string
  description?: string
  avatarUrl?: string
  icon?: ReactNode
  disabled?: boolean
}

type MultiSelectProps = {
  options: MultiSelectOption[]
  label: string
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  placeholder?: string
  hint?: string
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  readOnly?: boolean
  invalid?: boolean
  required?: boolean
  name?: string
  id?: string
  className?: string
  showSearch?: boolean
  showFooter?: boolean
  showTags?: boolean
  supportingText?: ReactNode
}

function MultiSelect(props: MultiSelectProps) {
  const {
    options,
    label,
    value,
    defaultValue = [],
    onValueChange,
    placeholder = "Select options",
    hint,
    size = "md",
    disabled = false,
    readOnly = false,
    invalid = false,
    required = false,
    name,
    id: suppliedId,
    className,
    showSearch = true,
    showFooter = true,
    showTags = false,
    supportingText,
  } = props
  const generatedId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [query, setQuery] = useState("")
  const selected = value ?? internalValue
  const id = suppliedId ?? generatedId
  const optionMap = new Map(options.map((option) => [option.value, option]))
  const editable = !disabled && !readOnly

  function handleValueChange(next: string[]) {
    if (!editable) return
    if (value === undefined) setInternalValue(next)
    onValueChange?.(next)
  }

  function handleReset() {
    handleValueChange(selected.filter((item) => optionMap.get(item)?.disabled))
  }

  function handleSelectAll() {
    handleValueChange([
      ...new Set([
        ...selected,
        ...options
          .filter((option) => !option.disabled)
          .map((option) => option.value),
      ]),
    ])
  }

  return (
    <div
      data-slot="multi-select"
      className={cn("flex w-full flex-col gap-1.5", className)}
    >
      <label id={`${id}-label`} htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <ComboboxPrimitive.Root
        multiple
        items={options.map((option) => option.value)}
        itemToStringLabel={(item) => optionMap.get(item)?.label ?? item}
        filter={(item, search) => {
          const option = optionMap.get(item)
          return `${option?.label ?? item} ${option?.description ?? ""}`
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        }}
        value={selected}
        onValueChange={handleValueChange}
        inputValue={query}
        onInputValueChange={setQuery}
        onOpenChange={(open) => {
          if (!open) setQuery("")
        }}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        name={name}
      >
        <ComboboxTrigger
          id={id}
          aria-labelledby={`${id}-label`}
          aria-describedby={hint ? `${id}-hint` : undefined}
          aria-invalid={invalid || undefined}
          className={cn(
            "flex w-full items-center justify-between gap-2 rounded-lg bg-background px-3 text-start shadow-xs ring-1 ring-input outline-none ring-inset hover:ring-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive data-popup-open:ring-2 data-popup-open:ring-foreground",
            size === "sm"
              ? "h-9 text-sm"
              : size === "md"
                ? "h-10 text-base [&>svg]:size-5"
                : "h-11 px-3.5 text-base [&>svg]:size-5"
          )}
        >
          <span
            className={cn(
              "truncate font-medium",
              !selected.length && "font-normal text-muted-foreground"
            )}
          >
            {selected.length ? `${selected.length} selected` : placeholder}
            {selected.length > 0 && supportingText && (
              <span className="ml-1.5 font-normal text-muted-foreground">
                {supportingText}
              </span>
            )}
          </span>
        </ComboboxTrigger>
        <ComboboxContent
          initialFocus={inputRef}
          className="flex flex-col motion-reduce:animate-none"
        >
          {!showSearch && (
            <ComboboxPrimitive.Input
              ref={inputRef}
              aria-label={label}
              readOnly
              className="sr-only"
            />
          )}
          {showSearch && (
            <div
              className={cn(
                "flex shrink-0 items-center gap-2 border-b px-3",
                size === "sm"
                  ? "py-3"
                  : size === "md"
                    ? "py-2.5"
                    : "px-3.5 py-3"
              )}
            >
              <SearchLg
                aria-hidden="true"
                className={cn(
                  "shrink-0 text-muted-foreground",
                  size === "sm" ? "size-4" : "size-5"
                )}
              />
              <ComboboxPrimitive.Input
                ref={inputRef}
                aria-label={`Search ${label}`}
                placeholder="Search"
                className={cn(
                  "min-w-0 flex-1 bg-transparent outline-none",
                  size === "sm" ? "text-sm" : "text-base"
                )}
              />
            </div>
          )}
          <ComboboxPrimitive.Empty className="flex flex-col items-center gap-3 p-4 text-center text-sm empty:hidden">
            <span className="flex size-8 items-center justify-center rounded-lg bg-background shadow-xs ring-1 ring-input ring-inset">
              <SearchLg
                aria-hidden="true"
                className="size-4 text-muted-foreground"
              />
            </span>
            <p className="font-semibold">No results found</p>
            <p className="text-muted-foreground">
              Try a different search term.
            </p>
            {query && (
              <Button
                variant="link"
                size="sm"
                onClick={() => {
                  setQuery("")
                  inputRef.current?.focus()
                }}
              >
                Clear search
              </Button>
            )}
          </ComboboxPrimitive.Empty>
          <ComboboxList
            aria-label={label}
            className={cn(
              size === "sm"
                ? "max-h-68"
                : size === "md"
                  ? "max-h-76"
                  : "max-h-92"
            )}
          >
            {(item: string) => {
              const option = optionMap.get(item)
              if (!option) return null
              return (
                <ComboboxPrimitive.Item
                  key={item}
                  value={item}
                  disabled={option.disabled}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-start font-medium outline-none data-highlighted:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50",
                    size === "sm"
                      ? "min-h-9 text-sm"
                      : size === "md"
                        ? "min-h-10 text-base"
                        : "min-h-11 py-2.5 text-base"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex size-4 shrink-0 items-center justify-center rounded bg-background ring-1 ring-input ring-inset",
                      selected.includes(item) &&
                        "bg-foreground text-background ring-foreground"
                    )}
                  >
                    <ComboboxPrimitive.ItemIndicator>
                      <Check className="size-3" />
                    </ComboboxPrimitive.ItemIndicator>
                  </span>
                  {option.avatarUrl ? (
                    <Avatar size="xs">
                      <AvatarImage src={option.avatarUrl} alt="" />
                      <AvatarFallback>
                        {option.label.slice(0, 1)}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    option.icon && (
                      <span
                        aria-hidden="true"
                        className="flex size-5 shrink-0 items-center justify-center [&_svg]:size-5"
                      >
                        {option.icon}
                      </span>
                    )
                  )}
                  <span className="flex min-w-0 items-center gap-1.5">
                    <span className="shrink-0">{option.label}</span>
                    {option.description && (
                      <span className="truncate font-normal text-muted-foreground">
                        {option.description}
                      </span>
                    )}
                  </span>
                </ComboboxPrimitive.Item>
              )
            }}
          </ComboboxList>
          {showFooter && (
            <div className="flex justify-between gap-3 border-t p-3">
              <Button
                variant="outline"
                size={size === "sm" ? "xs" : "sm"}
                disabled={
                  !editable ||
                  !selected.some((item) => !optionMap.get(item)?.disabled)
                }
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                variant="outline"
                size={size === "sm" ? "xs" : "sm"}
                disabled={
                  !editable ||
                  options.every(
                    (option) =>
                      option.disabled || selected.includes(option.value)
                  )
                }
                onClick={handleSelectAll}
              >
                Select all
              </Button>
            </div>
          )}
        </ComboboxContent>
        {showTags && selected.length > 0 && (
          <ComboboxChips className="min-h-0 bg-transparent p-0 shadow-none ring-0 focus-within:ring-0">
            {selected.map((item) => (
              <ComboboxChip
                key={item}
                showRemove={false}
                className="h-6 rounded-md bg-background px-1.5 text-sm ring-1 ring-input ring-inset"
              >
                {optionMap.get(item)?.label ?? item}
                <ComboboxPrimitive.ChipRemove
                  aria-label={`Remove ${optionMap.get(item)?.label ?? item}`}
                  disabled={!editable || optionMap.get(item)?.disabled}
                  className="rounded p-0.5 text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-foreground disabled:opacity-40"
                >
                  <XClose aria-hidden="true" className="size-3" />
                </ComboboxPrimitive.ChipRemove>
              </ComboboxChip>
            ))}
          </ComboboxChips>
        )}
      </ComboboxPrimitive.Root>
      {hint && (
        <p
          id={`${id}-hint`}
          className={cn(
            "text-sm",
            invalid ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {hint}
        </p>
      )}
    </div>
  )
}

export { MultiSelect, type MultiSelectProps, type MultiSelectOption }
