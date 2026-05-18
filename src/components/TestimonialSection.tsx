"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { damping: 20, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Auto-cycle testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-black text-white overflow-hidden flex flex-col items-center justify-center pt-12 md:pt-16 pb-24 md:pb-32"
      style={{ minHeight: "100vh" }}
      id="community"
    >
      {/* Green Glow — Massive Semicircle */}
      <div className="absolute pointer-events-none z-0 top-0 left-0 right-0 flex justify-center overflow-hidden h-full">
        <div
          className="absolute"
          style={{
            top: "0",
            width: "140%",
            aspectRatio: "2 / 1",
            background:
              "radial-gradient(ellipse at bottom, rgba(65, 90, 20, 0.4) 0%, rgba(20, 30, 5, 0.7) 50%, transparent 70%)",
            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
            borderBottom: "1px solid rgba(100, 140, 30, 0.05)",
          }}
        />
      </div>

      {/* Decorative Sparkles */}
      <motion.div
        className="absolute text-white hidden md:block z-10"
        style={{ top: "15%", left: "18%", x: useTransform(mouseX, (v) => v * 0.05), y: useTransform(mouseY, (v) => v * 0.05) }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" /></svg>
      </motion.div>

      <motion.div
        className="absolute text-white hidden md:block z-10"
        style={{ top: "45%", right: "18%", x: useTransform(mouseX, (v) => v * -0.05), y: useTransform(mouseY, (v) => v * -0.05) }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" /></svg>
      </motion.div>

      {/* Interactive Card Stack */}
      <div 
        className="relative z-20 cursor-pointer group focus-visible:outline-none"
        onClick={nextTestimonial}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") nextTestimonial(); }}
        tabIndex={0}
        role="button"
        aria-label="Next testimonial"
        style={{ width: "280px", height: "420px", marginBottom: "60px", perspective: "1000px" }}
      >
        <motion.div
          style={{ 
            width: "100%", 
            height: "100%", 
            position: "relative",
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          <AnimatePresence mode="popLayout">
            {[2, 1, 0].map((offset) => {
              const itemIndex = (index + offset) % testimonials.length;
              const testimonial = testimonials[itemIndex];
              const isFront = offset === 0;
              
              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute inset-0 overflow-hidden bg-zinc-900 shadow-2xl"
                  initial={{ 
                    scale: 0.8, 
                    opacity: 0, 
                    y: offset * 20,
                    rotate: offset === 1 ? -8 : offset === 2 ? 8 : 0,
                    x: offset === 1 ? -20 : offset === 2 ? 20 : 0
                  }}
                  animate={{ 
                    scale: 1 - offset * 0.05,
                    opacity: 1 - offset * 0.3,
                    y: offset * 12,
                    x: isFront ? 0 : offset === 1 ? -30 : 30,
                    rotate: isFront ? 0 : offset === 1 ? -12 : 12,
                    zIndex: 30 - offset * 10,
                  }}
                  exit={{ 
                    scale: 1.1, 
                    opacity: 0, 
                    y: -50,
                    rotate: 5,
                    transition: { duration: 0.4 } 
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 25 
                  }}
                  style={{
                    borderRadius: "32px",
                    border: isFront ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.05)",
                    backfaceVisibility: "hidden"
                  }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    sizes="280px"
                    priority={isFront}
                    className={`object-cover transition-all duration-700 ${isFront ? "grayscale-0" : "grayscale opacity-40 blur-[1px]"}`}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Click Indicator */}
        <motion.div 
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/40 text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Click to cycle
        </motion.div>
      </div>

      {/* Quote Content */}
      <div className="relative z-20 max-w-3xl w-full text-center px-6 min-h-[160px] flex flex-col items-center justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <p
              className="text-white/95 mb-8 font-body font-medium leading-[1.35] tracking-[-0.03em] text-[clamp(20px,2.5vw,28px)]"
            >
              "{testimonials[index].quote}"
            </p>
            
            <div className="flex flex-col items-center gap-1">
              <span className="text-brand-lime font-heading text-xl font-bold tracking-tight">
                {testimonials[index].author}
              </span>
              <span className="text-white/40 text-sm font-medium uppercase tracking-[0.2em]">
                {testimonials[index].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3 mt-16 z-20">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-brand-lime" : "w-1.5 bg-white/20"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

