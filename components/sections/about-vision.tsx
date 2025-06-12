"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutVision() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm uppercase tracking-wider text-navy/70 mb-3"
            >
            
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg mb-6 text-navy"
            >
              Our Passionate Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-md text-navy/70 mb-6"
            >
              Our team at Quality Marketing is passionate about what we do. We bring enthusiasm and dedication to every project, ensuring that your marketing needs are met with creativity and strategy.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px] rounded-2xl overflow-hidden pt-12"
          >
            <Image
              src="/images/About_Us.webp"
              alt="Our Vision"
              fill
              className="object-cover object-left-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
