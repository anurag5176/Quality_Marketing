"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { services } from "@/lib/data"
import ParticleBurst from "@/components/effects/particle-burst"

interface ServicesGridProps {
  featured?: boolean
}

export default function ServicesGrid({ featured = false }: ServicesGridProps) {
  // If featured is true, show only the first 6 services
  const servicesToShow = featured ? services.slice(0, 6) : services

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Marketing Solutions"
          description="We offer a full spectrum of marketing services designed to help your business stand out and achieve your goals"
          alignment="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesToShow.map((service, index) => (
            <motion.div key={service.id} variants={item}>
              <Link href={`/services#${service.id}`} className="card-3d block h-full">
                <div className="card-3d-content glassmorphism p-6 rounded-lg border border-[rgba(157,0,255,0.2)] h-full flex flex-col relative overflow-hidden group transition-all duration-300 mb-6">
                  {/* Purple glow effect in the background */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purpleAccent to-blueAccent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

                  {/* 3D Icon with floating animation */}
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purpleAccent to-blueAccent opacity-20 rounded-full blur-md"></div>
                    <div className="transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold tracking-tight mb-3 group-hover:text-gradient transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-textGrey mb-4 flex-1 leading-relaxed font-sans">{service.description}</p>
                  <div id={`service-link-${index}`} className="relative">
                    <div className="flex items-center font-accent text-purpleAccent tracking-wider text-sm uppercase group-hover:clip-text-gradient">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    <ParticleBurst id={`service-link-${index}`} particleCount={8} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {featured && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              id="view-all-services"
              className="inline-flex items-center font-accent text-purpleAccent hover:text-purpleAccent/80 tracking-wider uppercase transition-all duration-300 relative"
            >
              <span className="clip-text-gradient">View All Services</span>
              <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <ParticleBurst id="view-all-services" particleCount={10} />
          </div>
        )}
      </div>
    </section>
  )
}
