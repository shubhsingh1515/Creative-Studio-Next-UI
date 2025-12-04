"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Benefits", href: "#benefits" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 flex items-center justify-center gap-10 w-[100vw]  z-50"
    >
      {/* NAVBAR CONTAINER */}
      <div
        className={`flex items-center gap-10 px-8 py-1 rounded-full transition-all duration-300 border 
          ${
            isScrolled
              ? "bg-[#181818]/90 border-[#2b2b2b]"
              : "bg-[#1c1c1c] border-[#2b2b2b]"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-4 pr-6 border-r border-gray-700">
          <div className="w-14 h-14 rounded-full  flex items-center justify-center">
           <img
              src="/logo/logo1.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-gray-300 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Divider */}
          <div className="h-6 border-r border-gray-700"></div>

          {/* Call to action button */}
          <button className="bg-white text-black rounded-full px-6 py-2 font-medium hover:bg-gray-100 transition">
            Book a discovery call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-[#1a1a1a] border border-[#333] rounded-2xl p-6 text-white"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-lg font-medium hover:text-gray-300 transition"
                >
                  {link.name}
                </a>
              ))}

              <button className="bg-white text-black rounded-full px-6 py-1 font-medium">
                Book a discovery call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
