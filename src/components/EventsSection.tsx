"use client";

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
      
      <div className="max-w-7xl w-full mx-auto px-8 py-24 flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
        
        {/* Left Column: Events List */}
        <div className="flex-1 flex flex-col justify-center">
          
          {/* Event 1 */}
          <div className="border-b border-black/20 pb-8 mb-8">
            <h3 className="font-serif text-[clamp(32px,4vw,48px)] leading-none mb-3">
              Founder Roundtable
            </h3>
            <p className="font-body text-lg text-black/80">
              Monthly • Invite-only
            </p>
          </div>
          
          {/* Event 2 */}
          <div className="border-b border-black/20 pb-8 mb-8">
            <h3 className="font-serif text-[clamp(32px,4vw,48px)] leading-none mb-3">
              Pitch Practice Sessions
            </h3>
            <p className="font-body text-lg text-black/80">
              Bi-weekly
            </p>
          </div>
          
          {/* Event 3 */}
          <div className="pb-8">
            <h3 className="font-serif text-[clamp(32px,4vw,48px)] leading-none mb-3">
              Expert Workshops
            </h3>
            <p className="font-body text-lg text-black/80">
              Monthly • Various topics
            </p>
          </div>

        </div>

        {/* Right Column: Title and Description */}
        <div className="flex-1 flex flex-col justify-center text-right items-end">
          <h2 className="font-heading text-[clamp(40px,5vw,64px)] tracking-tight leading-none mb-2 font-medium">
            Loft After-Hours
          </h2>
          <h2 className="font-serif text-brand-lime text-[clamp(48px,6vw,80px)] leading-none mb-8 tracking-[-0.02em]">
            Something always happening
          </h2>
          
          <p className="font-body text-xl md:text-2xl leading-relaxed max-w-[600px] text-right mb-10">
            We host regular sessions for the people inside LOFT — not webinars, not generic panels. Real conversations between people actually building things.
          </p>
          
          <button 
            className="flex items-center gap-4 bg-[#1a1a1a] text-white rounded-full px-8 py-4 font-body text-lg hover:bg-black transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            get invited
          </button>
        </div>
        
      </div>
    </section>
  );
}
