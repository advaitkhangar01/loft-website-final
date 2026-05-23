"use client";

interface SidebarSummaryProps {
  booking: {
    step: number;
    location: string;
    plan: string;
    date: string;
    time: string;
    addons: string[];
  };
  onPayNowClick?: () => void;
  isSubmitting?: boolean;
}

export default function SidebarSummary({ booking, onPayNowClick, isSubmitting = false }: SidebarSummaryProps) {
  const addOnsText = booking.addons.length > 0 ? booking.addons.join(", ") : "None Selected";

  return (
    <div className="w-full lg:sticky lg:top-8 flex flex-col gap-4 select-none">
      {/* Lime Green Sidebar Panel - Mockup Same-to-Same */}
      <div className="bg-gradient-to-br from-[#a2e635] via-[#a2e635] to-[#d8fa72] rounded-[36px] p-7 sm:p-8 pb-5 text-black shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between relative overflow-hidden select-none">
        <div>
          {/* Lowercase "your booking" header */}
          <span className="font-body text-[16px] md:text-[17px] font-medium tracking-tight text-black block mb-6 lowercase">
            your booking
          </span>

          <div className="flex flex-col gap-3 font-body">
            {/* Plan Row */}
            <div className="flex justify-between items-center border-b-[1.5px] border-black pb-4 pt-1">
              <span className="brand-serif-regular text-[38px] sm:text-[44px] leading-none tracking-[-0.05em] text-black">
                Plan
              </span>
              <span className="text-[15px] sm:text-[16px] font-bold text-black text-right max-w-[60%] truncate tracking-tight">
                {booking.plan || "Select Plan"}
              </span>
            </div>

            {/* Date Row */}
            <div className="flex justify-between items-center border-b-[1.5px] border-black pb-4 pt-1">
              <span className="brand-serif-regular text-[38px] sm:text-[44px] leading-none tracking-[-0.05em] text-black">
                Date
              </span>
              <span className="text-[15px] sm:text-[16px] font-bold text-black text-right tracking-tight">
                {booking.date || "Select Date"}
              </span>
            </div>

            {/* Time Row */}
            <div className="flex justify-between items-center border-b-[1.5px] border-black pb-4 pt-1">
              <span className="brand-serif-regular text-[38px] sm:text-[44px] leading-none tracking-[-0.05em] text-black">
                Time
              </span>
              <span className="text-[15px] sm:text-[16px] font-bold text-black text-right tracking-tight">
                {booking.time || "Select Time"}
              </span>
            </div>

            {/* Add Ons Row */}
            <div className="flex justify-between items-center border-b-[1.5px] border-black pb-4 pt-1">
              <span className="brand-serif-regular text-[38px] sm:text-[44px] leading-none tracking-[-0.05em] text-black">
                Add Ons
              </span>
              <span className="text-[15px] sm:text-[16px] font-bold text-black text-right max-w-[60%] truncate tracking-tight">
                {addOnsText}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button - Send Enquiry styled exact same-to-same with side paddings to avoid touching edges */}
        {booking.step !== 4 && (
          <div className="mt-8 px-2 pb-2">
            <button
              type="button"
              onClick={onPayNowClick}
              disabled={isSubmitting}
              className="w-full rounded-[24px] bg-[#0d1403] hover:bg-[#152005] active:scale-[0.98] text-[#e6e2cd] brand-serif text-[32px] sm:text-[36px] leading-none py-4.5 transition-all duration-300 cursor-pointer shadow-md disabled:opacity-50 select-none tracking-[-0.03em]"
            >
              {isSubmitting ? "Processing..." : "Send Enquiry"}
            </button>
          </div>
        )}
      </div>

      {/* WhatsApp Help Redirection */}
      {booking.step !== 4 && (
        <a
          href="https://wa.me/918600888073"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-all duration-300 pl-4 py-2 font-body text-xs cursor-pointer select-none"
        >
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse inline-block" />
          <span>Need help with Booking?</span>
          <span className="text-brand-lime hover:underline font-semibold flex items-center">
            Chat on Whatsapp <span className="ml-1">→</span>
          </span>
        </a>
      )}
    </div>
  );
}
