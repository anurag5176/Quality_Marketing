"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Globe, BarChart3, PenTool, Users, Search, Megaphone } from "lucide-react"

export default function ServicesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      id: "web-design",
      icon: <Globe className="h-10 w-10 text-navy" />,
      title: "Web Design & Development",
      description:
        "We create stunning, responsive websites that not only look beautiful but also convert visitors into customers. Our web design process focuses on user experience, performance, and design that reflects your brand identity.",
      features: [
        "Custom website design and development",
        "Responsive design for all devices",
        "User experience optimization",
        "E-commerce solutions",
        "Content management systems",
        "Website maintenance and support",
      ],
      image: "/images/Web_design.jpeg",
    },
    {
      id: "digital-marketing",
      icon: <BarChart3 className="h-10 w-10 text-navy" />,
      title: "Digital Marketing",
      description:
        "Our data-driven digital marketing campaigns deliver measurable results. From PPC to email marketing, we create comprehensive strategies that maximize your ROI and help you reach your target audience effectively.",
      features: [
        "Search engine marketing (SEM)",
        "Pay-per-click (PPC) advertising",
        "Email marketing campaigns",
        "Display advertising",
        "Remarketing strategies",
        "Performance tracking and analytics",
      ],
      image: "/images/Digital Marketing.jpeg",
    },
    {
      id: "brand-strategy",
      icon: <PenTool className="h-10 w-10 text-navy" />,
      title: "Brand Strategy",
      description:
        "Develop a cohesive brand identity that resonates with your audience and sets you apart from competitors. We help you define your brand voice, values, and visual identity to create a strong foundation for all your marketing efforts.",
      features: [
        "Brand identity development",
        "Brand messaging and positioning",
        "Visual identity design",
        "Brand guidelines",
        "Brand storytelling",
        "Competitive analysis",
      ],
      image: "/images/Brand_Strategy.jpeg",
    },
    {
      id: "social-media",
      icon: <Users className="h-10 w-10 text-navy" />,
      title: "Social Media Marketing",
      description:
        "Build community and drive engagement with strategic social media management. We create content that connects with your audience, grows your following, and converts social media users into loyal customers.",
      features: [
        "Social media strategy development",
        "Content creation and curation",
        "Community management",
        "Paid social campaigns",
        "Influencer marketing",
        "Social media analytics and reporting",
      ],
      image: "/images/Social_Media_Marketing.jpeg",
    },
    {
      id: "seo",
      icon: <Search className="h-10 w-10 text-navy" />,
      title: "SEO Optimization",
      description:
        "Improve your search visibility and drive organic traffic with our comprehensive SEO strategies. We focus on sustainable, long-term growth that helps your business rank higher in search results and attract qualified leads.",
      features: [
        "Technical SEO audits",
        "On-page optimization",
        "Content strategy for SEO",
        "Link building",
        "Local SEO",
        "SEO performance tracking",
      ],
      image: "/images/SEO_Marketing.jpeg",
    },
    {
      id: "content-marketing",
      icon: <Megaphone className="h-10 w-10 text-navy" />,
      title: "Content Marketing",
      description:
        "Tell your brand story with compelling content that educates and inspires your audience. Our content marketing strategies are designed to establish your authority in your industry and drive engagement with your target audience.",
      features: [
        "Content strategy development",
        "Blog writing and management",
        "Ebook and whitepaper creation",
        "Video content production",
        "Infographic design",
        "Content distribution strategies",
      ],
      image: "/images/Content_Marketing.jpeg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  return (
    <section ref={ref} className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-32"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-offwhite mb-6">
                  {service.icon}
                </div>
                <h2 className="heading-lg mb-4">{service.title}</h2>
                <p className="body-md text-navy/70 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-navy mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-navy/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`relative h-[400px] rounded-2xl overflow-hidden shadow-medium mb-8 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
