import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/ui/section-heading"
import CTABanner from "@/components/sections/cta-banner"
import { portfolioProjects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Portfolio | Quality Marketing",
  description:
    "Explore our portfolio of successful marketing projects and case studies that showcase our expertise and results.",
}

export default function PortfolioPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <SectionHeading subtitle="Our Portfolio" title="Showcasing Our Best Work" alignment="center" />
            <p className="mt-6 text-lg text-muted-foreground">
              Explore our collection of case studies and projects that demonstrate our expertise and the results we've
              achieved for our clients across various industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {portfolioProjects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="group">
                <div className="bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg h-full flex flex-col">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image || "/placeholder.webp"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <span className="text-sm text-primary font-medium mb-2 block">{project.category}</span>
                        <h3 className="text-2xl font-serif font-medium text-white mb-2">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">{project.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                      <span className="font-medium">View Case Study</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading subtitle="Our Process" title="How We Approach Each Project" alignment="left" />
              <p className="mt-6 text-lg text-muted-foreground mb-8">
                Every project we undertake follows a structured yet flexible process designed to deliver exceptional
                results. We believe in collaboration, transparency, and a focus on measurable outcomes.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-medium">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Discovery & Research</h3>
                    <p className="text-muted-foreground">
                      We begin by understanding your business, goals, target audience, and competitive landscape to
                      inform our strategy.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-medium">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Strategy Development</h3>
                    <p className="text-muted-foreground">
                      Based on our insights, we create a comprehensive strategy tailored to your specific needs and
                      objectives.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-medium">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Execution & Implementation</h3>
                    <p className="text-muted-foreground">
                      We bring the strategy to life through meticulous execution, focusing on quality and attention to
                      detail.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-medium">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Measurement & Optimization</h3>
                    <p className="text-muted-foreground">
                      We continuously monitor performance, gather insights, and make data-driven adjustments to optimize
                      results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.webp?height=800&width=600&text=Our%20Process"
                alt="Our project process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Let's discuss how we can help you achieve your marketing goals"
        ctaText="Get in Touch"
        ctaLink="/contact"
      />
    </>
  )
}
