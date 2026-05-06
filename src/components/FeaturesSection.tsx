"use client";

import React from "react";

const features = [
  {
    title: "Private Cabins",
    description: "Enclosed, distraction-free spaces built for focused teams.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Flex Desks",
    description: "Hot-desk or reserve your spot, total flexibility built in.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Speed Wifi",
    description: "Redundant enterprise grade internet. Calls, uploads, demos, zero lag.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    title: "24×7 Access",
    description: "Work when your brain works best. No time restrictions, ever.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Community",
    description: "Surrounded by operators, builders, and people who get it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="spaces" className="bg-black text-white py-32 px-6 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="relative mb-24 text-center">
        {/* Sparkles */}
        <div className="absolute -left-16 top-0 text-white text-2xl hidden md:block opacity-60">✦</div>
        <div className="absolute -right-16 top-10 text-white text-xl hidden md:block opacity-60">✦</div>
        
        <h2 className="font-heading font-medium text-[32px] md:text-[42px] leading-tight mb-2">
          Built around
        </h2>
        <h3 className="font-serif text-[clamp(60px,8vw,100px)] leading-[0.9] tracking-tight">
          how you work
        </h3>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 w-full max-w-[1400px] mb-48">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative rounded-[28px] p-[1.5px] bg-gradient-to-b from-white/40 to-[#9ef01a]"
          >
            <div className="bg-black w-full h-full rounded-[calc(28px-1.5px)] p-6 lg:p-7 flex flex-col items-start">
              {/* Icon */}
              <div className="text-white mb-6 [&>svg]:w-[28px] [&>svg]:h-[28px] [&>svg]:opacity-90">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h4 className="font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#faffc2] to-[#9ef01a] text-[28px] lg:text-[32px] leading-none mb-3 pr-2">
                {feature.title}
              </h4>
              
              {/* Description */}
              <p className="font-body text-white/90 text-[14px] lg:text-[15px] leading-[1.3] tracking-tight">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="relative text-center max-w-4xl px-4">
        {/* Large Quotes */}
        <span className="absolute -top-12 -left-8 md:-left-20 text-brand-lime text-[120px] md:text-[180px] font-serif leading-none opacity-20 pointer-events-none">
          “
        </span>
        
        <h3 className="font-serif text-[clamp(40px,6vw,80px)] leading-[1.1] tracking-tight relative z-10">
          They said it <span className="text-brand-lime">better</span> than us.
        </h3>

        <span className="absolute -bottom-24 -right-8 md:-right-20 text-brand-lime text-[120px] md:text-[180px] font-serif leading-none opacity-20 pointer-events-none">
          ”
        </span>
      </div>
    </section>
  );
}
