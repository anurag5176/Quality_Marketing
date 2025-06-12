"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ]

  const isActive = (href: string) =>
    href === "/blog" ? pathname.startsWith("/blog") : pathname === href

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
        style={{
          backgroundColor: scrolled ? "#000443" : "transparent",
          color: scrolled ? "white" : "#000443",
          ...(scrolled ? { boxShadow: "0 2px 8px rgba(0,0,0,0.04)" } : {}),
        }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Image
                src="/images/quality-marketing-logo.webp"
                alt="Quality Marketing Logo"
                width={150}
                height={40}
                className="h-14 w-auto max-w-[220px]"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center space-x-8 ${
              scrolled ? "text-white" : "text-[#000443]"
            }`}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? `font-bold border-b-2 border-primary ${
                          scrolled ? "text-white" : "text-[#000443]"
                        }`
                      : ""
                  } ${
                    scrolled
                      ? "text-white hover:text-white"
                      : "text-[#000443] hover:text-[#000443]"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
            >
              <Link
                href="/contact"
                className={`px-6 py-2 rounded-lg font-extrabold transition-all duration-200 border-2 shadow-2xl ${
                  scrolled
                    ? "bg-white text-[#000443] border-white hover:bg-gray-100 hover:text-[#000443]"
                    : "bg-[#000443] text-white border-[#000443] hover:bg-[#222266] hover:text-white"
                }`}
                style={{
                  boxShadow:
                    "0 6px 24px 0 rgba(0,0,0,0.15), 0 2px 8px 0 rgba(0,0,0,0.10)",
                  backgroundColor: scrolled ? "white" : "#000443",
                  color: scrolled ? "#000443" : "white",
                  borderColor: scrolled ? "white" : "#000443",
                } as React.CSSProperties}
              >
                Schedule Your Consultation
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative z-10 p-2 focus:outline-none ${
              scrolled ? "text-white" : "text-[#000443]"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "100vh" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-white z-0 flex items-center justify-center md:hidden"
              >
                <nav className="flex flex-col items-center space-y-8 p-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-xl font-medium ${
                          isActive(item.href)
                            ? "font-bold border-b-2 border-primary text-[#000443]"
                            : "text-navy/70"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}
