"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* LEFT: Logo + description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          {/* LOGO */}
          <div className="mb-6">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              stroke="white"
              fill="none"
              strokeWidth="2"
            >
              <path d="M10.59 13.41a2 2 0 010-2.82l2.12-2.12a2 2 0 112.82 2.82l-1.41 1.41-1.41 1.41a2 2 0 01-2.82 0z"></path>
            </svg>
          </div>

          {/* TEXT */}
          <p className="text-gray-300 leading-relaxed text-[15px]">
            Signature Club specialises in creating viral content that cuts
            through digital noise and makes an impact. Our expert team drives
            real, measurable growth and turns your brand into a sensation.
          </p>
        </motion.div>

        {/* CENTER MENU */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="ml-10 px-5"
        >
          <h3 className="text-xl font-semibold mb-6">Menu</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <a href="#benefits" className="hover:text-white">
                Benefits
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#cta" className="hover:text-white">
                Discovery Call
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </motion.div>

        {/* RIGHT CONNECT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                TikTok
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <div className="max-w-7xl mx-auto mt-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition"
        >
          <ArrowUp className="text-black" size={22} />
        </button>
      </div>

      {/* LINE DIVIDER */}
      <div className="border-t border-gray-800 mt-12 pt-6" />

      {/* BOTTOM COPYRIGHT */}
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-400 text-sm">
        <p>© Signature Club 2025. All rights reserved</p>

        {/* small icon right bottom */}
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.7"
        >
          <path d="M3 5h14a4 4 0 014 4v10a1 1 0 01-1 1H7l-5 3V9a4 4 0 014-4z" />
        </svg>
      </div>
    </footer>
  );
}
