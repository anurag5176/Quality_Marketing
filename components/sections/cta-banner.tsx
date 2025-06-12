"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface CTABannerProps {
  title: string
  subtitle?: string
  ctaText: string
  ctaLink: string
}

export default function CTABanner({ title, subtitle, ctaText, ctaLink }: CTABannerProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">{title}</h2>
          {subtitle && <p className="text-lg text-white/80 mb-8">{subtitle}</p>}
          <Link href={ctaLink}>
            <Button variant="accent" size="lg" className="font-accent">
              {ctaText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
