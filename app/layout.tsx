import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CuraCare - AI Doctor Booking Platform",
  description:
    "AI-powered voice assistant to help you book doctor appointments with ease. Experience the future of healthcare with our intelligent booking system.",
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
        <ThemeProvider defaultTheme="dark" storageKey="curacare-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
