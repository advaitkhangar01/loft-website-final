"use client";

import { useState, useRef, useEffect } from "react";

export default function MembershipsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const memberships = [
    {
      title: "Day Passes",
      description: "Come in, get to work, leave when you're done. No commitment, no contracts, just a productive day at LOFT.",
      price: "₹7,500",
      priceUnit: "/ seat",
      details: "Community Space • 50 Seats",
      bgColor: "bg-[#F7F6EE]",
      bgStyle: undefined,
      textColor: "text-black",
      iconColor: "text-[#5aad1a]"
    },
    {
      title: "Private Hot Desks",
      description: "Your own dedicated desk in a focused environment. Show up every day to a seat that's yours, in a room built for people who mean business.",
      price: "₹7,500",
      priceUnit: "/ seat",
      details: "Individual Dedicated Workstation • 35 Seats",
      bgColor: "bg-[#6EC53A]",
      bgStyle: undefined,
      textColor: "text-black",
      iconColor: "text-black"
    },
    {
      title: "Private Cabins",
      description: "A room within a room. Fully private, designed for teams who need focus, confidentiality, and a space that feels like their own.",
      price: "From ₹30,000",
      priceUnit: "/ cabin",
      details: "4 to 10 Seater Cabins",
      bgColor: "bg-[#0A4A25]",
      bgStyle: undefined,
      textColor: "text-[#F7F6EE]",
      iconColor: "text-[#F7F6EE]"
    },
    {
      title: "Business Address",
      description: "Put LOFT on your letterhead. A professional Nagpur address that gives your business the presence it deserves, without the overhead of a full office.",
      bgColor: "bg-[#181A15]",
      bgStyle: { backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" },
      textColor: "text-[#F7F6EE]",
      iconColor: "text-[#F7F6EE]"
    }
  ];

  return (
    <section className="w-full flex flex-col">
      {memberships.map((membership, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <div 
            key={index} 
            className={`w-full py-[28px] px-[40px] transition-colors duration-300 ${membership.bgColor} ${membership.textColor}`}
            style={membership.bgStyle}
          >
            {/* Top Clickable Row */}
            <div 
              onClick={() => toggleExpand(index)}
              className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 cursor-pointer group"
            >
              {/* Title */}
              <div className="flex-1 md:max-w-md lg:max-w-xl">
                <h2 className="font-serif !not-italic font-normal text-[clamp(40px,5vw,72px)] leading-none">
                  {membership.title}
                </h2>
              </div>
              
              {/* Description */}
              <div className="flex-[2] md:max-w-2xl flex flex-col gap-4">
                <p className="font-body text-[clamp(18px,1.5vw,24px)] leading-[1.55] tracking-[-0.015em]">
                  {membership.description}
                </p>
              </div>
              
              {/* Arrow Icon */}
              <div className={`flex-shrink-0 transition-transform duration-300 mt-4 md:mt-0 ${membership.iconColor} ${isExpanded ? 'rotate-180' : 'group-hover:translate-x-2 group-hover:translate-y-2'}`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {isExpanded ? (
                    <path d="M5 15l7-7 7 7"/>
                  ) : (
                    <path d="M5 5l14 14M19 5v14H5"/>
                  )}
                </svg>
              </div>
            </div>

            {/* Expandable Form Area */}
            <div 
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-10' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-current/20 pt-8 flex flex-col lg:flex-row gap-12">
                  <div className="flex-1">
                    {/* Added Pricing Information (moved inside expanded area) */}
                    {membership.price && (
                      <div className="flex flex-col gap-1 mb-8">
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif text-[clamp(40px,5vw,56px)] leading-none tracking-tight">{membership.price}</span>
                          <span className="font-body text-xl opacity-70">{membership.priceUnit}</span>
                        </div>
                        <span className="font-body text-sm opacity-60 uppercase tracking-widest mt-2">
                          {membership.details}
                        </span>
                      </div>
                    )}

                    <h3 className="font-serif text-3xl mb-4">Request a Booking</h3>
                    <p className="font-body text-lg opacity-80 mb-8">
                      Leave your details below and our team will get back to you to confirm your {membership.title.toLowerCase()}.
                    </p>
                  </div>
                  
                  <div className="flex-[2]">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={(e) => e.preventDefault()}>
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="font-body text-sm uppercase tracking-widest opacity-70">Name</label>
                        <input 
                          type="text" 
                          placeholder="Your full name"
                          className="bg-transparent border-b border-current/30 py-3 font-body text-lg outline-none focus:border-current transition-colors placeholder:text-current/30"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label className="font-body text-sm uppercase tracking-widest opacity-70">Email</label>
                        <input 
                          type="email" 
                          placeholder="you@company.com"
                          className="bg-transparent border-b border-current/30 py-3 font-body text-lg outline-none focus:border-current transition-colors placeholder:text-current/30"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="font-body text-sm uppercase tracking-widest opacity-70">Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="+91"
                          className="bg-transparent border-b border-current/30 py-3 font-body text-lg outline-none focus:border-current transition-colors placeholder:text-current/30"
                          required
                        />
                      </div>

                      {/* Date From */}
                      <div className="flex flex-col gap-2">
                        <label className="font-body text-sm uppercase tracking-widest opacity-70">Date From</label>
                        <input 
                          type="date" 
                          className="bg-transparent border-b border-current/30 py-3 font-body text-lg outline-none focus:border-current transition-colors text-current opacity-80"
                          required
                        />
                      </div>

                      {/* Date To */}
                      <div className="flex flex-col gap-2">
                        <label className="font-body text-sm uppercase tracking-widest opacity-70">Date To</label>
                        <input 
                          type="date" 
                          className="bg-transparent border-b border-current/30 py-3 font-body text-lg outline-none focus:border-current transition-colors text-current opacity-80"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="md:col-span-2 mt-4">
                        <button 
                          type="submit"
                          className="w-full md:w-auto px-10 py-4 rounded-full border border-current font-body text-lg font-medium hover:bg-current hover:text-[var(--color-background)] transition-colors"
                        >
                          Submit Booking
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        );
      })}
      
      {/* Bottom Grid Decorator */}
      <div className="w-full h-[200px] bg-[#0d0d0d] bg-grid opacity-50 border-t border-white/5" />
    </section>
  );
}
