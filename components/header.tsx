"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-playfair font-medium text-primary">Quality</span>
              <span className="text-2xl font-playfair font-medium text-foreground ml-1">Marketing</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/about" ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/services" ? "text-primary" : "text-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/portfolio" ? "text-primary" : "text-foreground"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/blog" ? "text-primary" : "text-foreground"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/contact" ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />

            <Link
              href="/contact"
              className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Book a Call
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-1 bg-background border-b border-border">
            <Link
              href="/"
              className={`block py-2 text-base font-medium ${pathname === "/" ? "text-primary" : "text-foreground"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block py-2 text-base font-medium ${
                pathname === "/about" ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block py-2 text-base font-medium ${
                pathname === "/services" ? "text-primary" : "text-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`block py-2 text-base font-medium ${
                pathname === "/portfolio" ? "text-primary" : "text-foreground"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className={`block py-2 text-base font-medium ${
                pathname === "/blog" ? "text-primary" : "text-foreground"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`block py-2 text-base font-medium ${
                pathname === "/contact" ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="mt-4 block w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
