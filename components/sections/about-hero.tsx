"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-offwhite">
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm uppercase tracking-wider text-navy/70 mb-3"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            Experience Quality Marketing
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8"
          >
            <blockquote className="text-2xl md:text-3xl font-display italic text-navy">
              "Great things in business are never done by one person, they're done by a team of people."
            </blockquote>
            <p className="text-navy/70 text-center mt-4">And we are the team you need for your business.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
