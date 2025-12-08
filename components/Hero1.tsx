"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ScanLine, // Audit
  Target, // Positioning
  Share2, // Content
  Map, // Roadmap
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Menu,
  X,
  Activity,
  Star,
  MoveHorizontal,
  Hand,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import ProgramStory from "./WhatThisProgram";
import { motion } from "framer-motion";

// --- SUB-COMPONENT: Interactive Portfolio Card ---
const PortfolioCard = ({ item, isVisible, index }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleTouchMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`group relative h-[450px] md:h-[600px] rounded-[24px] md:rounded-[32px] bg-[#0F0F0F] border border-white/5 overflow-hidden transition-all duration-700 transform hover:border-[#105EFE]/50 shadow-2xl cursor-col-resize touch-none
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }
        `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* --- IMAGE LAYERS --- */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        {/* Layer 1: AFTER Image (Background/Full) */}
        <img
          src={item.afterImg}
          alt="After Transformation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* After Label */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
          <div className="bg-[#105EFE]/20 text-[#105EFE] border border-[#105EFE]/30 px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(16,94,254,0.4)]">
            {item.after.label}
          </div>
        </div>

        {/* Layer 2: BEFORE Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.beforeImg}
            alt="Before Transformation"
            className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-75 min-w-full"
          />
          {/* Before Label */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
            <div className="bg-red-500/20 text-red-300 border border-red-500/30 px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              {item.before.label}
            </div>
          </div>
        </div>

        {/* --- THE LINEAR LINE (Slider Handle) --- */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#105EFE] shadow-[0_0_20px_#105EFE] z-30 flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 bg-[#105EFE] rounded-full shadow-[0_0_15px_rgba(16,94,254,0.8)] flex items-center justify-center border-2 border-white cursor-grab active:cursor-grabbing">
            <MoveHorizontal size={16} className="text-white" />
          </div>
        </div>
      </div>

      {/* --- UI OVERLAYS --- */}
      <div className="absolute inset-0 flex flex-col p-4 md:p-8 z-40 pointer-events-none justify-between">
        {/* Top: Client Identity */}
        <div className="flex justify-center pointer-events-auto w-full md:w-fit mx-auto">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-[10px] md:text-xs font-bold font-manrope text-white">
                {item.client.charAt(0)}
              </div>
              <span className="text-white font-manrope font-bold text-xs md:text-sm whitespace-nowrap">
                {item.client}
              </span>
            </div>
            <span className="text-white/20">|</span>
            <span className="text-gray-400 font-manrope text-[10px] md:text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] md:max-w-none">
              {item.role}
            </span>
          </div>
        </div>

        {/* Bottom: Dynamic Stats */}
        <div className="relative pointer-events-auto transition-transform duration-300 active:scale-95 md:hover:scale-105">
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-2xl overflow-hidden relative shadow-2xl">
            {sliderPosition > 60 ? (
              <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                <div className="flex justify-between items-center mb-1 md:mb-2">
                  <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    Starting Point
                  </span>
                  <span className="text-red-400 text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    <Activity size={10} /> Stagnant
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl md:text-3xl font-serif-display text-gray-500">
                    {item.before.followers}
                  </span>
                  <span className="text-gray-500 font-manrope text-xs md:text-sm text-right">
                    {item.before.leads}
                  </span>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex justify-between items-center mb-1 md:mb-2">
                  <span className="text-[#105EFE] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    Current Status
                  </span>
                  <div className="flex gap-0.5 md:gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={8}
                        className="md:w-[10px] md:h-[10px]"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-end justify-between mb-2 md:mb-3">
                  <span className="text-3xl md:text-4xl font-serif-display text-white">
                    {item.after.followers}
                  </span>
                  <div className="bg-[#105EFE] text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded">
                    {item.after.leads}
                  </div>
                </div>
                <p className="text-gray-300 text-[10px] md:text-xs italic leading-tight border-t border-white/10 pt-2 line-clamp-2 md:line-clamp-none">
                  "{item.after.review}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Touch Hint */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none md:hidden opacity-50 animate-pulse">
          <Hand className="text-white w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

const ProcessSection1 = () => {
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
    window.addEventListener("scroll", handleScroll);

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroRef.current) setHeroVisible(true);
          if (entry.target === featuresRef.current) setFeaturesVisible(true);
          if (entry.target === portfolioRef.current) setPortfolioVisible(true);
          if (entry.target === ctaRef.current) setCtaVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (portfolioRef.current) observer.observe(portfolioRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      id: "01",
      title: "Personal Brand Audit",
      description:
        "Deep platform analysis to identify strengths, gaps, and opportunities.",
      icon: <ScanLine size={24} />,
      color: "text-[#105EFE]",
      bg: "bg-blue-50",
    },
    {
      id: "02",
      title: "Brand Positioning Framework",
      description:
        "Your niche, value, messaging, and identity defined with clarity.",
      icon: <Target size={24} />,
      color: "text-[#AE4FFE]",
      bg: "bg-purple-50",
    },
    {
      id: "03",
      title: "Content Strategy",
      description:
        "Blueprint for LinkedIn, Instagram, YouTube—content buckets, hooks, formats.",
      icon: <Share2 size={24} />,
      color: "text-[#6BA2FD]",
      bg: "bg-indigo-50",
    },
    {
      id: "04",
      title: "90-Day Growth Roadmap",
      description:
        "A step-by-step brand expansion plan tailored to your goals.",
      icon: <Map size={24} />,
      color: "text-slate-800",
      bg: "bg-slate-100",
    },
  ];

  const portfolioItems = [
    {
      client: "Sarah Jenkins",
      role: "SaaS Founder",
      handle: "@sarahbuilds",
      beforeImg:
        "https://placehold.co/400x800/1a1a1a/666?text=Stagnant+Profile",
      afterImg: "https://placehold.co/400x800/105EFE/FFF?text=Viral+Growth",
      before: { followers: "840", leads: "0 DMs", label: "Ghost Town" },
      after: {
        followers: "28.5K",
        leads: "45+ Leads/mo",
        label: "Viral Empire",
        review: "This changed my entire business trajectory.",
      },
    },
    {
      client: "David Chen",
      role: "Real Estate Coach",
      handle: "@david_realty",
      beforeImg: "https://placehold.co/400x800/1a1a1a/666?text=Cold+Calling",
      afterImg: "https://placehold.co/400x800/AE4FFE/FFF?text=Inbound+Leads",
      before: { followers: "1.2K", leads: "Cold Calls", label: "Struggling" },
      after: {
        followers: "92K",
        leads: "Webinar Full",
        label: "Authority",
        review: "I stopped cold calling 3 weeks in.",
      },
    },
    {
      client: "Elena Rodriguez",
      role: "Wellness Creator",
      handle: "@elena.wellness",
      beforeImg: "https://placehold.co/400x800/1a1a1a/666?text=Low+Views",
      afterImg: "https://placehold.co/400x800/6BA2FD/FFF?text=Brand+Deals",
      before: { followers: "3.5K", leads: "$200/mo Ads", label: "Invisible" },
      after: {
        followers: "150K",
        leads: "Brand Deals",
        label: "Monetized",
        review: "Finally monetizing my passion properly.",
      },
    },
    {
      client: "Mark T.",
      role: "Fintech Consultant",
      handle: "@markfintech",
      beforeImg: "https://placehold.co/400x800/1a1a1a/666?text=No+Influence",
      afterImg: "https://placehold.co/400x800/ffffff/000?text=Keynote+Speaker",
      before: { followers: "200", leads: "Referrals", label: "Unknown" },
      after: {
        followers: "15K",
        leads: "Keynote Gigs",
        label: "Leader",
        review: "Went from invisible to thought leader.",
      },
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Story", href: "#story" },
    { name: "Deliverables", href: "#deliverables" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
  ];

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

      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-3 md:py-4"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            className="text-white font-manrope font-bold text-lg md:text-xl tracking-wider uppercase z-50"
          >
            Signature<span className="text-[#105EFE]">Club.</span>
          </a>
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 z-50">
            <a
              href="#cta"
              className="hidden md:block px-5 py-2 md:px-6 md:py-2 bg-white text-black text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#105EFE] hover:text-white transition-all"
            >
              Book Call
            </a>
            <button
              className="xl:hidden text-white hover:text-[#105EFE] transition-colors p-1"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div
            className={`fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 xl:hidden ${
              isNavOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsNavOpen(false)}
                className="text-2xl font-manrope font-light text-white hover:text-[#105EFE] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsNavOpen(false)}
              className="mt-4 px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full"
            >
              Book Your Call
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        ref={heroRef}
        className="relative w-full min-h-screen bg-[#000000] overflow-hidden flex items-center selection:bg-[#105EFE] selection:text-white pt-20"
      >
        {/* ... (Hero Content) ... */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#105EFE] rounded-full blur-[150px] md:blur-[200px] opacity-[0.1]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[#AE4FFE] rounded-full blur-[150px] md:blur-[200px] opacity-[0.1]"></div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`flex flex-col gap-6 md:gap-8 transition-all duration-1000 transform ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#105EFE] animate-pulse"></span>
              <span className="text-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase font-manrope">
                1:1 Branding Consultation
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-white leading-[1.1] font-manrope">
              Build a Personal Brand That{" "}
              <span className="font-serif-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#6BA2FD] to-[#AE4FFE]">
                Stands Out.
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-xl font-light font-manrope max-w-lg leading-relaxed">
              Transform your story into a powerful identity that attracts the
              right audience and unlocks exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 md:mt-4">
              <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                <span className="relative z-10 font-bold tracking-wider text-xs md:text-sm uppercase font-manrope">
                  Book Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#105EFE] to-[#AE4FFE] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button className="group px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 text-white rounded-full transition-all hover:bg-white/5 hover:border-white/40 flex items-center justify-center gap-3">
                <PlayCircle
                  size={18}
                  className="text-[#AE4FFE] group-hover:scale-110 transition-transform md:w-5 md:h-5"
                />
                <span className="font-bold tracking-wider text-xs md:text-sm uppercase font-manrope">
                  View Program
                </span>
              </button>
            </div>
            <div className="flex items-center gap-3 md:gap-4  opacity-60">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex items-center gap-4 "
              >
                <div className="flex -space-x-3">
                  <img
                    src="https://framerusercontent.com/images/xcVsFcFg7M5SkoOkJX5lUfdBUN4.jpg"
                    className="w-10 h-10 rounded-full border-2 border-black"
                  />
                  <img
                    src="	https://framerusercontent.com/images/lyyanOkQwdFqEmTN9vhLsdsi0.jpg"
                    className="w-10 h-10 rounded-full border-2 border-black"
                  />
                  <img
                    src="https://framerusercontent.com/images/a5SO6bWYO9JGc90jHykGK0g78.jpg"
                    className="w-10 h-10 rounded-full border-2 border-black"
                  />
                  <img
                    src="https://framerusercontent.com/images/xcVsFcFg7M5SkoOkJX5lUfdBUN4.jpg"
                    className="w-10 h-10 rounded-full border-2 border-black"
                  />
                  <img
                    src="	https://framerusercontent.com/images/iBem3bM7DskP1qLkV8JoHMLH68.jpg"
                    className="w-10 h-10 rounded-full border-2 border-black"
                  />
                </div>

                <p className="text-xs md:text-sm text-gray-400 font-manrope">
                  Trusted by 500+ Founders
                </p>
              </motion.div>
            </div>
          </div>
          <div
            className={`relative h-[350px] md:h-[500px] lg:h-[700px] w-full flex items-center justify-center transition-opacity duration-1000 delay-500 mt-8 lg:mt-0 ${
              heroVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#105EFE] to-transparent opacity-20 blur-2xl md:blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 left-1/4 w-40 h-40 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-[#AE4FFE] to-transparent opacity-20 blur-2xl md:blur-3xl animate-float-delayed"></div>
            <div className="relative w-[240px] h-[320px] md:w-[400px] md:h-[500px] bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-[30px] md:rounded-[40px] backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-6 md:p-8 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-[#105EFE]/10 to-transparent rounded-[30px] md:rounded-[40px]"></div>
              <div className="w-full h-full border border-white/5 rounded-2xl flex flex-col p-4 md:p-6 gap-3 md:gap-4 relative overflow-hidden">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#105EFE] to-[#AE4FFE] mb-2 md:mb-4"></div>
                <div className="w-3/4 h-3 md:h-4 bg-white/10 rounded-full"></div>
                <div className="w-1/2 h-3 md:h-4 bg-white/10 rounded-full"></div>
                <div className="mt-auto w-full h-24 md:h-32 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] animate-[shimmer_3s_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story">
        <ProgramStory />
      </section>

      {/* --- WHAT YOU GET --- */}
      <section
        id="deliverables"
        ref={featuresRef}
        className="w-full py-10 md:py-20 px-4 relative bg-gradient-to-br from-white via-slate-50 to-slate-100 flex flex-col items-center justify-center selection:bg-[#105EFE] selection:text-white"
      >
        {/* ... (Features Content) ... */}
        <div className="max-w-4xl w-full relative z-10">
          <div
            className={`text-center mb-12 md:mb-20 transition-all duration-1000 transform ${
              featuresVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-[#105EFE] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 block font-manrope">
              Deliverables
            </span>
            <h2 className="text-3xl md:text-6xl font-medium text-slate-900 leading-tight mb-4 md:mb-6 font-manrope">
              What You{" "}
              <span className="font-serif-display italic text-[#105EFE]">
                Get.
              </span>
            </h2>
            <p className="text-slate-500 font-light text-base md:text-xl max-w-2xl mx-auto font-manrope px-4">
              Tangible assets and strategic frameworks designed for immediate
              implementation.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white border border-slate-200 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-2xl hover:border-[#105EFE]/30 transition-all duration-500 transform ${
                  featuresVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-2xl md:text-4xl font-serif-display font-bold text-slate-200 group-hover:text-slate-300 transition-colors w-8 md:w-12">
                      {feature.id}
                    </span>
                    <div
                      className={`${feature.bg} ${feature.color} w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="md:hidden text-lg font-semibold text-slate-900 font-manrope group-hover:text-[#105EFE] transition-colors leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="flex-1 mt-2 md:mt-0">
                    <h3 className="hidden md:block text-2xl font-semibold text-slate-900 mb-2 font-manrope group-hover:text-[#105EFE] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 font-manrope font-light text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="hidden md:flex opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#105EFE]">
                    <ArrowRight size={28} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO: TRANSFORMATION --- */}
      <section
        id="portfolio"
        ref={portfolioRef}
        className="w-full py-20 md:py-32 px-4 relative bg-[#050505] flex flex-col items-center justify-center selection:bg-[#105EFE] selection:text-white"
      >
        {/* ... (Portfolio Content) ... */}
        <div className="max-w-6xl w-full relative z-10">
          <div
            className={`text-center mb-16 md:mb-24 transition-all duration-1000 transform ${
              portfolioVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-[#AE4FFE] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 block font-manrope">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-6xl font-medium text-white leading-tight mb-4 md:mb-6 font-manrope">
              Real Results.{" "}
              <span className="font-serif-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#AE4FFE] to-[#105EFE]">
                Real Revenue.
              </span>
            </h2>
            <p className="text-gray-400 font-light text-base md:text-xl max-w-2xl mx-auto font-manrope px-4">
              Drag the slider to see the full transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                item={item}
                isVisible={portfolioVisible}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessSection1;
