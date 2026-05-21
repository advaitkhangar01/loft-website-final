"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoShowcaseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState<"it-park" | "abhyankar">("it-park");

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
        onClick={() => {
          setActiveLocation("it-park");
          setIsModalOpen(true);
        }}
        className="relative z-10 w-full max-w-[860px] aspect-video group cursor-pointer"
      >
        {/* The Card */}
        <div 
          className="relative w-full h-full rounded-[24px] sm:rounded-[48px] border-[8px] sm:border-[24px] border-[#9ef01a] overflow-hidden shadow-[0_0_60px_rgba(158,240,26,0.25),0_0_120px_20px_rgba(158,240,26,0.10)]"
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
          onClick={() => {
            setActiveLocation("it-park");
            setIsModalOpen(true);
          }}
          className="px-12 py-4 rounded-full bg-gradient-to-r from-[#2a2a2a]/95 to-[#161616]/95 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-300 hover:from-[#333333] hover:to-[#202020] hover:border-white/25 active:scale-[0.97] cursor-pointer flex items-center justify-center"
        >
          <span 
            className="font-serif text-[#9ef01a] text-[24px] sm:text-[28px] leading-none tracking-tight block"
            style={{ paddingRight: "0.15em" }}
          >
            Try LOFT for a day
          </span>
        </button>
      </motion.div>

      {/* Decorative Sparkle */}
      <div className="absolute bottom-[12%] right-[8%] text-white/60 text-xl pointer-events-none select-none">
        ✦
      </div>

      {/* Interactive Walkthrough Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-[900px] max-h-[90vh] bg-[#141414] border border-white/10 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col"
            >
              {/* Header / Tabs */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-b border-white/5 gap-4 shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9ef01a] shadow-[0_0_10px_rgba(158,240,26,0.5)] animate-pulse" />
                  <h3 className="font-serif text-white text-2xl tracking-tight">Walkthrough Video</h3>
                </div>
                
                {/* Tabs */}
                <div className="flex bg-[#0d0d0d] p-1 rounded-full border border-white/5 shadow-inner">
                  <button
                    onClick={() => setActiveLocation("it-park")}
                    className={`px-6 py-2 rounded-full font-body text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      activeLocation === "it-park"
                        ? "bg-[#9ef01a] text-black shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    IT Park
                  </button>
                  <button
                    onClick={() => setActiveLocation("abhyankar")}
                    className={`px-6 py-2 rounded-full font-body text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      activeLocation === "abhyankar"
                        ? "bg-[#9ef01a] text-black shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Abhyankar Nagar
                  </button>
                </div>

                {/* Close Button Desktop */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="hidden sm:flex w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer text-sm font-body"
                >
                  ✕
                </button>
              </div>

              {/* Video Player Container */}
              <div className="relative flex-1 min-h-0 bg-[#000000] flex items-center justify-center overflow-hidden">
                <video
                  key={activeLocation}
                  src={activeLocation === "it-park" ? "/videos/IT_Park.mp4" : "/videos/Abhyankar_nagar.mp4"}
                  autoPlay
                  controls
                  playsInline
                  className="w-full max-h-[48vh] sm:max-h-[52vh] object-contain"
                />
              </div>

              {/* Description Footer */}
              <div className="p-4 sm:p-6 bg-[#0f0f0f] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <p className="font-body text-gray-400 text-sm sm:text-base leading-relaxed text-center sm:text-left max-w-xl">
                  {activeLocation === "it-park"
                    ? "Welcome to Nagpur's premium workspace at IT Park. Architecturally planned for scale, featuring hot desks, executive suites, and luxury team hubs."
                    : "Welcome to Nagpur's creative heart at Abhyankar Nagar. Built around container-style modular architecture, offering flexible spaces and collaborative networking hubs."}
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="sm:hidden w-full px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 text-sm font-body cursor-pointer"
                >
                  Close Tour
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
