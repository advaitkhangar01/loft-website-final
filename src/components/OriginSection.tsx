"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OriginSection() {
  return (
    <section className="relative w-full bg-[#0d0d0d] flex items-center justify-center overflow-hidden py-20">
      <div className="w-full max-w-[1600px] px-4 md:px-8 flex justify-center">
        {/* Using the SVG directly as requested */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full" style={{ aspectRatio: "1920/1080" }}
        >
          <Image
            src="/homepage-8th-section.png"
            alt="The Origin of LOFT"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
