"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".card");
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 100,
          rotateZ: 0,
        },
        {
          opacity: 1,
          y: 0,
          rotateZ: (index) => [8, -12, 5][index],
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    if (shapesRef.current) {
      const shapes = shapesRef.current.querySelectorAll(".blue-shape");
      shapes.forEach((shape, index) => {
        gsap.to(shape, {
          rotation: 360,
          duration: index === 0 ? 20 : 15,
          repeat: -1,
          ease: "none",
        });
      });
    }

    if (heroRef.current) {
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm text-gray-400 mb-4 tracking-wide"
            >
              Your Gateway to Creative Excellence
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-[1.1] text-white"
            >
              We Help Premium Brands Achieve Explosive Growth Through Strategic
              Organic Content.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-black font-medium text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Book a Discovery Call
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Tilted Cards with Blue Shapes */}
          <div className="relative h-[500px] md:h-[600px] hidden lg:block">
            <div ref={shapesRef} className="absolute inset-0">
              <div
                className="blue-shape absolute right-0 top-1/4 w-48 h-48 xl:w-64 xl:h-64"
                style={{
                  background:
                    "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  transform: "rotate(45deg)",
                }}
              />
              <div
                className="blue-shape absolute right-16 bottom-1/4 w-40 h-40 xl:w-48 xl:h-48"
                style={{
                  background:
                    "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  transform: "rotate(25deg)",
                  opacity: 0.9,
                }}
              />
            </div>

            <div ref={cardsRef} className="relative h-full">
              {/* Card 1 */}
              <motion.div
                className="card absolute top-8 left-0 w-56 xl:w-64 h-72 xl:h-80 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  transform: "rotate(8deg)",
                  zIndex: 4,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 6,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src="/images/car.png"
                  alt="Luxury car interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="card absolute top-20 right-8 w-64 xl:w-72 h-80 xl:h-96 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  transform: "rotate(-12deg)",
                  zIndex: 3,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: -10,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src="/images/prod1.png"
                  alt="Design work"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="card absolute bottom-0 left-16 w-52 xl:w-56 h-64 xl:h-72 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  transform: "rotate(5deg)",
                  zIndex: 2,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 3,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src="/images/prod4.png"
                  alt="Social media"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* ⭐ NEW Card 4 — Matches reference screenshot */}
              <motion.div
                className="card absolute bottom-0 right-20 w-60 xl:w-72 h-72 xl:h-80 rounded-xl overflow-hidden shadow-2xl"
                style={{
                  transform: "rotate(10deg)",
                  zIndex: 1,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 8,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src="/images/prod2.png"
                  alt="Home interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
