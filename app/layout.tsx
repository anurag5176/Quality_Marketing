import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import RippleEffect from "@/components/ui/ripple-effect"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-clash-display",
})

export const metadata: Metadata = {
  title: "Quality Marketing | Innovative Marketing Solutions",
  description:
    "Turning your business struggles into success stories through strategy, creativity, and data-driven execution.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <RippleEffect />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
