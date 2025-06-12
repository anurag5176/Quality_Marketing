"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm uppercase tracking-wider text-navy/70 mb-3"
            >
              From Vision to Visibility
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg mb-6 text-navy"
            >
              Innovative Solutions for Your Brand
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-md text-gray-600 mb-8"
            >
              We're not your average digital marketing agency. We're a team of passionate creators, strategists, and
              problem-solvers based in Pune, helping brands grow smarter in a fast-paced digital world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/about" className="btn-primary">
                More About Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="relative h-[500px] rounded-2xl overflow-hidden perspective"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-transparent rounded-2xl"></div>
            <Image
              src="/images/Home_Page.webp"
              alt="Quality Marketing team working"
              fill
              className="object-cover"
            />

            {/* Floating quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute bottom-8 left-8 right-8 glass-card p-8 m-4"
            >
              <p className="text-lg font-medium text-navy italic">
                "Great things in business are never done by one person, they're done by a team of people."
              </p>
              <p className="mt-2 text-navy/70">And we are the team you need for your business.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
