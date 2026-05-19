"use client";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function EventsSection() {
  return (
    <section className="relative w-full min-h-screen bg-white text-black flex items-center justify-center overflow-hidden">
      {/* Soft Green Gradient Background on the Left */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(158, 240, 26, 0.15), transparent)"
        }}
      />
      
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-16 py-24 flex flex-col md:flex-row justify-between gap-16 md:gap-24 relative z-10">
        
        {/* Left Column: Events List */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="flex-1 flex flex-col justify-center"
        >
          
          {/* Event 1 */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="border-b border-black/20 pb-8 mb-8"
          >
            <h3 className="font-serif text-[clamp(32px,4vw,48px)] leading-none mb-3">
              Founder Roundtable
            </h3>
            <p className="font-body text-lg text-black/80">
              Monthly • Invite-only
            </p>
          </motion.div>
          
          {/* Event 2 */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="border-b border-black/20 pb-8 mb-8"
          >
            <h3 className="font-serif text-[clamp(32px,4vw,48px)] leading-none mb-3">
              Pitch Practice Sessions
            </h3>
            <p className="font-body text-lg text-black/80">
              Bi-weekly
            </p>
          </motion.div>
          
          {/* Event 3 */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="pb-8"
          >
            <h3 className="font-serif text-[clamp(32px,4vw,48px)] leading-none mb-3">
              Expert Workshops
            </h3>
            <p className="font-body text-lg text-black/80">
              Monthly • Various topics
            </p>
          </motion.div>

        </motion.div>

        {/* Right Column: Title and Description */}
        <div className="flex-1 flex flex-col justify-center text-right items-end">
          <AnimatedText 
            text="Loft After-Hours"
            className="font-body text-[clamp(36px,4.5vw,56px)] tracking-tight leading-none mb-2 font-normal justify-end w-full"
          />
          <AnimatedText 
            text="Something always happening"
            className="font-serif text-[#5CB338] text-[clamp(40px,5.2vw,76px)] leading-none mb-6 tracking-[-0.04em] justify-end w-full whitespace-nowrap flex-nowrap"
            style={{ fontStyle: "normal", flexWrap: "nowrap" }}
            delay={0.2}
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-base md:text-lg text-black/85 leading-relaxed max-w-[550px] text-right mb-8"
          >
            We host regular sessions for the people inside LOFT — not webinars, not generic panels. Real conversations between people actually building things.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-end gap-4"
          >
            <span className="text-2xl font-light text-black select-none">↳</span>
            <button 
              type="button"
              className="bg-[#1a1a1a] text-white rounded-full px-8 py-3.5 font-body text-base font-semibold hover:bg-black transition-colors"
            >
              get invited
            </button>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
