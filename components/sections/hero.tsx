"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import FloatingShape from "@/components/3d/floating-shape"

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function Hero({ title, subtitle, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: HeroProps) {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-background">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="hero-headline mb-6">{title}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ctaLink}>
                <Button size="lg" className="font-accent">
                  {ctaText}
                </Button>
              </Link>

              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink}>
                  <Button variant="outline" size="lg" className="font-accent">
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
          >
            <FloatingShape />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
