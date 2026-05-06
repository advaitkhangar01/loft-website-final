"use client";

import { motion } from "framer-motion";

export default function EarlyAccessSection() {
  return (
    <section className="relative w-full bg-[#0d0d0d] text-white py-24 overflow-hidden border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-8 relative z-10 flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div 
          className="mb-24 flex justify-center w-full relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative inline-flex items-center justify-center px-12 py-8">
            {/* Hand-drawn Oval SVG */}
            <svg 
              className="absolute inset-0 w-full h-full text-brand-lime" 
              viewBox="0 0 400 120" 
              preserveAspectRatio="none"
              fill="none"
            >
              <path 
                d="M200 10C300 10 390 30 390 60C390 90 300 110 200 110C100 110 10 90 10 60C10 30 100 10 200 10Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="opacity-80"
              />
              <path 
                d="M180 15C290 15 380 35 380 60C380 85 290 105 180 105C80 105 20 85 20 60C20 35 80 15 180 15Z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
            </svg>
            <div className="text-center relative z-10">
              <h2 className="font-serif text-[clamp(40px,5vw,56px)] leading-tight tracking-tight">
                Limited seats.
              </h2>
              <h2 className="font-serif text-[clamp(40px,5vw,56px)] leading-tight tracking-tight">
                Early access open.
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Locations Columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 w-full mb-20 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Decorative Sparkle Left */}
          <div className="absolute -left-12 top-0 text-white text-2xl hidden md:block">✦</div>
          
          {/* Column 1: IT Park */}
          <motion.div 
            className="flex flex-col border-b md:border-b-0 md:border-r border-white/10 pb-12 md:pb-0 md:pr-12 lg:pr-24"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <h3 className="font-serif text-[clamp(48px,6vw,72px)] leading-none mb-8 tracking-[-0.02em]">
              01 : IT Park
            </h3>
            <p className="text-brand-lime font-body text-[clamp(20px,2vw,28px)] leading-snug mb-12">
              Located in the heart of Nagpur's tech district. Built for those moving fast — with the infrastructure to match.
            </p>
            <div className="mt-auto">
              <p className="text-white/60 font-body text-xl mb-1">Limited Seats Available</p>
              <p className="text-white/60 font-body text-xl mb-1">50+ Seater | 7 Cabins</p>
              <p className="text-white/60 font-body text-xl">IT Park, Nagpur</p>
            </div>
          </motion.div>

          {/* Column 2: Abhyankar Nagar */}
          <motion.div 
            className="flex flex-col pt-12 md:pt-0 md:pl-12 lg:pl-24"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <h3 className="font-serif text-[clamp(48px,6vw,72px)] leading-none mb-8 tracking-[-0.02em]">
              02 : Abhyankar Nagar
            </h3>
            <p className="text-brand-lime font-body text-[clamp(20px,2vw,28px)] leading-snug mb-12">
              A quieter, residential pocket with exceptional connectivity. Designed for deep work and deliberate thinking.
            </p>
            <div className="mt-auto">
              <p className="text-white/60 font-body text-xl mb-1">Early Access Open</p>
              <p className="text-white/60 font-body text-xl mb-1">150+ Seats | 9 Cabins</p>
              <p className="text-white/60 font-body text-xl">Abhyankar Nagar, Nagpur</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <button className="rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-brand-lime px-10 py-4 font-serif text-2xl hover:bg-white/5 transition-colors">
            Book a seat
          </button>
          <button className="rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white px-10 py-4 font-serif text-2xl hover:bg-white/5 transition-colors">
            Book a tour
          </button>
        </div>

        {/* Decorative Sparkle Right */}
        <div className="absolute right-0 bottom-0 text-white text-3xl hidden md:block">✦</div>

      </div>
    </section>
  );
}
