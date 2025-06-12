import type { Metadata } from "next"
import BlogHero from "@/components/sections/blog-hero"
import BlogGrid from "@/components/sections/blog-grid"
import CTASection from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Blog - Quality Marketing - Insights for Brand Growth",
  description: "Stay ahead with expert tips on marketing, branding, digital strategy, and more. Read the latest insights from the Quality Marketing team.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <CTASection />
    </>
  )
}
