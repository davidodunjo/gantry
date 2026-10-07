import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import {
  AppleLogo,
  DribbleLogo,
  FacebookLogo,
  FigmaLogo,
  FigmaLogoOutlined,
  GoogleLogo,
  TwitterLogo,
} from "@/components/ui/social-logos"

const providers = {
  google: { name: "Google", logo: GoogleLogo },
  facebook: { name: "Facebook", logo: FacebookLogo },
  apple: { name: "Apple", logo: AppleLogo },
  twitter: { name: "X", logo: TwitterLogo },
  figma: { name: "Figma", logo: FigmaLogo },
  dribbble: { name: "Dribbble", logo: DribbleLogo },
}

type SocialButtonProps = Omit<ButtonProps, "size" | "variant"> & {
  provider: keyof typeof providers
  theme?: "gray" | "color" | "brand"
  size?: "md" | "lg"
  iconOnly?: boolean
}

function SocialButton(props: SocialButtonProps) {
  const {
    provider,
    theme = "gray",
    size = "lg",
    iconOnly = false,
    children,
    className,
    ...rest
  } = props
  const { name, logo } = providers[provider]
  const Logo =
    provider === "figma" && theme === "gray" ? FigmaLogoOutlined : logo
  const solid = theme === "brand" && provider !== "google"
  const colorful = theme !== "gray" && (!solid || provider === "figma")

  return (
    <Button
      {...rest}
      data-slot="social-button"
      variant={solid ? "default" : "outline"}
      size={iconOnly ? "icon-lg" : "lg"}
      noTextPadding
      aria-label={
        rest["aria-label"] ?? (iconOnly ? `Continue with ${name}` : undefined)
      }
      className={cn(
        "[&>span>svg]:opacity-100!",
        !solid && "text-neutral-700 dark:text-neutral-300",
        size === "md"
          ? "h-10 gap-2 px-3.5 text-sm"
          : "h-11 gap-2.5 px-4 text-base",
        iconOnly && (size === "md" ? "size-10 p-0" : "size-11 p-0"),
        solid && "bg-black text-white [--button-hover:#171717]",
        solid &&
          provider === "facebook" &&
          "bg-[#1877F2] [--button-hover:#0C63D4]",
        solid &&
          provider === "dribbble" &&
          "bg-[#EA4C89] [--button-hover:#E62872]",
        className
      )}
    >
      <Logo
        colorful={colorful || undefined}
        aria-hidden="true"
        className={cn(
          size === "md" ? "size-4" : "size-5",
          theme === "gray" &&
            "text-neutral-400 group-hover/button:text-neutral-500 dark:text-neutral-500 dark:group-hover/button:text-neutral-400"
        )}
      />
      {!iconOnly && (children ?? `Continue with ${name}`)}
    </Button>
  )
}

export { SocialButton, type SocialButtonProps }
