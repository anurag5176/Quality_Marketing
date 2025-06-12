"use client"

import { motion } from "framer-motion"
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-navy" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that contribute to your business goals.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-navy" />,
      title: "Innovation",
      description: "We stay at the forefront of digital marketing trends and technologies.",
    },
    {
      icon: <Users className="h-8 w-8 text-navy" />,
      title: "Collaboration",
      description: "We work closely with our clients, considering them partners in the process.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-navy" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution.",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm uppercase tracking-wider text-navy/70 mb-3"
          >
            What Sets Us Apart
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-lg mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-md text-navy/70"
          >
            These principles guide our approach and ensure we deliver exceptional service to our clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 mb-6 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="bg-offwhite rounded-xl p-4 inline-flex mb-4">{value.icon}</div>
              <h3 className="heading-sm mb-2">{value.title}</h3>
              <p className="body-md text-navy/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
