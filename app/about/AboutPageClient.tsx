"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import ProcessStep from "@/components/ui/process-step"
import CTABanner from "@/components/sections/cta-banner"
import { Button } from "@/components/ui/button"

export default function AboutPageClient() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <SectionHeading
              subtitle="About Us"
              title="We're a team of strategic thinkers and creative minds"
              alignment="center"
            />
            <p className="mt-6 text-lg text-muted-foreground">
              Quality Marketing was founded with a simple mission: to help businesses achieve exceptional results
              through strategic marketing solutions. We combine data-driven insights with creative excellence to deliver
              marketing that makes an impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.webp?height=800&width=600"
                alt="Our mission"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Quality Marketing, our mission is to empower businesses with strategic marketing solutions that drive
                meaningful results. We believe in creating authentic connections between brands and their audiences
                through thoughtful, data-driven strategies.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're committed to excellence in every aspect of our work, from the initial strategy development to the
                final execution. Our goal is to be more than just a service provider – we aim to be a trusted partner in
                your brand's growth journey.
              </p>
              <Button variant="outline" size="lg" className="group">
                Learn More about our values
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-6">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Founder's Note
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                "We believe in marketing that makes a difference."
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                When I founded Quality Marketing, I had a vision of creating an agency that would truly understand the
                unique challenges and opportunities that each business faces. Our approach has always been to dig
                deeper, think strategically, and execute flawlessly.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We've built a team of experts who are passionate about what they do and committed to delivering
                exceptional results for our clients. I'm proud of what we've accomplished together, and excited about
                the future as we continue to grow and evolve.
              </p>
              <div className="flex items-center mt-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.webp?height=100&width=100"
                    alt="Jane Smith - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Jane Smith</h3>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image src="/placeholder.webp?height=800&width=600" alt="Founder portrait" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container px-4 md:px-6">
          <SectionHeading
            subtitle="Our Process"
            title="How We Deliver Results"
            description="We follow a proven three-step methodology to ensure your marketing success"
            alignment="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              number="01"
              title="Discover"
              description="We begin with a thorough discovery phase to understand your business, goals, target audience, and competitive landscape."
            />
            <ProcessStep
              number="02"
              title="Strategize"
              description="Based on our insights, we develop a comprehensive marketing strategy tailored to your specific needs and objectives."
            />
            <ProcessStep
              number="03"
              title="Execute"
              description="We implement the strategy with precision, continuously monitor performance, and optimize for maximum results."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading subtitle="Our Team" title="Meet the Experts Behind Our Success" alignment="center" />
            <p className="mt-6 text-lg text-muted-foreground mb-12">
              Our team brings together diverse expertise in marketing, design, technology, and business strategy to
              deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
                  <Image
                    src={`/placeholder.webp?height=200&width=200&text=Team%20Member%20${index}`}
                    alt={`Team Member ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">Team Member {index}</h3>
                <p className="text-primary mb-4">Position Title</p>
                <p className="text-muted-foreground text-sm">
                  Brief bio highlighting expertise and experience in the marketing industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Work With Our Team?"
        subtitle="Let's discuss how we can help you achieve your marketing goals"
        ctaText="Connect With Us"
        ctaLink="/contact"
      />
    </>
  )
}
