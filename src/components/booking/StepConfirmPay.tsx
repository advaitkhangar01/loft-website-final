"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface StepConfirmPayProps {
  booking: {
    location: string;
    plan: string;
    date: string;
    time: string;
    addons: string[];
  };
  setBooking: React.Dispatch<
    React.SetStateAction<{
      step: 1 | 2 | 3 | 4;
      location: string;
      plan: string;
      date: string;
      time: string;
      addons: string[];
    }>
  >;
  onBack: () => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  isSubmitting: boolean;
}

export default function StepConfirmPay({
  booking,
  onBack,
  setIsSubmitting,
  isSubmitting,
}: StepConfirmPayProps) {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const bookingDetails = {
      name,
      email,
      phone,
      location: booking.location || "IT Park",
      plan: booking.plan || "Not Selected",
      date: booking.date || "Not Selected",
      time: booking.time || "Not Selected",
      addons: booking.addons.join(", ") || "None",
      _subject: `New Co-working Booking Enquiry from ${name}`,
      _honey: "",
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/members@loftcoworks.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!res.ok) throw new Error("Failed to submit");

      router.push("/success");
    } catch {
      setErrorMsg("Something went wrong. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 font-body">
      {/* Location Dropdown (Read-Only Styled) */}
      <div className="flex">
        <div className="glass-select relative min-w-[180px] opacity-70">
          <select
            disabled
            value={booking.location}
            className="bg-transparent text-white/70 w-full pl-6 pr-12 py-2.5 text-[13px] font-semibold outline-none cursor-not-allowed appearance-none"
          >
            <option value={booking.location}>{booking.location || "IT Park"}</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1L5 5L9 1"
                stroke="#ffffff"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Booking Form Card - Styled exactly as the lime summary card */}
      <div className="bg-gradient-to-br from-[#a2e635] via-[#a2e635] to-[#d8fa72] rounded-[36px] p-7 sm:p-8 pb-5 text-black shadow-[0_15px_40px_rgba(0,0,0,0.3)] w-full relative overflow-hidden select-none">
        <span className="font-body text-[16px] md:text-[17px] font-medium tracking-tight text-black block mb-8 lowercase">
          booking summary
        </span>

        <form id="booking-form" onSubmit={handleSubmit} className="flex flex-col gap-8 font-body">
          <div className="flex flex-col gap-5">
            {/* Name Input Row */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="form-name"
                className="brand-serif-regular text-[38px] sm:text-[44px] leading-none tracking-[-0.05em] text-black w-[90px] sm:w-[130px] shrink-0"
              >
                Name
              </label>
              <input
                id="form-name"
                name="name"
                type="text"
                required
                disabled={isSubmitting}
                className="bg-transparent text-black font-body text-[18px] sm:text-[22px] font-semibold border-b-[2px] border-black outline-none flex-grow pb-1 transition-all duration-300 focus:border-black/70 placeholder:text-black/30"
                placeholder="your name"
              />
            </div>

            {/* Phone Input Row */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="form-phone"
                className="brand-serif-regular text-[38px] sm:text-[44px] leading-none tracking-[-0.05em] text-black w-[90px] sm:w-[130px] shrink-0"
              >
                Phone
              </label>
              <input
                id="form-phone"
                name="phone"
                type="tel"
                required
                disabled={isSubmitting}
                className="bg-transparent text-black font-body text-[18px] sm:text-[22px] font-semibold border-b-[2px] border-black outline-none flex-grow pb-1 transition-all duration-300 focus:border-black/70 placeholder:text-black/30"
                placeholder="your phone"
              />
            </div>

            {/* Email Input Row */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="form-email"
                className="brand-serif-regular text-[38px] sm:text-[44px] leading-none tracking-[-0.05em] text-black w-[90px] sm:w-[130px] shrink-0"
              >
                Email
              </label>
              <input
                id="form-email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                className="bg-transparent text-black font-body text-[18px] sm:text-[22px] font-semibold border-b-[2px] border-black outline-none flex-grow pb-1 transition-all duration-300 focus:border-black/70 placeholder:text-black/30"
                placeholder="your email"
              />
            </div>
          </div>

          {errorMsg && (
            <div className="text-red-700 text-sm text-center font-semibold -mt-2">
              {errorMsg}
            </div>
          )}

          {/* Confirm & Pay Submit Button embedded inside the lime-green card */}
          <div className="mt-4 px-2 pb-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-[24px] bg-[#0d1403] hover:bg-[#152005] active:scale-[0.98] text-[#e6e2cd] brand-serif text-[32px] sm:text-[36px] leading-none py-4.5 transition-all duration-300 cursor-pointer shadow-md disabled:opacity-50 select-none tracking-[-0.03em]"
            >
              {isSubmitting ? "Processing..." : "Send Enquiry"}
            </button>
          </div>
        </form>
      </div>

      {/* WhatsApp Help Redirection placed under the left card */}
      <a
        href="https://wa.me/918600888073"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 text-white/50 hover:text-white transition-all duration-300 pl-4 py-2 font-body text-[13px] sm:text-[14px] cursor-pointer select-none"
      >
        <div className="w-5 h-5 rounded-full border border-brand-lime flex items-center justify-center text-brand-lime font-bold text-[10px] shrink-0">
          i
        </div>
        <span>Need help with Booking?</span>
        <span className="text-brand-lime hover:underline font-semibold flex items-center">
          Chat on Whatsapp <span className="ml-1 text-[11px]">→</span>
        </span>
      </a>

      {/* Back Navigation Button */}
      <div className="flex gap-4 mt-1 pl-4">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="glass-btn px-10 py-3 text-white brand-serif text-[20px] sm:text-[24px] leading-none transition-all duration-300 cursor-pointer disabled:opacity-50"
        >
          Back
        </button>
      </div>
    </div>
  );
}
