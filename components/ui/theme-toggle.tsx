"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export function ThemeToggle({ className, variant = "ghost", size = "icon" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
    setCurrentTheme(theme)
  }, [theme])

  if (!mounted) {
    return <div className={cn("h-9 w-9", className)} />
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className={cn("rounded-full transition-colors duration-200", className)}
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} theme`}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#133644] dark:text-white" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#133644] dark:text-[#9AD3F1]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
