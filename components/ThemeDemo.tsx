"use client"
import { useTheme } from "@/context/ThemeContext"

export function ThemeDemo() {
  const { theme } = useTheme()

  return (
    <div className="mt-8 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">
        Current Theme: <span className="font-bold">{theme}</span>
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-md bg-primary text-primary-foreground">Primary Element</div>
        <div className="p-4 rounded-md bg-secondary text-secondary-foreground">Secondary Element</div>
        <div className="p-4 rounded-md bg-accent text-accent-foreground">Accent Element</div>
        <div className="p-4 rounded-md bg-muted text-muted-foreground">Muted Element</div>
      </div>
    </div>
  )
}

