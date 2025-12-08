"use client";
 
import React, { useState, useRef, useEffect } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Star,
} from 'lucide-react';
 
 
const CtaNew = () => {
  // Section Refs
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const portfolioRef = useRef(null);
  const ctaRef = useRef(null);
 
  // Visibility States
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
 
  // Navbar State
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
 
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroVisible(true);
            if (entry.target === featuresRef.current) setFeaturesVisible(true);
            if (entry.target === portfolioRef.current) setPortfolioVisible(true);
            if (entry.target === ctaRef.current) setCtaVisible(true);
        }
      });
    };
 
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
 
    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
 
    return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  return (
    <div className="w-full bg-[#000000] text-white">
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap%27);
           
            .font-manrope { font-family: 'Manrope', sans-serif; }
            .font-serif-display { font-family: 'Playfair Display', serif; }
 
            .animate-float {
                animation: float 6s ease-in-out infinite;
            }
            .animate-float-delayed {
                animation: float 8s ease-in-out infinite;
                animation-delay: 2s;
            }
 
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
            }
           
            /* CTA Background Animation */
            .warp-speed {
                background:
                    radial-gradient(circle at center, transparent 0%, #000 70%),
                    linear-gradient(0deg, transparent 0%, rgba(16, 94, 254, 0.2) 50%, transparent 100%);
                background-size: 100% 200%;
                animation: warp 3s linear infinite;
            }
           
            @keyframes warp {
                0% { background-position: 0% 0%; }
                100% { background-position: 0% 200%; }
            }
        `}</style>

 
 
        {/* --- NEW FINAL CTA SECTION --- */}
        <section
            id="cta"
            ref={ctaRef}
            className="relative w-full py-15 px-4 overflow-hidden flex flex-col items-center justify-center bg-[#050505] border-t border-white/5"
        >
            {/* Animated "Portal" Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none warp-speed"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
           
            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#105EFE] rounded-full blur-[150px] opacity-[0.15] animate-pulse"></div>
 
            <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 transform ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
                    <Star size={14} className="text-[#AE4FFE] fill-current" />
                    <span className="text-white text-xs font-bold tracking-widest uppercase font-manrope">Limited Availability Q1 2025</span>
                </div>
               
                <h2 className="text-4xl md:text-7xl font-medium text-white leading-tight mb-4 font-manrope">
                    Ready to become the <br/>
                    <span className="font-serif-display italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#6BA2FD] to-[#AE4FFE]">Authority?</span>
                </h2>
               
                <p className="text-gray-200 font-light text-lg md:text-xl max-w-2xl mx-auto font-manrope mb-8">
                    Stop competing on price. Start commanding attention. Apply now to secure your spot in our exclusive mentorship program.
                </p>
 
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="group relative px-6 py-3 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] w-full sm:w-auto">
                        <span className="relative z-10 font-bold tracking-wider text-sm uppercase font-manrope">Apply Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#105EFE] to-[#AE4FFE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                   
                    {/* <button className="group px-6 py-3 bg-transparent border border-white/20 text-white rounded-full transition-all hover:bg-white/5 hover:border-white/40 w-full sm:w-auto flex items-center justify-center gap-2">
                        <span className="font-bold tracking-wider text-sm uppercase font-manrope">View Case Studies</span>
                        <ArrowRight size={18} className="text-[#AE4FFE] group-hover:translate-x-1 transition-transform" />
                    </button> */}
                </div>
 
                <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 text-sm font-manrope opacity-60">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} />
                        <span>High-Impact Strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} />
                        <span>Execution Support</span>
                    </div>
                </div>
            </div>
        </section>
 
 
    </div>
  );
};
 
export default CtaNew;