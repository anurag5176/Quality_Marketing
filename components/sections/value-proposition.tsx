"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart3, BrainCircuit, Palette, Users } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"

export default function ValueProposition() {
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
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Elevate Your Brand With Our Expertise"
          description="We Combine Strategic Thinking, Creative Excellence, and Data-Driven Insights To Deliver Marketing Solutions That Drive Results"
          alignment="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={item} className="bg-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <BrainCircuit className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Strategic Approach</h3>
            <p className="text-muted-foreground mb-4">
              We develop tailored strategies based on thorough research and analysis to achieve your business goals.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Creative Excellence</h3>
            <p className="text-muted-foreground mb-4">
              Our creative team brings innovative ideas and exceptional execution to every project we undertake.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Data-Driven Insights</h3>
            <p className="text-muted-foreground mb-4">
              We leverage analytics and insights to inform our strategies and continuously optimize for better results.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-card p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Dedicated Team</h3>
            <p className="text-muted-foreground mb-4">
              Our Team Of Specialists Brings Diverse Expertise and A Commitment To Excellence To Every Project.
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="group">
            Learn More About Our Approach
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
