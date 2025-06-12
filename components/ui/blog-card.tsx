"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  slug: string
}

export default function BlogCard({ title, excerpt, image, category, date, slug }: BlogCardProps) {
  return (
    <motion.div
      className="group relative h-[400px] rounded-2xl overflow-hidden mb-10"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card bg-white/10 p-8 m-4 transform transition-all duration-500 group-hover:translate-y-[-10px]"
        >
          <div className="flex items-center text-sm text-offwhite/80 mb-3">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span className="text-offwhite font-medium">{category}</span>
          </div>

          <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>

          <p className="text-offwhite/80 mb-4 line-clamp-2">{excerpt}</p>

          <Link
            href={slug}
            className="inline-flex items-center text-offwhite font-medium group-hover:text-white transition-colors"
          >
            Continue Reading
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
