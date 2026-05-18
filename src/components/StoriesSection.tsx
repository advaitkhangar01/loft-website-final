"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { stories } from "@/data/stories";

export default function StoriesSection() {
  return (
    <section id="stories" className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Top Black Vignette/Shadow - Centered horizontal shadow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-black/15 blur-[80px] z-10 pointer-events-none" />
      
      {/* Right Green Vignette - Strong edge glow */}
      <div className="absolute top-0 -right-48 w-1/4 h-full bg-[#5CB338]/20 blur-[140px] rounded-full z-0 pointer-events-none" />
      
      {/* Bottom Left Subtle Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lime/5 blur-[100px] rounded-full -ml-48 -mb-48 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="flex flex-col">
            <AnimatedText 
              text="Stories"
              className="font-heading text-5xl md:text-7xl font-bold text-black tracking-tight leading-none mb-2"
            />
            <AnimatedText 
              text="From the Room"
              className="font-serif text-6xl md:text-8xl text-[#5CB338] leading-none"
              delay={0.2}
            />
          </div>
          
          <div className="max-w-xl">
            <p className="font-body text-lg md:text-xl text-black/80 leading-relaxed">
              Perspectives on work, building, and the founder life written from inside LOFT. 
              Every week, we publish something worth reading. Sometimes it is a founder story from 
              someone working out of one of our cabins. Sometimes it is a reflection on how 
              environment shapes ambition, or a recap from a LOFT Night that left the room buzzing.
            </p>
          </div>
        </div>

        {/* Newsletter Subscription Pill */}
        <div className="flex justify-center mb-24">
          <div className="bg-white rounded-full shadow-[0_10px_50px_rgba(0,0,0,0.08)] flex items-center p-2 w-full max-w-2xl group border border-gray-50">
            <input 
              type="email" 
              placeholder="your email" 
              className="bg-transparent flex-grow px-8 font-body text-black/60 outline-none"
              readOnly
            />
            <button 
              type="button"
              className="bg-[#1a1a1a] text-white px-10 py-3 rounded-full font-body font-semibold hover:bg-black transition-colors"
            >
              submit
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {stories.map((story) => (
            <motion.div 
              key={story.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <Link href={`/stories/${story.slug}`} className="flex flex-col group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6">
                <Image 
                  src={story.image} 
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-black leading-tight group-hover:text-black/70 transition-colors">
                {story.title}
              </h3>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
