"use client";

import { motion } from "framer-motion";

export function ProductsSection() {
  const products = [
    {
      title: "Content Creation & Social Media Management",
      description:
        "Our expertly crafted content is designed to captivate your audience, boost engagement, and drive more traffic to your platforms, turning visitors into loyal customers.",
      image: "/images/prod1.png",
    },
    {
      title: "Talent Sourcing",
      description:
        "Find the right talent to bring your vision to life. We connect you with skilled professionals who align with your brand's goals and creative direction.",
      image: "/images/prod2.png",
    },
    {
      title: "Growth Partnership",
      description:
        "Partner with us for sustained growth. We work alongside your team to develop strategies that scale your brand and maximize your market presence.",
      image: "/images/prod3.png",
    },
    {
      title: "Web Design & AI Automation",
      description:
        "We create stunning, user-friendly websites with AI-powered automations to streamline your workflows and enhance customer experiences.",
      image: "/images/prod4.png",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white text-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="block">
              Products <span className="font-serif italic">that</span>
            </span>
            <span className="block">
              Deliver <span className="font-serif italic">Results.</span>
            </span>
          </h2>
        </motion.div>

        {/* First row - Large card and small card */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-black"
          >
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={products[0].image || "/placeholder.svg"}
                alt={products[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {products[0].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {products[0].description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative rounded-3xl overflow-hidden bg-black"
          >
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={products[1].image || "/placeholder.svg"}
                alt={products[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{products[1].title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {products[1].description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Second row - Small card and large card */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative rounded-3xl overflow-hidden bg-black"
          >
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={products[2].image || "/placeholder.svg"}
                alt={products[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{products[2].title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {products[2].description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-black"
          >
            <div className="relative h-[400px] overflow-hidden">
              <img
                src={products[3].image || "/placeholder.svg"}
                alt={products[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {products[3].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {products[3].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
