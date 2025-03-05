"use client"

import { ThemeToggle } from "@/components/ThemeToggle"
import { ThemeDemo } from "@/components/ThemeDemo"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-card text-card-foreground">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Theme Toggle Demo</h1>
          <ThemeToggle />
        </div>

        <p className="text-muted-foreground mb-4">
          This demo showcases a theme toggle implementation using React Context API and Tailwind CSS.
        </p>

        <div className="p-4 rounded-md bg-muted text-muted-foreground">
          <h2 className="text-lg font-semibold mb-2">Features:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Global theme state with Context API</li>
            <li>Debounced theme toggle to prevent rapid updates</li>
            <li>Persistent theme preference with localStorage</li>
            <li>System preference detection</li>
            <li>Smooth theme transitions</li>
          </ul>
        </div>

        <ThemeDemo />
      </div>
    </main>
  )
}

