"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What makes your service unique?",
      answer:
        "Our unique approach combines data-driven strategies with creative excellence to deliver viral content that drives real results. We specialize in understanding your audience and creating campaigns that resonate.",
    },
    {
      question: "What guarantee do you offer your clients?",
      answer:
        "We guarantee to go viral within 90 days or we continue working until we achieve results. Our track record speaks for itself with over 50 successful viral campaigns.",
    },
    {
      question: "What additional services do you offer?",
      answer:
        "Beyond social media marketing, we offer content creation, web design & development, influencer marketing, and professional photography services.",
    },
    {
      question: "How are your prices structured?",
      answer:
        "We offer transparent, fixed monthly pricing with no hidden fees. Choose from our packages or contact us for a custom solution tailored to your needs.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a satisfaction guarantee. If you're not happy with our service in the first 30 days, we'll provide a full refund.",
    },
    {
      question: "How long is commitment required?",
      answer:
        "We recommend a minimum 3-month commitment to see significant results, but we offer flexible monthly plans that can be adjusted based on your needs.",
    },
    {
      question: "What niches do you specialise in?",
      answer:
        "We work across various industries including tech, e-commerce, lifestyle, fitness, and B2B services. Our diverse portfolio demonstrates our ability to create viral content in any niche.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 bg-white text-black">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Any <span className="">Questions?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-16"
        >
          Find answers to common questions about our services and process.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-xl px-6 hover:border-gray-300 transition-colors"
              >
                <AccordionTrigger className="text-left text-base md:text-lg hover:text-black transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
