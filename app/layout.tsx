import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/context/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Theme Toggle Project",
  description: "A React project with theme toggling functionality",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'