"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function LocationSection() {
  return (
    <section id="location" className="bg-black text-white py-32 px-6 flex flex-col items-center overflow-hidden">
      {/* Top Statement */}
      <div className="max-w-4xl text-center mb-40 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="font-body font-normal text-[clamp(28px,3.5vw,38px)] leading-[1.3] tracking-tight"
        >
          LOFT is not a <span className="text-[#9ef01a]">coworking</span> space. It's a <span className="font-serif text-[#9ef01a]">declaration</span> that where you <span className="text-[#9ef01a]">work matters</span>, that the people around you shape what you build, and that the right room can be the <span className="font-serif text-[#9ef01a]">beginning of everything.</span>
        </motion.h2>
      </div>

      {/* Address Selection Section */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 relative">
        
        {/* Decorative Sparkle (Left) */}
        <div className="absolute top-[-40px] left-[2%] text-white text-[28px] hidden lg:block opacity-90 animate-pulse">
          ✦
        </div>

        {/* IT Park Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative w-full lg:w-[36%] aspect-[3.5/4] rounded-[60px] overflow-hidden -rotate-[5deg] hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer shadow-2xl z-20"
        >
          <Image 
            src="/assets/locations/it-park.png" 
            alt="IT Park Location"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          
          {/* Glass Caption */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a]/60 backdrop-blur-2xl border border-white/20 px-12 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="font-serif text-white text-[22px] whitespace-nowrap">IT Park</span>
          </div>
        </motion.div>

        {/* Center Text Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center px-4 z-10 py-12 lg:py-0 w-full lg:w-[28%]"
        >
          <AnimatedText 
            text="Two Addresses"
            className="font-body font-medium text-[38px] lg:text-[42px] tracking-tight mb-0 leading-none justify-center"
          />
          <AnimatedText 
            text="One Vision"
            className="font-serif text-brand-lime text-[clamp(70px,8vw,110px)] leading-[0.85] tracking-tighter mb-6 mt-1 justify-center"
            delay={0.3}
          />
          <p className="font-body text-gray-400 text-base lg:text-lg max-w-[240px] leading-relaxed mx-auto">
            Choose your base of operations from Nagpur's most intentionally designed work environments.
          </p>
        </motion.div>

        {/* Abhyankar Nagar Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="group relative w-full lg:w-[36%] aspect-[3.5/4] rounded-[60px] overflow-hidden rotate-[5deg] hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer shadow-2xl z-20"
        >
          <Image 
            src="/assets/locations/abhyankar-container.png" 
            alt="Abhyankar Nagar Location"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Glass Caption */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#1a1a1a]/60 backdrop-blur-2xl border border-white/20 px-10 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <span className="font-serif text-white text-[22px] whitespace-nowrap">Abhyankar Nagar</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
