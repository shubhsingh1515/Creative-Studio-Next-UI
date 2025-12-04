"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  /* ------------------------------
     VANTA DOTS BACKGROUND
  ------------------------------ */
  useEffect(() => {
    if (vantaEffect) return;

    const loadScript = (src: string) =>
      new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    async function initVanta() {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js");

      const VANTA = (window as any).VANTA;

      if (vantaRef.current) {
        const effect = VANTA.DOTS({
          el: vantaRef.current,
          THREE: (window as any).THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xf9f0f0, // light pink-ish like screenshot
          color: 0xff8820,           // orange dots
          color2: 0xd9b17d,          // secondary beige color
          size: 5.1,
          spacing: 35,
          showLines: false,
        });

        setVantaEffect(effect);
      }
    }

    initVanta();

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      id="about"
      ref={vantaRef}
      className="relative py-24 px-4 text-black overflow-hidden"
    >
      {/* Content Layer (always above Vanta) */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-normal mb-6">
            Ardent & Leap specialises in{" "}
            <a href="#" className="text-blue-600 font-medium">
              creating content
            </a>{" "}
            that cuts through digital noise and makes an impact. Our{" "}
            <a href="#" className="text-blue-600 font-medium">
              expert team
            </a>{" "}
            drives{" "}
            <a href="#" className="text-blue-600 font-medium">
              real,
            </a>{" "}
            <a href="#" className="text-blue-600 font-medium">
              measurable growth
            </a>{" "}
            and turns your brand into a sensation.
          </h2>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="mt-8 text-gray-600 hover:text-black transition-colors flex items-center gap-2 mx-auto"
          >
            Get Mission
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10h12m0 0l-6-6m6 6l-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
