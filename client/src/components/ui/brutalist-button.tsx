import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-brutal",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-brutal",
        outline:
          "bg-background hover:bg-accent hover:text-accent-foreground shadow-brutal",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-brutal",
        ghost: "hover:bg-accent hover:text-accent-foreground border-transparent shadow-none active:translate-x-0 active:translate-y-0",
        link: "text-primary underline-offset-4 hover:underline border-transparent shadow-none active:translate-x-0 active:translate-y-0",
        brutal: "bg-white text-black hover:bg-black hover:text-white shadow-brutal hover:shadow-brutal-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const BrutalistButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
BrutalistButton.displayName = "BrutalistButton"

export { BrutalistButton, buttonVariants }
