"use client";
 
import React, { useState, useRef, useEffect } from 'react';
import {
  Building2,      // Founders
  Clapperboard,   // Creators
  Mic2,           // Consultants
  Crown,          // Authority
  Sparkles,
  ArrowRight
} from 'lucide-react';
 
const WhoThisFor = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
 
  // Handle global mouse movement for the spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
 
    // Trigger entrance animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
 
    if (containerRef.current) {
      observer.observe(containerRef.current);
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }
 
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        observer.disconnect();
      }
    };
  }, []);
 
  const segments = [
    {
      label: "Founders",
      subtitle: "Scaling Visions",
      description: "For visionaries building high-growth startups who need a personal brand that matches their company's valuation.",
      icon: <Building2 size={32} />,
      color: "#105EFE" // Electric Blue
    },
    {
      label: "Creators",
      subtitle: "Monetizing Influence",
      description: "For content powerhouses ready to transition from 'influencer' to media empire and diversified revenue.",
      icon: <Clapperboard size={32} />,
      color: "#AE4FFE" // Purple
    },
    {
      label: "Consultants",
      subtitle: "Commanding Authority",
      description: "For experts who want to stop chasing leads and start attracting high-ticket clients on autopilot.",
      icon: <Mic2 size={32} />,
      color: "#6BA2FD" // Light Blue
    },
    {
      label: "Professionals",
      subtitle: "Industry Leaders",
      description: "For executives and corporate leaders aiming to define industry standards and secure board seats.",
      icon: <Crown size={32} />,
      color: "#FFFFFF" // White
    }
  ];
 
  return (
    <section
      ref={containerRef}
      className="w-full py-32 px-4 relative bg-[#000000] min-h-screen flex flex-col items-center justify-center selection:bg-[#105EFE] selection:text-white overflow-hidden"
    >
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap%27);
           
            .font-manrope { font-family: 'Manrope', sans-serif; }
            .font-serif-display { font-family: 'Playfair Display', serif; }
 
            /* Spotlight Mask */
            .spotlight-overlay {
                background: radial-gradient(
                    800px circle at var(--mouse-x) var(--mouse-y),
                    rgba(255, 255, 255, 0.06),
                    transparent 40%
                );
            }
 
            .card-border-glow {
                background: radial-gradient(
                    400px circle at var(--mouse-x) var(--mouse-y),
                    rgba(255, 255, 255, 0.3),
                    transparent 40%
                );
            }
        `}</style>
 
        {/* Ambient Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#105EFE] rounded-full blur-[250px] opacity-[0.08]"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#AE4FFE] rounded-full blur-[250px] opacity-[0.08]"></div>
            <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>
        </div>
 
        {/* Spotlight Overlay (Global) */}
        <div
            className="spotlight-overlay absolute inset-0 pointer-events-none z-0"
            style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` }}
        ></div>
 
        <div className="max-w-6xl w-full relative z-10">
           
            {/* Header */}
            <div className={`text-center mb-24 transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                    <Sparkles size={14} className="text-[#105EFE]" />
                    <span className="text-gray-300 text-xs font-bold tracking-widest uppercase font-manrope">Target Audience</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-medium text-white leading-tight mb-6 font-manrope">
                  Who is this <span className="font-serif-display italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#6BA2FD] to-[#AE4FFE]">Program For?</span>
                </h2>
                <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto font-manrope">
                  We partner with individuals ready to transcend their current plateau and build a legacy-defining brand.
                </p>
            </div>
 
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative group">
                {segments.map((item, index) => (
                    <div
                        key={index}
                        className={`group/card relative rounded-3xl bg-[#0a0a0a] p-[1px] overflow-hidden transition-all duration-700 transform border border-white/20 hover:border-blue-500 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]
                            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                        `}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        {/* Dynamic Border Glow (Spotlight specific to card) */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover/group:opacity-100 transition-opacity duration-500"
                            style={{
                                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
                            }}
                        ></div>
 
                        {/* Card Content */}
                        <div className="relative h-full bg-[#050505]/60 backdrop-blur-xl rounded-[23px] p-8 md:p-12 overflow-hidden hover:bg-[#080808]/90 transition-colors duration-500">
                           
                            {/* Inner ambient glow on hover */}
                            <div
                                className="absolute -top-20 -right-20 w-88 h-88 rounded-full blur-[80px] opacity-0 group-hover/card:opacity-20 transition-opacity duration-700"
                                style={{ backgroundColor: item.color }}
                            ></div>
 
                            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-3">
                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 text-white bg-white/5 mb-4 group-hover/card:scale-110 transition-transform duration-500"
                                            style={{ color: item.color }} // Tint icon
                                        >
                                            {item.icon}
                                        </div>
                                        <h3 className="text-3xl text-white font-manrope font-semibold tracking-tight">{item.label}</h3>
                                        <span className="text-sm font-bold uppercase tracking-widest opacity-50 font-manrope text-white">{item.subtitle}</span>
                                    </div>
                                   
                                    {/* Arrow that appears on hover */}
                                    <div className="opacity-0 -translate-x-4 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300 text-white/50">
                                        <ArrowRight size={24} />
                                    </div>
                                </div>
 
                                <div>
                                    <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
                                    <p className="text-gray-400 font-manrope font-light text-base leading-relaxed group-hover/card:text-gray-300 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
 
            {/* CTA */}
            <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                    <span className="relative z-10 font-bold tracking-wider text-sm uppercase font-manrope">Apply for Access</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#105EFE] to-[#AE4FFE] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
                <p className="mt-4 text-white/20 text-xs uppercase tracking-widest font-manrope">Limited Spots Available Q1 2025</p>
            </div>
 
        </div>
    </section>
  );
};
 
export default WhoThisFor;