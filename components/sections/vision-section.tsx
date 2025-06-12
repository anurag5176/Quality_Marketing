"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="section-padding bg-navy text-offwhite relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/5"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm uppercase tracking-wider text-lightgray mb-3"
            >
              From Vision To Visibility
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg mb-6"
            >
              Transform Your Brand's Digital Presence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-md text-lightgray mb-8"
            >
              In Today's Digital Landscape, Your Online Presence Is Often The First Impression Potential Customers Have
              Of Your Brand. At Quality Marketing, We Understand The Importance Of Making That Impression Count.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="body-md text-lightgray mb-8"
            >
              Our Team Of Experts Works Closely With You To Understand Your Vision, Goals, and Target Audience. We Then
              Craft A Comprehensive Digital Strategy That Elevates Your Brand and Drives Measurable Results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contact" className="btn-primary bg-offwhite text-navy hover:bg-white">
                Start Your Journey
              </Link>
            </motion.div>
          </div>

          <motion.div style={{ y, opacity }} className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/vision-image.jpg"
              alt="Digital transformation visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
