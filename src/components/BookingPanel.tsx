"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuccessModal from "./SuccessModal";

interface BookingPanelProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobileDrawer?: boolean;
}

export default function BookingPanel({ isOpen = true, onClose, isMobileDrawer = false }: BookingPanelProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successRequirement, setSuccessRequirement] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const requirementVal = formData.get("requirement") as string;
    const data = {
      formType: "booking",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      requirement: requirementVal,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) throw new Error("Failed to submit");
      setSuccessRequirement(requirementVal);
      setShowSuccess(true);
      formElement.reset();
      if (onClose) {
        // Close the mobile drawer after successful submission
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch {
      setErrorMsg("Error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFieldsContent = (
    <>
      <h2 className="text-black font-heading font-medium text-[28px] leading-[1.05] tracking-[-0.04em] mb-6 pr-6">
        Ready to claim<br />your room?
      </h2>

      <form className="flex flex-col gap-3.5 font-body" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="booking-name" className="text-black text-[10px] tracking-tight">Full name</label>
            <input 
              id="booking-name"
              name="name"
              type="text" 
              className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="booking-phone" className="text-black text-[10px] tracking-tight">Phone Number</label>
            <input 
              id="booking-phone"
              name="phone"
              type="tel" 
              className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="booking-email" className="text-black text-[10px] tracking-tight">Email Address</label>
            <input 
              id="booking-email"
              name="email"
              type="email" 
              className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="booking-requirement" className="text-black text-[10px] tracking-tight">Requirement</label>
            <div className="relative">
              <select 
                id="booking-requirement"
                name="requirement"
                className="w-full bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none appearance-none"
                required
                disabled={isSubmitting}
                defaultValue=""
              >
                <option value="" disabled hidden></option>
                <option value="Day Pass">Day Pass</option>
                <option value="Private Hot Desk">Private Hot Desk</option>
                <option value="Private Cabin">Private Cabin</option>
                <option value="Business Address">Business Address</option>
                <option value="Tour">Book a Tour</option>
              </select>
              {/* Custom Green Chevron */}
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#81e047" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="booking-message" className="text-black text-[10px] tracking-tight">Message</label>
          <textarea 
            id="booking-message"
            name="message"
            rows={2}
            className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none resize-none h-[46px]"
            disabled={isSubmitting}
          />
        </div>

        {errorMsg && (
          <div className="text-red-700 text-[10px] text-center">{errorMsg}</div>
        )}

        <div className="flex justify-center mt-1">
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-[140px] border-[1.5px] border-black bg-transparent text-black rounded-full py-1.5 text-[11px] hover:bg-black hover:text-[#d8fa72] transition-colors font-body disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Success Popup Modal */}
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
        title="Reservation Received!"
        message={`Thank you for your interest in ${successRequirement || "LOFT Co-working"}. Our team is reviewing your details and will get back to you shortly.`}
      />
    </>
  );

  if (isMobileDrawer) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[190] pointer-events-auto"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 h-full w-[310px] pb-7 pt-16 px-7 flex flex-col z-[200] bg-gradient-to-r from-[#81e047] to-[#d8fa72] rounded-l-[28px] shadow-2xl overflow-y-auto pointer-events-auto"
            >
              {/* Close Button */}
              {onClose && (
                <button 
                  onClick={onClose}
                  aria-label="Close booking panel"
                  className="absolute top-5 right-5 text-black hover:opacity-70 transition-opacity cursor-pointer z-10 p-1"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
              {formFieldsContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Persistent Desktop Version
  return (
    <aside className="absolute top-0 right-0 w-[300px] pb-7 pt-6 px-7 flex-col z-50 pointer-events-auto bg-gradient-to-r from-[#81e047] to-[#d8fa72] rounded-bl-[28px] shadow-2xl hidden lg:flex">
      {/* Decorative sparkle top right */}
      <div className="absolute top-6 right-6 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="black"/>
        </svg>
      </div>
      {formFieldsContent}
    </aside>
  );
}

