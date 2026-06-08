"use client";

import { useState } from "react";

interface StepDateTimeProps {
  booking: {
    location: string;
    plan: string;
    date: string;
    time: string;
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

export default function StepDateTime({ booking, setBooking, onNext, onBack }: StepDateTimeProps) {
  const isCabin = booking.plan === "4 Seater Cabin" || booking.plan === "8 Seater Cabin";
  const weekdays = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Parse booking date or fallback to current date
  const getBookingDate = () => {
    if (booking.date) {
      const parsed = Date.parse(booking.date);
      if (!isNaN(parsed)) {
        return new Date(parsed);
      }
    }
    return new Date();
  };

  const bookingDate = getBookingDate();

  const [viewedYear, setViewedYear] = useState(bookingDate.getFullYear());
  const [viewedMonthIndex, setViewedMonthIndex] = useState(bookingDate.getMonth());

  // Number of days in the current viewed month
  const daysInMonth = new Date(viewedYear, viewedMonthIndex + 1, 0).getDate();
  
  // The day of the week the 1st of the month falls on (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = new Date(viewedYear, viewedMonthIndex, 1).getDay();
  
  // Leading blank spaces for days of the week before the 1st
  const leadingBlanks = Array.from({ length: firstDayOfWeek }, () => null);
  
  // Days of the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Trailing days from the next month to fill out the last week row
  const totalCells = leadingBlanks.length + daysArray.length;
  const totalCellsNeeded = Math.ceil(totalCells / 7) * 7;
  const trailingCount = totalCellsNeeded - totalCells;
  const trailingDays = Array.from({ length: trailingCount }, (_, i) => i + 1);

  const calendarDays = [...leadingBlanks, ...daysArray, ...trailingDays];

  // Time Slots
  const timeSlots = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"];

  // Extract day number from current date string if it matches viewed month/year
  const getSelectedDayNumber = () => {
    if (booking.date) {
      const parsed = Date.parse(booking.date);
      if (!isNaN(parsed)) {
        const d = new Date(parsed);
        if (d.getFullYear() === viewedYear && d.getMonth() === viewedMonthIndex) {
          return d.getDate();
        }
      }
    }
    return null;
  };

  const selectedDay = getSelectedDayNumber();

  const handleSelectDay = (day: number) => {
    const monthName = monthNames[viewedMonthIndex];
    setBooking((prev) => ({
      ...prev,
      date: `${monthName} ${day}, ${viewedYear}`,
    }));
  };

  const handleSelectTime = (time: string) => {
    setBooking((prev) => ({ ...prev, time }));
  };

  const toggleMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setViewedMonthIndex((prev) => {
        if (prev === 0) {
          setViewedYear((y) => y - 1);
          return 11;
        }
        return prev - 1;
      });
    } else {
      setViewedMonthIndex((prev) => {
        if (prev === 11) {
          setViewedYear((y) => y + 1);
          return 0;
        }
        return prev + 1;
      });
    }
  };

  const today = new Date();
  const currentMonthLimit = today.getMonth();
  const currentYearLimit = today.getFullYear();

  const isPrevDisabled =
    viewedYear < currentYearLimit ||
    (viewedYear === currentYearLimit && viewedMonthIndex <= currentMonthLimit);

