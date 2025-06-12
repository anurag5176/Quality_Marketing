"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CalendarDays } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link href="/contact">
            <Button size="lg" className="shadow-lg gap-2">
              <CalendarDays className="h-5 w-5" />
              Book a Free Consultation
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
