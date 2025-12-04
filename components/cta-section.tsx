"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-white text-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0a0a14] rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Create Your <span className="font-serif italic">Dream</span>
              <br />
              <span className="font-serif italic">Project</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Our team is ready to help you transform your vision into reality. Schedule a discovery call to explore how
              we can work together.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white hover:bg-gray-100 text-black text-base px-8 py-6 rounded-full">
                Book a Discovery Call
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
