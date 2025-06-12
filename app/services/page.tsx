import type { Metadata } from "next"
import ServicesHero from "@/components/sections/services-hero"
import ServicesList from "@/components/sections/services-list"
import CTASection from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Services - Quality Marketing - Marketing Services in Pune",
  description: "Explore services from Quality Marketing. We offer digital strategy, branding, social media, website development, UI/UX, and more.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CTASection variant="services" />
    </>
  )
}
