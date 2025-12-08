"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ScanSearch, 
  BrainCircuit, 
  Clapperboard, 
  TrendingUp, 
  ChevronRight, 
  ArrowDown 
} from 'lucide-react';

// --- Configuration & Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }
  },
};

const arrowFloatingDesktop = {
  animate: {
    x: [0, 5, 0],
    opacity: [0.3, 1, 0.3],
    color: ["rgba(0,0,0,0.2)", "#105EFE", "rgba(0,0,0,0.2)"],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  }
};

const arrowFloatingMobile = {
  animate: {
    y: [0, 5, 0],
    opacity: [0.3, 1, 0.3],
    color: ["rgba(0,0,0,0.2)", "#105EFE", "rgba(0,0,0,0.2)"],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  }
};

// --- Data ---

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "Deep-dive analysis into your brand DNA and market position. We find the gaps your competitors are ignoring.",
    icon: ScanSearch,
    accent: "group-hover:text-[#105EFE]",
  },
  {
    id: "02",
    title: "Strategy",
    desc: "Developing a psychological framework designed to trigger algorithms and human emotion simultaneously.",
    icon: BrainCircuit,
    accent: "group-hover:text-[#105EFE]",
  },
  {
    id: "03",
    title: "Production",
    desc: "High-fidelity visuals meet viral storytelling. We produce editorial-grade assets that demand attention.",
    icon: Clapperboard,
    accent: "group-hover:text-[#AE4FFE]",
  },
  {
    id: "04",
    title: "Scale",
    desc: "We analyze data in real-time, doubling down on winning creatives to scale revenue exponentially.",
    icon: TrendingUp,
    accent: "group-hover:text-[#AE4FFE]",
  },
];

// --- Main Page Component ---

export default function ProcessPage() {
  return (
    <main className="font-sans bg-white text-black min-h-screen flex flex-col justify-center overflow-hidden relative py-24 px-6">
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
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <p className="text-[#105EFE] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Our Methodology
          </p>
          <h2 className="text-4xl md:text-6xl font-medium text-black leading-tight mb-6">
            From Chaos to <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-br from-black via-[#105EFE] to-[#AE4FFE]">Clarity.</span>
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
            A precise, linear workflow engineered to cut through noise and deliver measurable impact.
          </p>
        </motion.div>

        {/* Process Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            // Add margin top to even items (2nd and 4th) to create staggered look
            const staggerClass = index % 2 !== 0 ? "md:mt-12" : ""; 

            return (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className={`relative group ${staggerClass}`}
              >
                {/* Card */}
                <div className="h-[360px] p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-400 border border-black/10 bg-gradient-to-b from-white to-gray-50 hover:-translate-y-2 hover:border-[#105EFE] hover:shadow-[0_20px_40px_-10px_rgba(16,94,254,0.15)] hover:from-white hover:to-gray-100">
                  
                  {/* Icon */}
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-black/5 border border-black/10 text-black transition-all duration-300 group-hover:bg-[#105EFE]/10 group-hover:border-[#105EFE]/60 group-hover:text-[#105EFE]">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-xl font-semibold text-gray-900 mb-3 transition-colors ${step.accent}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed group-hover:text-black transition-colors">
                      {step.desc}
                    </p>
                  </div>

                  {/* Big Number */}
                  <div className="font-serif text-[8rem] leading-[0.8] font-bold text-black/5 absolute -bottom-5 -right-2 transition-all duration-400 select-none group-hover:text-[#105EFE]/10 group-hover:-translate-x-2">
                    {step.id}
                  </div>
                </div>

                {/* Arrows (Render for all except last item) */}
                {!isLast && (
                  <>
                    {/* Desktop Arrow (Right) */}
                    <div className="hidden md:block absolute top-[28px] -right-[26px] z-20">
                      <motion.div variants={arrowFloatingDesktop} animate="animate">
                        <ChevronRight className="w-8 h-8" />
                      </motion.div>
                    </div>

                    {/* Mobile Arrow (Down) */}
                    <div className="flex md:hidden justify-center items-center py-4">
                      <motion.div variants={arrowFloatingMobile} animate="animate">
                        <ArrowDown className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center mt-24"
        >
          <a href="#contact" className="group relative px-8 py-4 bg-black text-white rounded-lg overflow-hidden transition-all hover:bg-[#105EFE] hover:text-white">
            <span className="relative z-10 font-bold tracking-wider text-sm uppercase">
              Start the Process
            </span>
          </a>
        </motion.div>

      </div>
    </main>
  );
}