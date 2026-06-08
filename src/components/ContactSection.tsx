"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import SuccessModal from "./SuccessModal";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const data = {
      formType: "contact",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) throw new Error("Failed to submit");
      setShowSuccess(true);
      formElement.reset();
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0d0d0d] text-white py-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      
      {/* Radial Green Glow */}
      <div className="absolute top-1/2 left-0 w-1/2 h-full -translate-y-1/2 pointer-events-none opacity-40 mix-blend-screen">
        <div className="w-full h-full bg-radial-glow" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-8 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column: Copy & Details */}
        <div className="flex-[1.2] flex flex-col justify-center">
          <AnimatedText 
            text="Get in touch."
            className="font-serif text-brand-lime text-[clamp(56px,7vw,96px)] leading-none mb-6 tracking-[-0.02em]"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-[clamp(20px,2vw,28px)] leading-snug mb-6 text-white/90 max-w-xl"
          >
            Whether you&apos;re looking for a private cabin, a dedicated desk, or just a place to host your next event — let&apos;s talk.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-5 mt-auto"
          >
            <div className="flex flex-col gap-2">
              <span className="font-body text-sm uppercase tracking-widest text-brand-lime">Email Us</span>
              <a href="mailto:contact@loftcoworks.com" className="font-body text-xl hover:text-white/80 transition-colors">
                contact@loftcoworks.com
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-body text-sm uppercase tracking-widest text-brand-lime">Call Us</span>
              <a href="tel:+919168285182" className="font-body text-xl hover:text-white/80 transition-colors">
                +91 91682 85182
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-body text-sm uppercase tracking-widest text-brand-lime">Visit Us</span>
              <p className="font-body text-xl max-w-sm text-white/80">
                IT Park &amp; Abhyankar Nagar,<br />
                Nagpur, Maharashtra
              </p>
            </div>

            {/* Map Location Cards with Squircle Shape */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {/* Location 1: IT Park */}
              <div className="group relative bg-[#161616]/40 backdrop-blur-sm border border-white/5 rounded-[24px] p-3 flex flex-col gap-3 hover:border-brand-lime/20 transition-all duration-500 shadow-lg">
                <div className="flex items-center justify-between px-2">
                  <span className="font-body text-sm font-semibold uppercase tracking-wider text-white/80 group-hover:text-brand-lime transition-colors">IT Park Office</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-lime shadow-[0_0_10px_rgba(159,240,26,0.5)] animate-pulse" />
                </div>
                <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden border border-white/5 relative">
                  <iframe
                    title="LOFT IT Park Map"
                    src="https://maps.google.com/maps?q=IT%20Park,%20Nagpur,%20Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 dark-map"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Location 2: Abhyankar Nagar */}
              <div className="group relative bg-[#161616]/40 backdrop-blur-sm border border-white/5 rounded-[24px] p-3 flex flex-col gap-3 hover:border-brand-lime/20 transition-all duration-500 shadow-lg">
                <div className="flex items-center justify-between px-2">
                  <span className="font-body text-sm font-semibold uppercase tracking-wider text-white/80 group-hover:text-brand-lime transition-colors">Abhyankar Nagar</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-lime shadow-[0_0_10px_rgba(159,240,26,0.5)] animate-pulse" />
                </div>
                <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden border border-white/5 relative">
                  <iframe
                    title="LOFT Abhyankar Nagar Map"
                    src="https://maps.google.com/maps?q=Abhyankar%20Nagar,%20Nagpur,%20Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 dark-map"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1 flex flex-col"
        >
          <div className="bg-[#111111]/80 backdrop-blur-sm border border-white/10 rounded-[24px] p-6 md:p-8 flex-1 flex flex-col h-full justify-between">
            <form className="flex flex-col gap-6 flex-1 h-full" onSubmit={handleSubmit}>
              
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="font-body text-sm uppercase tracking-widest text-white/60">Your Name</label>
                <input 
                  id="contact-name"
                  name="name"
                  type="text" 
                  placeholder="Your full name"
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="font-body text-sm uppercase tracking-widest text-white/60">Email Address</label>
                <input 
                  id="contact-email"
                  name="email"
                  type="email" 
                  placeholder="you@company.com"
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-phone" className="font-body text-sm uppercase tracking-widest text-white/60">Phone Number</label>
                <input 
                  id="contact-phone"
                  name="phone"
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX"
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20"
                  disabled={isSubmitting}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 flex-1 min-h-[100px]">
                <label htmlFor="contact-message" className="font-body text-sm uppercase tracking-widest text-white/60">Message</label>
                <textarea 
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20 resize-none flex-1 min-h-[60px]"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {errorMsg && (
                <div className="text-red-400 font-body text-sm">{errorMsg}</div>
              )}

              {/* Actions */}
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-full border-[1.5px] border-brand-lime bg-transparent text-brand-lime px-8 py-4 font-serif text-2xl hover:bg-brand-lime hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <a 
                  href="https://wa.me/919168285182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border-[1.5px] border-[#25D366] bg-transparent text-[#25D366] hover:bg-[#25D366] hover:text-black px-8 py-4 font-serif text-2xl text-center flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        </motion.div>
        
      </div>
      
      {/* Decorative Sparkle */}
      <div className="absolute top-[20%] right-[10%] text-white text-[24px] pointer-events-none hidden lg:block">
        ✦
      </div>

      {/* Success Popup Modal */}
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
        message="Thank you for reaching out. Our team is reviewing your general inquiry and will get back to you at your email address shortly."
      />
    </section>
  );
}
