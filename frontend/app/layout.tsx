import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LMS Portal - Learning Management System",
  description: "Advanced Learning Management System with interactive features",
    generator: 'nextjs.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          themes={["light", "dark", "blue", "purple", "green", "orange", "pink", "yellow"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
