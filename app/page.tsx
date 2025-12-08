"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProductsSection } from "@/components/products-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import HeroCreative from "@/components/HeroNew"
import HeroWithVanta from "@/components/ui/Vanta"
import ProcessSection1 from "@/components/Hero1"
import ProcessSection2 from "@/components/Hero2"

import CtaNew from "@/components/CtaNew"
import WhoThisFor from "@/components/WhoThisFor"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* <HeroWithVanta /> */}
      {/* <Navigation /> */}
      {/* <HeroCreative /> */}
      <ProcessSection1 />
      <ProcessSection2 />
      <WhoThisFor />
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      {/* <StatsSection /> */}
      {/* <BenefitsSection /> */}
      {/* <ProductsSection /> */}
      <TestimonialsSection />
      {/* <CTASection /> */}
      <CtaNew />
      <FAQSection />
      <Footer />
    </div>
  )
}
