import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import AboutSection from "@/components/sections/about-section"
import BlogSection from "@/components/sections/blog-section"
import CTASection from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </>
  )
}

export const metadata = {
  title: "Digital Marketing Agency in Pune - Quality Marketing",
  description: "Discover expert marketing solutions with Quality Marketing. Based in Pune, we build brands with strategy, design, digital marketing, SEO, and more.",
}
