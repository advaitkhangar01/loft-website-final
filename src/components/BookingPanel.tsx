"use client";

import { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function BookingPanel() {
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
    } catch (err) {
      setErrorMsg("Error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside className="absolute top-0 right-0 w-[300px] pb-7 pt-6 px-7 flex flex-col z-50 pointer-events-auto bg-gradient-to-r from-[#81e047] to-[#d8fa72] rounded-bl-[28px] shadow-2xl">
      {/* Decorative sparkle top right */}
      <div className="absolute top-6 right-6 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" fill="black"/>
        </svg>
      </div>

      <h2 className="text-black font-heading font-medium text-[28px] leading-[1.05] tracking-[-0.04em] mb-6 pr-4">
        Ready to claim<br />your room?
      </h2>

      <form className="flex flex-col gap-3.5 font-body" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-black text-[10px] tracking-tight">Full name</label>
            <input 
              name="name"
              type="text" 
              className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-black text-[10px] tracking-tight">Phone Number</label>
            <input 
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
            <label className="text-black text-[10px] tracking-tight">Email Address</label>
            <input 
              name="email"
              type="email" 
              className="bg-black text-white border-none rounded-[6px] px-2.5 py-2 text-[10px] outline-none"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-black text-[10px] tracking-tight">Requirement</label>
            <div className="relative">
              <select 
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
          <label className="text-black text-[10px] tracking-tight">Message</label>
          <textarea 
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
            className="w-[140px] border-[1.5px] border-black bg-transparent text-black rounded-full py-1.5 text-[11px] hover:bg-black hover:text-[#d8fa72] transition-colors font-body disabled:opacity-50"
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
    </aside>
  );
}
