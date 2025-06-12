"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface CTASectionProps {
  variant?: "services" | "about"
}

export default function CTASection({ variant }: CTASectionProps) {
  const isServices = variant === "services"
  const isAbout = variant === "about"
  return (
    <section className={`py-20 md:py-32 ${isServices ? '' : 'bg-white'}`} style={{ backgroundColor: isServices ? '#e6e3dc' : undefined }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-lg mb-6 text-navy"
          >
            {isServices
              ? "Start Your Success Story With Us"
              : isAbout
              ? "Contact Us to Get Started"
              : "Let's Get Started"}
          </motion.h2>
          {isAbout && (
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="heading-md mb-2"
            >
              Take Your Brand to the Next Level
            </motion.h3>
          )}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="body-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            {isServices
              ? "Get in touch with us today and let's create marketing that truly makes an impact."
              : isAbout
              ? "Let's connect and start building something impactful together. Reach out to us today, and let's talk."
              : "Ready to solve your business challenges? Let's create a custom marketing plan that works for you. Contact us for a free consultation."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/contact" className="btn-primary">
              {isServices ? "Schedule Your Consultation" : "Connect With Us"}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
