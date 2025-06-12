"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface Card3DProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
}

export default function Card3D({ icon, title, description, link }: Card3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 5
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * 5

    setRotateX(rotateX)
    setRotateY(rotateY)
  }

  const handleMouseEnter = () => {
    setScale(1.05)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <motion.div
      ref={cardRef}
      className="perspective glass-card p-10 h-full mb-6"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ boxShadow: "0 0 15px rgba(0, 4, 67, 0.5)" }}
    >
      <div className="card-content relative z-10 transform-gpu">
        <motion.div
          className="card-icon mb-6 text-navy inline-block"
          style={{
            transform: `translateZ(40px)`,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ rotateY: 360 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {icon}
        </motion.div>
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

      {/* Light spot effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${rotateY + 50}% ${rotateX + 50}%, rgba(255,255,255,0.8), transparent 40%)`,
        }}
      />
    </motion.div>
  )
}
