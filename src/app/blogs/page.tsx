"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import AnimatedText from "@/components/AnimatedText";
import NewsletterForm from "@/components/NewsletterForm";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden pb-24">
      {/* Background Vignettes matching homepage blogs section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-black/10 blur-[80px] z-10 pointer-events-none" />
      
      {/* Left Green Vignette - Strong edge glow */}
      <div className="absolute top-1/4 -left-48 w-1/4 h-full bg-[#5CB338]/15 blur-[140px] rounded-full z-0 pointer-events-none" />
      
      {/* Bottom Right Subtle Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#9ef01a]/5 blur-[100px] rounded-full -mr-48 -mb-48 z-0 pointer-events-none" />

      {/* Header Spacer / Top bar (matching single story page) */}
      <div className="relative w-full h-[100px] md:h-[120px] bg-[#0d0d0d] overflow-hidden z-30">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <Header />
      </div>

      <div className="container mx-auto px-6 pt-16 md:pt-24 relative z-20">
        {/* Back Link */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="group inline-flex items-center text-black/40 hover:text-black font-body text-xs md:text-sm uppercase tracking-[0.2em] transition-all"
          >
            <span className="mr-3 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>
        </div>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
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
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-28"
        >
          {blogs.map((blog) => (
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
                
                {/* Meta details */}
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

        {/* Newsletter Subscription */}
        <div className="pt-24 border-t border-black/5">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-black mb-4">
              Get notified of new insights.
            </h2>
            <p className="font-body text-lg text-black/60">
              Join 5,000+ builders getting our weekly perspectives from the room.
            </p>
          </div>

          <div className="mb-12 flex justify-center w-full">
            <NewsletterForm 
              buttonText="subscribe" 
              shadowClass="shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              buttonPaddingClass="py-4"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
