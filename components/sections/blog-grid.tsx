"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 3

  const allPosts = [
    {
      slug: "/blog/why-quality-marketing-matters",
      title: "Why Quality Marketing Matters in Today's Digital Landscape",
      excerpt: "In today's fast-paced digital world, every business, big or small, is striving to stand out, connect with its audience, and convert interest into loyalty.",
      date: "April 24, 2025",
      author: "Quality Marketing Team",
      authorImage: "/images/team/team-1.jpg",
      category: "Marketing",
      image: "/images/Blog_image.png",
    },
    {
      title: "Viral in Seconds: Why Short-Form Video Is the Future of Digital Marketing in 2025",
      excerpt: "Discover why short-form video content is revolutionizing digital marketing and how your brand can leverage this trend for maximum impact.",
      image: "/images/Blog_Image2.jpg",
      category: "Digital Marketing",
      date: "April 25, 2025",
      slug: "/blog/viral-in-seconds",
    },
    {
      title: "Content Marketing in 2025: What Every Business Needs to Know",
      excerpt: "Discover the latest trends and strategies in content marketing that will help your business thrive in 2025 and beyond.",
      image: "/images/Blog_Image3.jpg",
      category: "Content Marketing",
      date: "April 26, 2025",
      slug: "/blog/content-marketing-2025",
    },
    {
      title: "Red Bull's Marketing Strategy in India: How a Drink Became a Lifestyle",
      excerpt: "What do extreme sports, breakdancing, and viral YouTube videos have in common? If you're in India, the answer is simple—Red Bull. This isn't just a beverage; it's a brand that sells energy, attitude, and adrenaline.",
      image: "/images/Blog_Image4.jpg",
      category: "Marketing Strategy",
      date: "April 27, 2025",
      slug: "/blog/red-bull-marketing-strategy",
    },
  ]

  // Calculate total number of pages
  const totalPages = Math.ceil(allPosts.length / postsPerPage)

  // Get current posts based on pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group mb-8"
            >
              <Link href={post.slug}>
                <div className="relative h-60 rounded-t-2xl overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-navy/70">{post.date}</span>
                    <span className="mx-2 text-navy/30">•</span>
                    <span className="text-sm font-medium text-navy">{post.category}</span>
                  </div>
                  <h3 className="heading-sm mb-3 group-hover:text-navy/70 transition-colors">{post.title}</h3>
                  <p className="body-md text-navy/70 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-navy font-medium group-hover:text-navy/70 transition-colors">
                    Continue Reading
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-lg shadow-soft overflow-hidden">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white text-navy hover:bg-offwhite transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 ${
                  currentPage === i + 1
                    ? "bg-navy text-offwhite"
                    : "bg-white text-navy hover:bg-offwhite transition-colors"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white text-navy hover:bg-offwhite transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  )
}
