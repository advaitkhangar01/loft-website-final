"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OriginSection() {
  return (
    <section className="relative w-full bg-[#0d0d0d] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Premium Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-brand-lime/5 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-[1600px] px-4 md:px-8 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          className="relative w-full transition-all duration-500 scale-[1.25] sm:scale-110 md:scale-100 origin-center" 
          style={{ aspectRatio: "1920/1080" }}
        >
          <Image
            src="/homepage-8th-section.png"
            alt="The Origin of LOFT"
            fill
            className="object-contain filter drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
