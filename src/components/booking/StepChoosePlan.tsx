"use client";

interface StepChoosePlanProps {
  booking: {
    location: string;
    plan: string;
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
}

export default function StepChoosePlan({ booking, setBooking, onNext }: StepChoosePlanProps) {
  const plans = [
    {
      id: "Day Pass",
      title: "Day Pass",
      price: "₹399 / day",
      desc: "Drop in, get work done",
    },
    {
      id: "Weekly Pass",
      title: "Weekly Pass",
      price: "₹1,899 / week",
      desc: "Best value short-term",
    },
    {
      id: "Dedicated Desk",
      title: "Dedicated Desk",
      price: "₹7,499 / mo",
      desc: "Your permanent home base",
    },
    {
      id: "4 Seater Cabin",
      title: "4 Seater Cabin",
      price: "₹30,000 / mo",
      desc: "Private for small teams",
    },
    {
      id: "8 Seater Cabin",
      title: "8 Seater Cabin",
      price: "₹80,000 / mo",
      desc: "Growing teams",
    },
    {
      id: "Meeting Room",
      title: "Meeting Room",
      price: "₹1,500 / hr",
      desc: "Discussion room, hourly",
    },
  ];

  const locations = ["IT Park", "Ramdaspeth"];

  const handleSelectPlan = (planId: string) => {
    setBooking((prev) => ({ ...prev, plan: planId }));
  };

  const handleSelectLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBooking((prev) => ({ ...prev, location: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-6 font-body">
      {/* Location Dropdown */}
      <div className="flex">
        <div className="glass-select relative min-w-[180px]">
          <select
            value={booking.location}
            onChange={handleSelectLocation}
            className="bg-transparent text-white w-full pl-6 pr-12 py-2.5 text-[13px] font-semibold outline-none cursor-pointer appearance-none"
          >
            <option value="" disabled hidden>
              Select Location
            </option>
            {locations.map((loc) => (
              <option key={loc} value={loc} className="bg-[#0d0d0d] text-white">
                {loc}
              </option>
            ))}
          </select>
          {/* Custom Chevron Arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1L5 5L9 1"
                stroke="#9ef01a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Grid of Plans - Squarer aspects to match reference same-to-same */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const isSelected = booking.plan === plan.id;
          return (
            <div
              key={plan.id}
              onClick={() => handleSelectPlan(plan.id)}
              className={`p-6 rounded-[24px] bg-black/60 border cursor-pointer select-none transition-all duration-300 flex flex-col justify-between aspect-square md:aspect-auto md:h-[200px] ${
                isSelected
                  ? "border-[#9ef01a] bg-white/[0.02] shadow-[0_0_20px_rgba(158,240,26,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] scale-[1.01]"
                  : "border-[#9ef01a]/70 hover:border-[#9ef01a] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              }`}
            >
              <div>
                <h3 className="brand-serif-regular text-[28px] sm:text-[32px] text-[#9ef01a] leading-none tracking-[-0.04em] mb-2 font-normal">
                  {plan.title}
                </h3>
                <span className="text-[12px] font-bold text-white tracking-wide block mb-3">
                  {plan.price}
                </span>
              </div>
              <p className="text-[11px] text-white/50 leading-snug">{plan.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Next Step Controls */}
      <div className="flex mt-2">
        <button
          onClick={onNext}
          className="glass-btn px-12 py-3 text-white brand-serif text-[22px] sm:text-[26px] leading-none transition-all duration-300 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
