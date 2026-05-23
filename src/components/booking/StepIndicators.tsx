"use client";

interface StepIndicatorsProps {
  currentStep: number;
}

export default function StepIndicators({ currentStep }: StepIndicatorsProps) {
  const steps = [
    { number: 1, label: "Choose Plan" },
    { number: 2, label: "Date & Time" },
    { number: 3, label: "Add Ons" },
    { number: 4, label: "Send Enquiry" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 justify-center sm:justify-start">
      {steps.map((step) => {
        const isActive = currentStep === step.number;
        return (
          <div
            key={step.number}
            className={`relative px-5 py-2.5 transition-all duration-300 brand-serif text-[22px] sm:text-[26px] leading-none select-none ${
              isActive
                ? "glass-btn-active text-[#9ef01a]"
                : "glass-btn text-white/80"
            }`}
          >
            {step.label}
          </div>
        );
      })}
    </div>
  );
}
