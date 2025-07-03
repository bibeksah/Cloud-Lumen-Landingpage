import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&>svg]:!text-current [&_svg]:!text-current",
  {
    variants: {
      variant: {
        default:
          "bg-[#133644] text-white hover:bg-[#133644]/90 dark:bg-[#9AD3F1] dark:text-[#133644] dark:hover:bg-[#9AD3F1]/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#133644] text-[#133644] hover:bg-[#133644]/10 hover:text-[#133644] dark:border-[#9AD3F1] dark:text-[#9AD3F1] dark:hover:bg-[#9AD3F1]/20 dark:hover:text-white",
        secondary:
          "bg-[#9AD3F1] text-[#133644] hover:bg-[#9AD3F1]/80 dark:bg-[#133644] dark:text-[#9AD3F1] dark:hover:bg-[#133644]/90",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:text-white dark:hover:bg-white/10",
        link: "text-[#133644] underline-offset-4 hover:underline dark:text-[#9AD3F1]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
