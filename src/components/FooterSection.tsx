"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-[#0d0d0d] text-white pt-24 overflow-hidden border-t border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1600px] w-full mx-auto px-8 relative z-10 flex flex-col">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Brand & Address */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center relative w-12 h-12">
              <Image 
                src="/favicon.png" 
                alt="LOFT Logo" 
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="font-body text-white/60 text-lg leading-relaxed max-w-xs">
              Built for those moving fast. With the infrastructure to match.
            </p>
            <div className="mt-4">
              <p className="font-body text-white/80">IT Park &amp; Abhyankar Nagar</p>
              <p className="font-body text-white/80">Nagpur, Maharashtra</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-sm uppercase tracking-widest text-brand-lime mb-2">Explore</span>
            {["Locations", "Memberships", "Community", "About Us"].map((link) => (
              <Link key={link} href="#" className="font-body text-lg text-white/80 hover:text-white transition-colors w-fit group">
                {link}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-brand-lime"></span>
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-sm uppercase tracking-widest text-brand-lime mb-2">Connect</span>
            {["Instagram", "LinkedIn", "Twitter"].map((link) => (
              <Link key={link} href="#" className="font-body text-lg text-white/80 hover:text-white transition-colors w-fit group">
                {link}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1px] bg-brand-lime"></span>
              </Link>
            ))}
          </div>

          {/* CTA / Contact */}
          <div className="flex flex-col gap-6 items-start lg:items-end text-left lg:text-right">
            <span className="font-body text-sm uppercase tracking-widest text-brand-lime mb-2">Ready to move in?</span>
            <p className="font-body text-xl text-white/90">
              Your desk is waiting.
            </p>
            <button className="rounded-full bg-brand-lime text-black px-8 py-4 font-serif text-xl hover:bg-white transition-colors mt-2">
              Book a Tour
            </button>
          </div>

        </div>

        {/* Massive Typography */}
        <div className="w-full relative flex items-center justify-center pt-8 border-t border-white/10">
          <h1 className="font-heading text-[clamp(100px,25vw,400px)] leading-[0.75] font-black tracking-tighter text-[#1a1a1a] hover:text-brand-lime transition-colors duration-700 cursor-default select-none pb-4">
            LOFT
          </h1>
          {/* Decorative floating sparkle */}
          <div className="absolute top-1/4 right-[15%] text-brand-lime text-[clamp(24px,5vw,64px)] pointer-events-none animate-pulse">
            ✦
          </div>
        </div>

      </div>
    </footer>
  );
}
