import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#0d0d0d] flex items-center justify-center overflow-hidden selection:bg-brand-lime selection:text-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-radial-glow opacity-20 mix-blend-screen pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Animated Icon */}
        <div className="w-24 h-24 rounded-full border border-brand-lime/30 bg-brand-lime/10 flex items-center justify-center text-brand-lime mb-10 shadow-[0_0_40px_rgba(216,250,114,0.1)]">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>

        {/* Typography */}
        <h1 className="font-serif text-[clamp(48px,8vw,96px)] leading-none text-white tracking-[-0.02em] mb-6">
          Request <br/>
          <span className="text-brand-lime">Received.</span>
        </h1>
        
        <p className="font-body text-[clamp(18px,2vw,24px)] text-white/80 max-w-xl leading-relaxed mb-12">
          Thank you for reaching out. Our team is reviewing your details and will get back to you shortly.
        </p>

        {/* Action */}
        <Link 
          href="/"
          className="group relative inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-10 py-5 font-body text-lg text-white hover:border-brand-lime hover:text-brand-lime transition-all duration-300"
        >
          <span>Return Home</span>
          <svg className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
      
      {/* Decorative Sparkles */}
      <div className="absolute top-[20%] right-[15%] text-brand-lime text-2xl animate-pulse pointer-events-none">✦</div>
      <div className="absolute bottom-[20%] left-[15%] text-white/30 text-xl pointer-events-none">✦</div>
    </main>
  );
}
