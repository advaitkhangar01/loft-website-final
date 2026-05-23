"use client";

interface StepAddOnsProps {
  booking: {
    location: string;
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
  onNext: () => void;
  onBack: () => void;
}

export default function StepAddOns({ booking, setBooking, onNext, onBack }: StepAddOnsProps) {
  const addonsList = [
    {
      id: "Business Address",
      title: "Business Address",
      price: "₹499 / mo",
    },
    {
      id: "Guest Day Pass",
      title: "Guest Day Pass",
      price: "₹399 / pass",
    },
    {
      id: "Meeting Room",
      title: "Meeting Room",
      price: "₹999 / hour",
    },
  ];

  const handleToggleAddOn = (addonId: string) => {
    setBooking((prev) => {
      const isSelected = prev.addons.includes(addonId);
      if (isSelected) {
        return {
          ...prev,
          addons: prev.addons.filter((id) => id !== addonId),
        };
      } else {
        return {
          ...prev,
          addons: [...prev.addons, addonId],
        };
      }
    });
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

      {/* Add-ons List - balanced ratios */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {addonsList.map((addon) => {
          const isSelected = booking.addons.includes(addon.id);
          return (
            <div
              key={addon.id}
              onClick={() => handleToggleAddOn(addon.id)}
              className={`p-6 rounded-[24px] bg-black/60 border cursor-pointer select-none transition-all duration-300 flex flex-col justify-between aspect-square md:aspect-auto md:h-[160px] ${
                isSelected
                  ? "border-[#9ef01a] bg-white/[0.02] shadow-[0_0_20px_rgba(158,240,26,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] scale-[1.01]"
                  : "border-[#9ef01a]/70 hover:border-[#9ef01a] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              }`}
            >
              <h3 className="brand-serif-regular text-[26px] sm:text-[30px] text-[#9ef01a] leading-none tracking-[-0.04em] mb-1.5 font-normal">
                {addon.title}
              </h3>
              <span className="text-[12px] font-bold text-white tracking-wide block">
                {addon.price}
              </span>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-2">
        <button
          onClick={onBack}
          className="glass-btn px-10 py-3 text-white brand-serif text-[20px] sm:text-[24px] leading-none transition-all duration-300 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="glass-btn px-10 py-3 text-white brand-serif text-[20px] sm:text-[24px] leading-none transition-all duration-300 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
