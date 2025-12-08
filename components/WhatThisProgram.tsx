"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- Main Page Component ---

export default function ProcessPage() {
  return (
    <main className="font-sans bg-white text-black min-h-screen flex flex-col justify-center items-center overflow-x-hidden relative px-6">
      {/* NOTE: In a real Next.js project, you would typically load fonts via 
        `next/font/google` in your `layout.tsx`. 
        For this preview, we use a style tag.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        .font-sans { font-family: 'Manrope', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
        }}
      />

      {/* Blue Glow Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#105EFE] rounded-full blur-[180px] opacity-[0.05] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        
        {/* --- Story Section (What This Program Is) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Left Column: Text Reveal */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }} // smooth ease-out
          >
            <h2 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
              Your Brand. <br />
              Your Story. <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#105EFE] to-[#AE4FFE]">
                Our Strategy.
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Card Fade In & CTA */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
              className="relative"
            >
              {/* Decorative Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#105EFE] to-[#AE4FFE] blur-[40px] opacity-20 transform translate-y-4 scale-90" />
              
              <div className="relative p-8 md:p-12 rounded-2xl bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden group hover:border-[#105EFE] transition-colors duration-500">
                {/* Neon Accent Line */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#105EFE] to-[#AE4FFE]" />
                
                <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed">
                  This is a fully personalized 1:1 branding mentorship designed to help founders and creators build a clear, confident, and high-impact personal brand.
                </p>
              </div>
            </motion.div>

            {/* CTA Button - Added Here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a 
                href="#consultation" 
                className="group inline-flex items-center gap-3 px-8 py-5 bg-black text-white rounded-lg overflow-hidden transition-all hover:bg-[#105EFE] hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-[#105EFE]/25"
              >
                <span className="relative z-10 font-bold tracking-wider text-sm uppercase">
                  Book a Consultation Call
                </span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

        </section>

      </div>
    </main>
  );
}