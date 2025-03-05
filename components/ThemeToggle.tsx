"use client"
import { useTheme } from "@/context/ThemeContext"
import { useDebounce } from "@/hooks/useDebounce"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  // Use debounce to prevent rapid state updates
  const debouncedToggle = useDebounce(toggleTheme, 300)

  return (
    <button
      onClick={debouncedToggle}
      className="p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background
        bg-secondary text-secondary-foreground hover:bg-secondary/80"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  )
}

