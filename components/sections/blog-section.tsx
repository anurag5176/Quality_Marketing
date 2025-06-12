"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import BlogCard from "@/components/ui/blog-card"

export default function BlogSection() {
  const posts = [
    {
      title: "Why Quality Marketing Matters in Today's Digital Landscape",
      excerpt: "Discover why quality marketing is crucial for business success in the digital age. Learn how to stand out in a crowded market.",
      image: "/images/Blog_image.webp",
      category: "Digital Marketing",
      date: "April 24, 2025",
      slug: "/blog/why-quality-marketing-matters",
    },
    {
      title: "Viral in Seconds: Why Short-Form Video Is the Future of Digital Marketing in 2025",
      excerpt: "Discover why short-form video content is revolutionizing digital marketing and how your brand can leverage this trend for maximum impact.",
      image: "/images/Blog_Image2.webp",
      category: "Digital Marketing",
      date: "April 25, 2025",
      slug: "/blog/viral-in-seconds",
    },
    {
      title: "Content Marketing in 2025: What Every Business Needs to Know",
      excerpt: "Discover the latest trends and strategies in content marketing that will help your business thrive in 2025 and beyond.",
      image: "/images/Blog_Image3.webp",
      category: "Content Marketing",
      date: "April 26, 2025",
      slug: "/blog/content-marketing-2025",
    },
    {
      title: "Red Bull's Marketing Strategy in India: How a Drink Became a Lifestyle",
      excerpt: "What do extreme sports, breakdancing, and viral YouTube videos have in common? If you're in India, the answer is simple—Red Bull. This isn't just a beverage; it's a brand that sells energy, attitude, and adrenaline.",
      image: "/images/Blog_Image4.webp",
      category: "Marketing Strategy",
      date: "April 27, 2025",
      slug: "/blog/red-bull-marketing-strategy",
    },

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } },
  }

  return (
    <section className="py-16 md:py-20 bg-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm uppercase tracking-wider text-white/70 mb-3"
          >
            Our Blog
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-lg mb-4 text-white"
          >
            Latest Insights & Strategies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-md text-white/70"
          >
            Stay updated with the latest marketing trends, strategies, and insights from our team of experts.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                category={post.category}
                date={post.date}
                slug={post.slug}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/blog" className="btn-primary bg-white text-navy hover:bg-white/90">
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
