"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VideoShowcaseSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#0d0d0d] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background Grid with Fade */}
      <div 
        className="absolute inset-0 bg-grid pointer-events-none" 
        style={{ 
          maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 80%)"
        }}
      />
      
      {/* Video Card Wrapper */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[860px] aspect-video group cursor-pointer"
      >
        {/* The Card */}
        <div 
          className="relative w-full h-full rounded-[48px] border-[24px] border-[#9ef01a] overflow-hidden shadow-[0_0_60px_rgba(158,240,26,0.25),0_0_120px_20px_rgba(158,240,26,0.10)]"
        >
          {/* B&W Office Thumbnail */}
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
            alt="LOFT Office Interior"
            fill
            className="object-cover grayscale brightness-[0.75] transition-all duration-700 group-hover:scale-105"
          />

          {/* Glassmorphism Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[72px] h-[72px] rounded-full bg-white/15 backdrop-blur-md border-2 border-white/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {/* Play Arrow */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="white" 
                className="ml-1"
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
        </div>

      </motion.div>

      {/* CTA Pill Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 z-10"
      >
        <button 
          className="px-10 py-3.5 rounded-full bg-[#1a1a1a] border border-white/15 shadow-[0_2px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-[#252525] hover:border-white/25 active:scale-95"
        >
          <span className="font-serif text-[#9ef01a] text-lg tracking-tight">
            Try LOFT for a day
          </span>
        </button>

      </motion.div>

      {/* Decorative Sparkle */}
      <div className="absolute bottom-[12%] right-[8%] text-white/60 text-xl pointer-events-none select-none">
        ✦
      </div>
    </section>
  );
}
