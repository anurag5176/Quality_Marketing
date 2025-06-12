"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, BarChart3, PenTool, Monitor, Layers, TrendingUp, Video, FileText, ImageIcon } from "lucide-react"
import Card3D from "@/components/ui/card-3d"

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Marketing",
      description:
        "Data-driven, creative, and customized digital marketing strategies to boost visibility, traffic, and conversions.",
      link: "/services#digital-marketing",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Branding Strategy",
      description:
        "Refine your brand identity with market research, positioning, tone of voice, and visual storytelling.",
      link: "/services#branding",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Social Media",
      description:
        "Build engagement and trust through content calendars, community management, and platform strategies.",
      link: "/services#social-media",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Website Development",
      description: "Responsive, fast, SEO-optimized websites that reflect your brand and drive results.",
      link: "/services#website",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "UI/UX",
      description: "Intuitive and engaging designs for seamless user experiences and higher retention.",
      link: "/services#ui-ux",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Performance Marketing",
      description: "Targeted ad campaigns optimized for maximum ROI across platforms like Google Ads and Meta.",
      link: "/services#performance",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Production",
      description: "Brand films, product videos, reels, and testimonials, crafted by our in-house video team.",
      link: "/services#video",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Blog Integration",
      description: "SEO-optimized blog strategies that build authority and drive organic traffic.",
      link: "/services#blog",
    },
    {
      icon: <ImageIcon className="h-8 w-8" />,
      title: "Content Creation",
      description: "Graphics, animations, copywriting, and reels—branded content designed to convert.",
      link: "/services#content",
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } },
  }

  return (
    <section className="py-20 md:py-32 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm uppercase tracking-wider text-navy/70 mb-3"
          >
            Our Key Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-lg mb-4 text-navy"
          >
            We Don't Just Market, We Build Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-md text-gray-600"
          >
            At Quality Marketing, we blend fresh ideas with proven strategy to deliver powerful marketing solutions in
            Pune and beyond.
          </motion.p>
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card3D icon={service.icon} title={service.title} description={service.description} link={service.link} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
