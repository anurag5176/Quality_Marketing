"use client"

import { motion } from "framer-motion"

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm uppercase tracking-wider text-navy/70 mb-3"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            Grow Your Business with Quality Marketing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-lg text-navy/70"
          >
            At Quality Marketing, we don't just offer services—we build partnerships that drive growth, engagement, and real results.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
