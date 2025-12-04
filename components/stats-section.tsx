"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const stats = [
    { value: "2", suffix: "B+", label: "Views Generated", color: "from-purple-600 to-purple-400" },
    { value: "25", prefix: "£", suffix: "M+", label: "Client Revenue", color: "from-blue-600 to-blue-400" },
    { value: "98.9", suffix: "%", label: "Client Satisfaction", color: "from-purple-600 to-purple-400" },
    { value: "300", suffix: "+", label: "Viral Campaigns", color: "from-blue-600 to-blue-400" },
  ]

  useEffect(() => {
    if (sectionRef.current && !hasAnimated) {
      const ctx = gsap.context(() => {
        stats.forEach((_, index) => {
          const element = document.querySelector(`#stat-${index}`)
          if (element) {
            ScrollTrigger.create({
              trigger: sectionRef.current,
              start: "top 70%",
              onEnter: () => {
                const stat = stats[index]
                const endValue = Number.parseFloat(stat.value)
                gsap.to(element, {
                  innerHTML: endValue,
                  duration: 2,
                  snap: { innerHTML: stat.value.includes(".") ? 0.1 : 1 },
                  ease: "power1.out",
                })
                setHasAnimated(true)
              },
              once: true,
            })
          }
        })
      })

      return () => ctx.revert()
    }
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-white text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.prefix}
                <span id={`stat-${index}`}>0</span>
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
