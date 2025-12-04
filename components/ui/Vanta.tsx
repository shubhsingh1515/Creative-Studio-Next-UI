"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

export default function HeroCreativeWithVanta() {

  /* -------------------------------------------
     STAR + ARROW ANIMATIONS
  -------------------------------------------- */
  const starRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Star animation
    if (starRef.current) {
      starRef.current.animate(
        [
          { transform: "rotate(0deg) scale(1)" },
          { transform: "rotate(360deg) scale(1.15)" },
        ],
        { duration: 3000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" }
      );
    }

    // Animated arrow
    if (arrowRef.current) {
      arrowRef.current.style.strokeDasharray = "300";
      arrowRef.current.style.strokeDashoffset = "300";

      arrowRef.current.animate(
        [
          { strokeDashoffset: "300" },
          { strokeDashoffset: "0" }
        ],
        { duration: 2000, easing: "ease-out", fill: "forwards" }
      );

      arrowRef.current.animate(
        [
          { opacity: 1 },
          { opacity: 0.4 }
        ],
        { duration: 1500, iterations: Infinity, direction: "alternate" }
      );
    }
  }, []);

  /* -------------------------------------------
     VANTA BACKGROUND (working version)
  -------------------------------------------- */
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (vantaEffect) return;

    const loadScript = (src: string) =>
      new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

    async function loadVanta() {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js");

      const VANTA = (window as any).VANTA;

      if (vantaRef.current) {
        const effect = VANTA.NET({
          el: vantaRef.current,
          THREE: (window as any).THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          color: 0xf71460,
          backgroundColor: 0x000000,
          spacing: 15,
          maxDistance: 20,
          points: 10,
          showDots: true,
        });

        setVantaEffect(effect);
      }
    }

    loadVanta();

    return () => {
      vantaEffect?.destroy();
    };
  }, [vantaEffect]);

  /* -------------------------------------------
     UI + CONTENT
  -------------------------------------------- */

  return (
    <section
      ref={vantaRef}
      className="relative w-full min-h-screen text-white flex items-center px-6 md:px-12 lg:px-20 overflow-hidden"
    >

      {/* --- LEFT CONTENT --- */}
      <div className="w-full lg:w-1/2 relative z-10">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-[1.1]"
        >
          A creative{" "}
          <span ref={starRef} className="inline-block text-lime-400 mx-2">
            *
          </span>
          <br />
          design studio
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-6 text-lg max-w-lg"
        >
          We're a creative design studio specializing in meeting the needs of the new generation.
          We offer innovative and cutting-edge design solutions to help our clients stand out.
        </motion.p>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex items-center gap-4 mt-8"
        >
          <div className="flex -space-x-3">
            <img src="/images/user1.png" className="w-10 h-10 rounded-full border-2 border-black" />
            <img src="/images/user2.png" className="w-10 h-10 rounded-full border-2 border-black" />
            <img src="/images/user3.png" className="w-10 h-10 rounded-full border-2 border-black" />
          </div>

          <p className="text-gray-200 text-sm md:text-base">
            Believed by more than a thousand people
          </p>
        </motion.div>

        {/* CTA BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 px-8 py-4 bg-lime-400 text-black rounded-full flex items-center gap-3 shadow-xl hover:scale-105 transition-all"
        >
          Book a free consultation
          <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-full">
            📞
          </div>
        </motion.button>

        {/* Arrow */}
        <svg
          className="absolute bottom-10 left-40 hidden md:block"
          width="240"
          height="120"
          fill="none"
          stroke="lime"
          strokeWidth="4"
        >
          <path
            ref={arrowRef}
            d="M5 60 C 80 20, 150 120, 230 40"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="hidden lg:block lg:w-1/2 relative z-10"
      >
        <div className="rounded-3xl overflow-hidden border-[6px] border-lime-200 shadow-2xl">
          <img
            src="/images/car.png"
            className="w-full h-[520px] object-cover"
            alt="Creative Team"
          />
        </div>
      </motion.div>

    </section>
  );
}
