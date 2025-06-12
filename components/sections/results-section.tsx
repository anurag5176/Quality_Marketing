"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} className="section-padding bg-navy text-offwhite relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y }} className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/results-image.jpg"
              alt="Marketing results visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm uppercase tracking-wider text-lightgray mb-3"
            >
              Results-Oriented
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg mb-6"
            >
              Driving Measurable Success
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-md text-lightgray mb-8"
            >
              At Quality Marketing, We're Committed To Delivering Results That Make A Real Difference To Your Business.
              Our Data-Driven Approach Ensures That Every Strategy We Implement Is Measured, Analyzed, and Optimized For
              Maximum Impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="body-md text-lightgray mb-8"
            >
              We Believe In Transparency and Accountability, Providing Regular Reports That Clearly Demonstrate The
              Value We're Adding To Your Business. Our Success Is Measured By Your Success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <p className="text-4xl font-display font-bold text-offwhite mb-2">250+</p>
                <p className="text-lightgray">Successful Projects</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-offwhite mb-2">98%</p>
                <p className="text-lightgray">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-offwhite mb-2">15+</p>
                <p className="text-lightgray">Industry Awards</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-offwhite mb-2">40%</p>
                <p className="text-lightgray">Average ROI Increase</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
