import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hotbot-button",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-hotbot-primary bg-transparent text-hotbot-primary hover:bg-hotbot-primary/10",
        secondary: "bg-white/20 text-gray-700 backdrop-blur-sm border-2 border-white/50 hover:bg-white/30",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-hotbot-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-full px-4",
        lg: "h-14 rounded-full px-8 text-lg",
        icon: "h-12 w-12",
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
Button.displayName = "Button"

export { Button, buttonVariants }