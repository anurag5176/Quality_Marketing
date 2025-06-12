import type { Metadata } from "next"
import AboutHero from "@/components/sections/about-hero"
import ValuesSection from "@/components/sections/values-section"
import CTASection from "@/components/sections/cta-section"
import AboutVision from "@/components/sections/about-vision"
import AboutApproach from "@/components/sections/about-approach"

export const metadata: Metadata = {
  title: "About Us - Quality Marketing - Brand Strategy Pune",
  description: "Learn about the vision behind Quality Marketing. We offer creativity, experience, and data to deliver marketing strategies for your business.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutVision />
      <ValuesSection />
      <AboutApproach />
      <CTASection variant="about" />
    </>
  )
}
