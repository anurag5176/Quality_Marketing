"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  subtitle: string
  title: string
  description?: string
  alignment?: "left" | "center" | "right"
}

export default function SectionHeading({ subtitle, title, description, alignment = "left" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <div className={`max-w-3xl ${alignmentClasses[alignment]}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="tag mb-3 inline-block">{subtitle}</span>
        <h2 className="section-heading">{title}</h2>
        {description && <p className="text-lg text-muted-foreground mt-4">{description}</p>}
      </motion.div>
    </div>
  )
}
