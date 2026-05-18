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
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0d0d0d] text-white py-24 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      
      {/* Radial Green Glow */}
      <div className="absolute top-1/2 left-0 w-1/2 h-full -translate-y-1/2 pointer-events-none opacity-40 mix-blend-screen">
        <div className="w-full h-full bg-radial-glow" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-8 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
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
            className="font-body text-[clamp(20px,2vw,28px)] leading-snug mb-12 text-white/90 max-w-xl"
          >
            Whether you're looking for a private cabin, a dedicated desk, or just a place to host your next event — let's talk.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8 mt-auto"
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
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1"
        >
          <div className="bg-[#111111]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm uppercase tracking-widest text-white/60">Your Name</label>
                <input 
                  name="name"
                  type="text" 
                  placeholder="Jane Doe"
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm uppercase tracking-widest text-white/60">Email Address</label>
                <input 
                  name="email"
                  type="email" 
                  placeholder="jane@example.com"
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm uppercase tracking-widest text-white/60">Phone Number</label>
                <input 
                  name="phone"
                  type="tel" 
                  placeholder="+91"
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20"
                  disabled={isSubmitting}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm uppercase tracking-widest text-white/60">Message</label>
                <textarea 
                  name="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="bg-transparent border-b border-white/20 py-3 font-body text-lg text-white outline-none focus:border-brand-lime transition-colors placeholder:text-white/20 resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {errorMsg && (
                <div className="text-red-400 font-body text-sm">{errorMsg}</div>
              )}

              {/* Submit Button */}
              <div className="mt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full border-[1.5px] border-brand-lime bg-transparent text-brand-lime px-8 py-4 font-serif text-2xl hover:bg-brand-lime hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
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
