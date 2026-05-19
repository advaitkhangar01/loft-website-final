"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function EarlyAccessSection() {
  return (
    <section className="relative w-full bg-[#0d0d0d] text-white py-16 overflow-hidden border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-80 pointer-events-none" />
      
      {/* Radial Glow Overlay */}
      <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto px-8 relative z-10 flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div 
          className="mb-16 flex justify-center w-full relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative inline-flex items-center justify-center px-10 py-4">
            {/* Hand-drawn Oval SVG */}
            <svg 
              className="absolute inset-0 w-full h-full text-brand-lime scale-x-105 scale-y-110 rotate-[-3deg]" 
              viewBox="0 0 400 120" 
              preserveAspectRatio="none"
              fill="none"
            >
              <path 
                d="M 20,60 C 20,25 100,10 200,10 C 300,10 380,25 380,60 C 380,95 300,110 200,110 C 100,110 30,95 15,65 C 8,50 45,28 90,20" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                className="opacity-80"
              />
              <path 
                d="M 35,55 C 35,32 105,16 190,16 C 275,16 365,32 365,55 C 365,78 275,98 190,98 C 105,98 45,78 30,60 C 22,50 50,35 85,28" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center relative z-10">
              <AnimatedText 
                text="Limited seats."
                className="font-serif text-[clamp(32px,3.8vw,46px)] leading-tight tracking-tight justify-center"
              />
              <AnimatedText 
                text="Early access open."
                className="font-serif text-[clamp(32px,3.8vw,46px)] leading-tight tracking-tight justify-center"
                delay={0.2}
              />
            </div>
          </div>
        </motion.div>

        {/* Locations Columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 w-full mb-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Decorative Sparkle Left */}
          <div className="absolute -left-12 top-20 text-white/40 text-2xl hidden md:block animate-pulse">✦</div>
          
          {/* Column 1: IT Park */}
          <motion.div 
            className="flex flex-col border-b md:border-b-0 md:border-r border-white/10 pb-12 md:pb-0 md:pr-10 lg:pr-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <h3 className="font-serif text-[clamp(36px,4.5vw,52px)] leading-none mb-6 tracking-[-0.02em]">
              01 : IT Park
            </h3>
            <p className="text-brand-lime font-body text-[clamp(17px,1.6vw,22px)] leading-snug mb-6">
              Located in the heart of Nagpur's tech district. Built for those moving fast — with the infrastructure to match.
            </p>
            <div className="mt-auto">
              <p className="text-white/60 font-body text-lg mb-1">Limited Seats Available</p>
              <p className="text-white/60 font-body text-lg mb-1">50+ Seater | 7 Cabins</p>
              <p className="text-white/60 font-body text-lg">IT Park, Nagpur</p>
            </div>
          </motion.div>

          {/* Column 2: Abhyankar Nagar */}
          <motion.div 
            className="flex flex-col pt-12 md:pt-0 md:pl-10 lg:pl-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <h3 className="font-serif text-[clamp(36px,4.5vw,52px)] leading-none mb-6 tracking-[-0.02em]">
              02 : Abhyankar Nagar
            </h3>
            <p className="text-brand-lime font-body text-[clamp(17px,1.6vw,22px)] leading-snug mb-6">
              A quieter, residential pocket with exceptional connectivity. Designed for deep work and deliberate thinking.
            </p>
            <div className="mt-auto">
              <p className="text-white/60 font-body text-lg mb-1">Early Access Open</p>
              <p className="text-white/60 font-body text-lg mb-1">150+ Seats | 9 Cabins</p>
              <p className="text-white/60 font-body text-lg">Abhyankar Nagar, Nagpur</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md text-brand-lime px-7 py-3 font-serif text-lg hover:from-white/15 hover:to-white/5 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:border-white/20 hover:scale-105 cursor-pointer">
            Book a seat
          </button>
          <button className="rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md text-white px-7 py-3 font-serif text-lg hover:from-white/15 hover:to-white/5 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:border-white/20 hover:scale-105 cursor-pointer">
            Book a tour
          </button>
        </motion.div>

        {/* Decorative Sparkle Right */}
        <div className="absolute right-12 bottom-12 text-white/30 text-3xl hidden md:block animate-pulse">✦</div>

      </div>
    </section>
  );
}
