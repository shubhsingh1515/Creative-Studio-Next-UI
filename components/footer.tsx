"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  /* -------------------------------------------
      VANTA HALO EFFECT
  -------------------------------------------- */
  // useEffect(() => {
  //   if (vantaEffect) return;

  //   const loadScript = (src: string) =>
  //     new Promise<void>((resolve) => {
  //       const script = document.createElement("script");
  //       script.src = src;
  //       script.onload = () => resolve();
  //       document.body.appendChild(script);
  //     });

  //   async function initVanta() {
  //     await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");
  //     await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js");

  //     const VANTA = (window as any).VANTA;

  //     if (!vantaRef.current || vantaEffect) return;

  //     const effect = VANTA.HALO({
  //       el: vantaRef.current,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200,
  //       minWidth: 200,
  //       scale: 1.0,
  //       scaleMobile: 1.0,

  //       // ⭐ Customize these to match screenshot
  //       backgroundColor: 0x000000,
  //       baseColor: 0x000000,
  //       size: 1.1,
  //       amplitudeFactor: 0.3,
  //       xOffset: 0.22,
  //       yOffset: -0.26,
  //     });

  //     setVantaEffect(effect);
  //   }

  //   initVanta();

  //   return () => {
  //     vantaEffect?.destroy();
  //   };
  // }, [vantaEffect]);

  /* -------------------------------------------
      FOOTER UI
  -------------------------------------------- */

  return (
    <footer
      // ref={vantaRef}
      className="relative bg-black text-white pt-28 pb-12 px-6 overflow-hidden"
    >
      {/* CONTENT WRAPPER (keeps text above Vanta) */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT: Logo + description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <div className="mb-6">
            <img src="/logo/logo1.png" alt="Ardent & Leap Logo" className="w-15  md:w-20" />
          </div>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            Ardent & Leap specialises in creating viral content that cuts through digital noise
            and makes an impact. Our expert team drives real, measurable growth and turns your
            brand into a sensation.
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
            <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#cta" className="hover:text-white">Discovery Call</a></li>
            <li><a href="#faqs" className="hover:text-white">FAQs</a></li>
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
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">TikTok</a></li>
          </ul>
        </motion.div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <div className="relative z-10 max-w-7xl mx-auto mt-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition"
        >
          <ArrowUp className="text-black" size={22} />
        </button>
      </div>

      <div className="relative z-10 border-t border-gray-800 mt-12 pt-6" />

      <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center text-gray-400 text-sm">
        <p>© Ardent & Leap 2025. All rights reserved</p>

        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7">
          <path d="M3 5h14a4 4 0 014 4v10a1 1 0 01-1 1H7l-5 3V9a4 4 0 014-4z" />
        </svg>
      </div>
    </footer>
  );
}
