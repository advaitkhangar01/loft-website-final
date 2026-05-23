"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import StepIndicators from "@/components/booking/StepIndicators";
import SidebarSummary from "@/components/booking/SidebarSummary";
import StepChoosePlan from "@/components/booking/StepChoosePlan";
import StepDateTime from "@/components/booking/StepDateTime";
import StepAddOns from "@/components/booking/StepAddOns";
import StepConfirmPay from "@/components/booking/StepConfirmPay";

export default function BookingPage() {
  const [booking, setBooking] = useState({
    step: 1 as 1 | 2 | 3 | 4,
    location: "IT Park", // Pre-populated from screenshots
    plan: "Meeting Room", // Pre-populated from screenshots
    date: "March 16, 2026", // Pre-populated from screenshots
    time: "8:00 AM", // Pre-populated from screenshots
    addons: ["Guest Day Pass"], // Pre-populated from screenshots
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => {
    if (booking.step < 4) {
      setBooking((prev) => ({ ...prev, step: (prev.step + 1) as any }));
    }
  };

  const prevStep = () => {
    if (booking.step > 1) {
      setBooking((prev) => ({ ...prev, step: (prev.step - 1) as any }));
    }
  };

  const menuItems = [
    { name: "Location", href: "/#location" },
    { name: "Spaces", href: "/#spaces" },
    { name: "Community", href: "/#community" },
    { name: "Contact Us", href: "/#contact" },
    { name: "Account", href: "/#account" }, // Aligned exactly with mockup reference
  ];

  return (
    <main className="min-h-screen bg-[#0d0d0d] bg-grid text-white relative flex flex-col justify-between selection:bg-brand-lime selection:text-black pb-16 select-none">
      {/* Radial Green Ambient Glow in Background */}
      <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-60 z-0 animate-pulse duration-[8000ms]" />

      {/* Mockup-Perfect Dedicated Header Navigation */}
      <nav className="w-full z-[100] flex items-center justify-between px-6 py-6 md:px-12 md:py-8 max-w-7xl mx-auto relative select-none">
        {/* Logo Container (Left) */}
        <div className="flex-1">
          <Link href="/" className="inline-flex items-center relative w-[110px] h-[35px] md:w-[130px] md:h-[45px] hover:opacity-90 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="LOFT Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>
        
        {/* Nav Links (Right) */}
        <div className="flex gap-8 md:gap-10 pointer-events-auto justify-end items-center">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-white text-[14px] md:text-[15px] font-body hover:text-brand-lime transition-all duration-300 tracking-tight font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex-grow z-10 relative pt-2 md:pt-4">
        {/* Step Progress Indicators */}
        <div>
          <StepIndicators currentStep={booking.step} />
        </div>

        {/* 2-Column Content Layout (tight vertical margin) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start mt-6 md:mt-8">
          {/* Left Column: Interactive Wizard Steps */}
          <div className="lg:col-span-2">
            {booking.step === 1 && (
              <StepChoosePlan
                booking={booking}
                setBooking={setBooking}
                onNext={nextStep}
              />
            )}
            {booking.step === 2 && (
              <StepDateTime
                booking={booking}
                setBooking={setBooking}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {booking.step === 3 && (
              <StepAddOns
                booking={booking}
                setBooking={setBooking}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            {booking.step === 4 && (
              <StepConfirmPay
                booking={booking}
                setBooking={setBooking}
                onBack={prevStep}
                setIsSubmitting={setIsSubmitting}
                isSubmitting={isSubmitting}
              />
            )}
          </div>

          {/* Right Column: Persistent Lime Booking Summary Card */}
          <div className="lg:col-span-1">
            <SidebarSummary
              booking={booking}
              onPayNowClick={nextStep}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>

      {/* Decorative sparkles in the background */}
      <motion.div
        className="absolute top-[250px] right-[42%] text-white text-[24px] pointer-events-none z-0 hidden lg:block"
        animate={{ opacity: [0.15, 0.6, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-[200px] left-[10%] text-brand-lime text-[28px] pointer-events-none z-0 hidden lg:block"
        animate={{ opacity: [0.15, 0.7, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        ✦
      </motion.div>
    </main>
  );
}
