"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function AboutApproach() {
  const approaches = [
    {
      title: "Strategic Planning",
      description:
        "We begin with thorough research and analysis to develop a comprehensive strategy tailored to your specific goals and target audience.",
    },
    {
      title: "Creative Excellence",
      description:
        "Our creative team brings innovative ideas and exceptional execution to every project, ensuring your brand stands out in a crowded marketplace.",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "We leverage analytics and insights to inform our strategies, measure performance, and continuously optimize for better results.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We believe in constant learning and adaptation, staying ahead of industry trends to provide cutting-edge solutions for our clients.",
    },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-offwhite">
      <div className="container mx-auto px-6 md:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm uppercase tracking-wider text-navy/70 mb-3"
          >
            Our Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-lg mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-md text-navy/70"
          >
            Our methodical approach ensures we deliver exceptional results for every client project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-soft mb-8"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="heading-sm mb-3">{approach.title}</h3>
                  <p className="body-md text-navy/70">{approach.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