  return (
    <div className="flex flex-col gap-6 font-body">
      {/* Location Dropdown - styled EXACTLY like active dropdown in Step 1 (Mockup same-to-same) */}
      <div className="flex">
        <div className="glass-select relative min-w-[180px] pointer-events-none">
          <select
            value={booking.location}
            onChange={() => {}}
            className="bg-transparent text-white/90 w-full pl-6 pr-12 py-2.5 text-[13px] font-semibold outline-none appearance-none"
          >
            <option value={booking.location}>{booking.location || "IT Park"}</option>
          </select>
          {/* Custom Green Chevron Arrow */}
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

      {/* Main Grid: Calendar and Time Side by Side (aligned perfectly in height and ratio) */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Calendar Card - subtle white/grey border, no green border */}
        <div className="p-6 rounded-[24px] bg-black/60 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] flex-grow min-h-[400px] flex flex-col justify-between">
          <div>
            {/* Header Month Toggle */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => !isPrevDisabled && toggleMonth("prev")}
                disabled={isPrevDisabled}
                className={`text-white hover:text-brand-lime transition-colors p-1 cursor-pointer select-none font-bold ${
                  isPrevDisabled ? "opacity-20 cursor-not-allowed hover:text-white" : ""
                }`}
              >
                &lt;
              </button>
              <h3 className="brand-serif-regular text-[28px] sm:text-[34px] text-[#9ef01a] leading-none tracking-[-0.04em] font-normal">
                {monthNames[viewedMonthIndex]} {viewedYear}
              </h3>
              <button
                onClick={() => toggleMonth("next")}
                className="text-white hover:text-brand-lime transition-colors p-1 cursor-pointer select-none font-bold"
              >
                &gt;
              </button>
            </div>

            {/* Weekday Labels */}
            <div className="grid grid-cols-7 gap-y-2 text-center text-[10px] font-bold text-white/40 tracking-wider mb-4">
              {weekdays.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center items-center">
              {calendarDays.map((day, idx) => {
                if (day === null) {
                  return <div key={`blank-${idx}`} className="h-8" />;
                }

                const isTrailing = idx >= calendarDays.length - trailingCount;
                if (isTrailing) {
                  return (
                    <span key={`trail-${day}-${idx}`} className="text-white/20 text-xs font-semibold select-none h-8 flex items-center justify-center">
                      {day}
                    </span>
                  );
                }

                // Check if day is in the past
                const dayDate = new Date(viewedYear, viewedMonthIndex, day);
                const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                const isPast = dayDate < todayMidnight;

                if (isPast) {
                  return (
                    <span
                      key={`day-${day}`}
                      className="text-white/20 text-xs font-semibold select-none h-8 flex items-center justify-center cursor-not-allowed"
                    >
                      {day}
                    </span>
                  );
                }

                const isSelected = selectedDay === day;

                return (
                  <button
                    key={`day-${day}`}
                    onClick={() => handleSelectDay(day)}
                    className={`h-8 w-8 mx-auto flex items-center justify-center text-xs font-semibold transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "text-[#9ef01a] font-bold text-sm scale-110"
                        : "text-white hover:bg-white/10 rounded-full"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Time Card - styled as a thin, narrow column with subtle white/grey border, no green border */}
        {!isCabin && (
          <div className="p-4 py-8 rounded-[24px] bg-black/60 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] w-full md:w-[190px] min-h-[400px] flex flex-col justify-start shrink-0">
            <div>
              <h3 className="brand-serif-regular text-[32px] sm:text-[36px] text-[#9ef01a] leading-none tracking-[-0.04em] mb-8 text-center font-normal">
                Time
              </h3>

              {/* Time Slot Slim Rounded Rectangles touching card side borders */}
              <div className="flex flex-col gap-3.5 w-full px-1">
                {timeSlots.map((slot) => {
                  const isSelected = booking.time === slot;
                  return (
                    <button
                      key={slot}
                      onClick={() => handleSelectTime(slot)}
                      className={`w-full rounded-[10px] py-2 text-[12px] font-bold tracking-tight transition-all duration-300 cursor-pointer text-center select-none bg-transparent border ${
                        isSelected
                          ? "border-[#9ef01a] text-[#9ef01a]"
                          : "border-white/20 text-white hover:border-white/40"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-2">
        <button
          onClick={onBack}
          className="glass-btn px-10 py-3 text-white brand-serif text-[22px] sm:text-[26px] leading-none transition-all duration-300 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="glass-btn px-10 py-3 text-white brand-serif text-[22px] sm:text-[26px] leading-none transition-all duration-300 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
