"use client";

import Image from "next/image";

export default function OriginSection() {
  return (
    <section className="relative w-full bg-[#0d0d0d] flex items-center justify-center overflow-hidden py-20">
      <div className="w-full max-w-[1600px] px-4 md:px-8 flex justify-center">
        {/* Using the SVG directly as requested */}
        <div className="relative w-full" style={{ aspectRatio: "1920/1080" }}>
          <Image
            src="/homepage-8th-section.svg"
            alt="The Origin of LOFT"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
