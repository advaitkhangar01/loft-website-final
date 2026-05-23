"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { blogs } from "@/data/blogs";

export default function BlogsSection() {
  // We only display the first 3 blogs on the homepage section
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section id="blogs" className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Top Black Vignette/Shadow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-black/10 blur-[80px] z-10 pointer-events-none" />
      
      {/* Left Green Vignette - Strong edge glow */}
      <div className="absolute top-1/4 -left-48 w-1/4 h-full bg-[#5CB338]/15 blur-[140px] rounded-full z-0 pointer-events-none" />
      
      {/* Bottom Right Subtle Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#9ef01a]/5 blur-[100px] rounded-full -mr-48 -mb-48 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div className="flex flex-col">
            <AnimatedText 
              text="Insights"
              className="font-body text-5xl md:text-7xl font-normal text-black tracking-tight leading-none mb-2"
            />
            <AnimatedText 
              text="From the Ecosystem"
              className="font-serif text-6xl md:text-8xl text-[#5CB338] leading-none"
              delay={0.2}
            />
          </div>
          
          <div className="max-w-xl">
            <p className="font-body text-lg md:text-xl text-black/80 leading-relaxed">
              Deep dives on space design, fundraising, product-market fit, and the competitive advantages of 
              building from tier-2 cities. Written by the team and founders inside LOFT.
            </p>
          </div>
        </div>

        {/* Blogs Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {latestBlogs.map((blog) => (
            <motion.div 
              key={blog.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex"
            >
              <Link href={`/blogs/${blog.slug}`} className="flex flex-col group cursor-pointer w-full">
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-md border border-black/5 bg-gray-100">
                  <Image 
                    src={blog.image} 
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Meta details: Date & Read Time */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-xs text-black/40 font-bold uppercase tracking-wider">{blog.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
                  <span className="font-body text-xs text-[#5CB338] font-bold uppercase tracking-wider">{blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-black leading-tight group-hover:text-[#5CB338] transition-colors mb-3">
                  {blog.title}
                </h3>
                
                {/* Excerpt */}
                <p className="font-body text-sm md:text-base text-black/60 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs rounded-full bg-gray-50 border border-black/5 text-black/60 font-body"
                    >
                      #{tag.toLowerCase()}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA Button */}
        <div className="flex justify-center w-full mt-12">
          <Link 
            href="/blogs"
            className="group relative inline-flex items-center gap-3 bg-black text-white px-10 py-4.5 rounded-full font-body font-bold text-base overflow-hidden transition-all hover:bg-black/90 hover:scale-102 cursor-pointer shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Blogs
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
