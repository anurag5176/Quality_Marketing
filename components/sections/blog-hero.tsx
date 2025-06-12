"use client"

import { motion } from "framer-motion"

export default function BlogHero() {
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
            Our Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-xl mb-6"
          >
            Insights & Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-lg text-navy/70"
          >
            Stay Updated With The Latest Digital Marketing Trends, Strategies, and Insights From Our Team of Experts.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
