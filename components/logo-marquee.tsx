"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function LogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current
      const width = marquee.scrollWidth / 2

      gsap.to(marquee, {
        x: -width,
        duration: 30,
        ease: "none",
        repeat: -1,
      })
    }
  }, [])

  const images = [
    "https://framerusercontent.com/images/iBem3bM7DskP1qLkV8JoHMLH68.jpg",
    "https://framerusercontent.com/images/wKRLfgb6vJIipselilRPIp7O8k.jpg",
    "https://framerusercontent.com/images/Zm7VMv3qkNTsNCEbJUrRSLM6yKQ.jpg",
    "https://framerusercontent.com/images/9nYExwEqKiZOxikoZuzMhPzlIX8.jpg",
  ]

  const duplicatedImages = [...images, ...images, ...images]

  return (
    <section className="py-12 bg-black/50 overflow-hidden">
      <div ref={marqueeRef} className="flex gap-8">
        {duplicatedImages.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden">
            <img
              src={img || "/placeholder.svg"}
              alt={`Client work ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-2xl font-semibold text-purple-400">100+ Satisfied Clients</p>
      </div>
    </section>
  )
}
