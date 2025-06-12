"use client"

import type React from "react"
import { type ReactNode } from "react"
// import { motion } from "framer-motion"

interface Card3DProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
}

export default function Card3D({ icon, title, description, link }: Card3DProps) {
  return (
    <div
      className="glass-card p-10 h-full mb-6"
      // whileHover={{
      //   boxShadow: "0 0 15px rgba(0, 4, 67, 0.5)"
      // }}
    >
      <div className="card-content relative z-10">
        <div className="card-icon mb-6 text-navy inline-block">
          {icon}
        </div>
        <h3 className="heading-sm mb-3 text-navy">{title}</h3>
        <p className="body-md text-gray-600 mb-6">{description}</p>
        {link && (
          <a href={link} className="text-navy font-medium inline-flex items-center group">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
