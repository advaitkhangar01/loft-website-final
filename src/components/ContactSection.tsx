"use client";

export default function ContactSection() {
  return (
    <section className="relative w-full bg-[#0d0d0d] text-white py-24 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      
      {/* Radial Green Glow */}
      <div className="absolute top-1/2 left-0 w-1/2 h-full -translate-y-1/2 pointer-events-none opacity-40 mix-blend-screen">
        <div className="w-full h-full bg-radial-glow" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-8 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Copy & Details */}
        <div className="flex-[1.2] flex flex-col justify-center">
          <h2 className="font-serif text-brand-lime text-[clamp(56px,7vw,96px)] leading-none mb-6 tracking-[-0.02em]">
            Get in touch.
          </h2>
          
          <p className="font-body text-[clamp(20px,2vw,28px)] leading-snug mb-12 text-white/90 max-w-xl">
            Whether you're looking for a private cabin, a dedicated desk, or just a place to host your next event — let's talk.
          </p>
          
          <div className="flex flex-col gap-8 mt-auto">
            <div className="flex flex-col gap-2">
              <span className="font-body text-sm uppercase tracking-widest text-brand-lime">Email Us</span>
              <a href="mailto:hello@loft.work" className="font-body text-xl hover:text-white/80 transition-colors">
                hello@loft.work
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-body text-sm uppercase tracking-widest text-brand-lime">Call Us</span>
              <a href="tel:+919876543210" className="font-body text-xl hover:text-white/80 transition-colors">
                +91 98765 43210
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-body text-sm uppercase tracking-widest text-brand-lime">Visit Us</span>
              <p className="font-body text-xl max-w-sm text-white/80">
                IT Park &amp; Abhyankar Nagar,<br />
                Nagpur, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex-1">
          <div className="bg-[#111111]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm uppercase tracking-widest text-white/60">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Jane Doe"
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm uppercase tracking-widest text-white/60">Email Address</label>
                <input 
                  type="email" 
                  placeholder="jane@example.com"
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm uppercase tracking-widest text-white/60">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91"
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm uppercase tracking-widest text-white/60">Message</label>
                <textarea 
                  placeholder="How can we help you?"
                  rows={4}
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button 
                  type="submit"
                  className="w-full rounded-full border-[1.5px] border-brand-lime bg-transparent text-brand-lime px-8 py-4 font-serif text-2xl hover:bg-brand-lime hover:text-black transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
      {/* Decorative Sparkle */}
      <div className="absolute top-[20%] right-[10%] text-white text-[24px] pointer-events-none hidden lg:block">
        ✦
      </div>
    </section>
  );
}
