"use client";

import Header from "./Header";
import BookingPanel from "./BookingPanel";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-grid bg-background">
      {/* Radial Green Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial-glow" />

      {/* Header */}
      <Header />

      {/* Main Content Area (centered on full page) */}
      <motion.div 
        className="absolute inset-0 h-screen flex flex-col justify-center items-center z-10 pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Text Section */}
        <div className="text-center relative flex flex-col items-center">
          <motion.h1 
            variants={itemVariants}
            className="text-foreground font-heading font-medium tracking-tight text-[clamp(36px,5vw,52px)] leading-tight"
          >
            A room for people who
          </motion.h1>
          
          <div className="relative flex items-center justify-center mt-2">
            {/* Sparkles next to "build" */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 -left-12 flex items-center gap-1"
              variants={itemVariants}
            >
              <motion.span 
                className="text-white text-[28px] leading-none inline-block"
                animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >✦</motion.span>
              <motion.span 
                className="text-white text-[16px] leading-none mt-1 inline-block"
                animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >✦</motion.span>
            </motion.div>
            
            <motion.span 
              variants={itemVariants}
              className="text-brand-lime font-serif text-[clamp(80px,8vw,115px)] leading-[0.97] tracking-[-0.067em] z-10 relative px-6"
            >
              build
              {/* Oval Ring */}
              <svg 
                className="absolute top-1/2 left-1/2 w-[320px] h-[110px] pointer-events-none" 
                style={{ transform: "translate(-50%, -50%) rotate(-6deg)" }}
                viewBox="0 0 320 110" 
                preserveAspectRatio="none"
              >
                <motion.ellipse 
                  cx="160" 
                  cy="55" 
                  rx="155" 
                  ry="50" 
                  stroke="#aaff2e" 
                  strokeWidth="1.5" 
                  fill="none" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </motion.span>
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-6 mt-12 z-10">
          <button 
            onClick={() => {}}
            className="rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 text-brand-lime px-12 py-4 font-serif text-[28px] leading-none hover:bg-white/[0.08] hover:border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer"
          >
            Book a seat
          </button>
          <button 
            onClick={() => {}}
            className="rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 text-white px-12 py-4 font-serif text-[28px] leading-none hover:bg-white/[0.08] hover:border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3),inset_0_1px_1px_0_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer"
          >
            Book a tour
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative Sparkles (in main background) */}
      <motion.div 
        className="absolute top-[30px] right-[350px] text-white text-[24px] pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.div>
      <motion.div 
        className="absolute top-[55%] right-[350px] text-white text-[28px] pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        ✦
      </motion.div>

      {/* Dark arc / dome shape at bottom center */}
      <div 
        className="absolute bottom-[-30%] left-[50%] -translate-x-1/2 w-[80%] h-[300px] bg-black rounded-[100%] z-0"
      />

      {/* Right-side Booking Panel */}
      <BookingPanel />
    </section>
  );
}

