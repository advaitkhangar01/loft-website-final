"use client";

import Header from "./Header";
import BookingPanel from "./BookingPanel";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-grid bg-background">
      {/* Radial Green Glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial-glow" />

      {/* Header */}
      <Header />

      {/* Main Content Area (centered on full page) */}
      <div className="absolute inset-0 h-screen flex flex-col justify-center items-center z-10 pt-16">
        
        {/* Text Section */}
        <div className="text-center relative flex flex-col items-center">
          <h1 className="text-foreground font-heading font-medium tracking-tight text-[clamp(36px,5vw,52px)] leading-tight">
            A room for people who
          </h1>
          
          <div className="relative flex items-center justify-center mt-2">
            {/* Sparkles next to "build" */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-12 flex items-center gap-1">
              <span className="text-white text-[28px] leading-none">✦</span>
              <span className="text-white text-[16px] leading-none mt-1">✦</span>
            </div>
            
            <span className="text-brand-lime font-serif text-[clamp(80px,8vw,115px)] leading-[0.97] tracking-[-0.067em] z-10 relative px-6">
              build
              {/* Oval Ring */}
              <svg 
                className="absolute top-1/2 left-1/2 w-[320px] h-[110px] pointer-events-none" 
                style={{ transform: "translate(-50%, -50%) rotate(-6deg)" }}
                viewBox="0 0 320 110" 
                preserveAspectRatio="none"
              >
                <ellipse 
                  cx="160" 
                  cy="55" 
                  rx="155" 
                  ry="50" 
                  stroke="#aaff2e" 
                  strokeWidth="1.5" 
                  fill="none" 
                />
              </svg>
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6 mt-12 z-10">
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
        </div>
      </div>

      {/* Decorative Sparkles (in main background) */}
      <div className="absolute top-[30px] right-[350px] text-white text-[24px] pointer-events-none z-0">
        ✦
      </div>
      <div className="absolute top-[55%] right-[350px] text-white text-[28px] pointer-events-none z-0">
        ✦
      </div>

      {/* Dark arc / dome shape at bottom center */}
      <div 
        className="absolute bottom-[-30%] left-[50%] -translate-x-1/2 w-[80%] h-[300px] bg-black rounded-[100%] z-0"
      />

      {/* Right-side Booking Panel */}
      <BookingPanel />
    </section>
  );
}
