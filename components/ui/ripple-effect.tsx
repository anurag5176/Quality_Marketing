"use client"

import { useState, useEffect } from "react"

interface RippleProps {
  x: number
  y: number
  size: number
}

export default function RippleEffect() {
  const [ripples, setRipples] = useState<RippleProps[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Only add ripple to buttons and cards
      if (
        target.tagName === "BUTTON" ||
        target.closest(".btn-primary") ||
        target.closest(".btn-secondary") ||
        target.closest(".glass-card")
      ) {
        const element =
          target.tagName === "BUTTON"
            ? target
            : target.closest(".btn-primary") || target.closest(".btn-secondary") || target.closest(".glass-card")

        if (element) {
          const rect = element.getBoundingClientRect()
          const size = Math.max(rect.width, rect.height)
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          const newRipple = { x, y, size }
          setRipples((prevRipples) => [...prevRipples, newRipple])

          // Remove ripple after animation completes
          setTimeout(() => {
            setRipples((prevRipples) => prevRipples.slice(1))
          }, 800)
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <>
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="ripple animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size * 2,
            height: ripple.size * 2,
          }}
        />
      ))}
    </>
  )
}
