"use client";

import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section
      className="relative bg-black text-white overflow-hidden flex flex-col items-center justify-center"
      style={{ minHeight: "100vh", paddingTop: "8vh", paddingBottom: "10vh" }}
    >
      {/* Green Glow — Massive Semicircle (Upside Down / U-Shape) from top */}
      <div className="absolute pointer-events-none z-0 top-0 left-0 right-0 flex justify-center overflow-hidden h-full">
        <div
          className="absolute"
          style={{
            top: "0",
            width: "140%",
            aspectRatio: "2 / 1",
            background:
              "radial-gradient(ellipse at bottom, rgba(65, 90, 20, 0.5) 0%, rgba(20, 30, 5, 0.8) 50%, transparent 70%)",
            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
            borderBottom: "1px solid rgba(100, 140, 30, 0.1)",
            boxShadow: "0 20px 80px rgba(60, 90, 20, 0.3)",
          }}
        />
      </div>

      {/* Decorative Sparkle — top left */}
      <div
        className="absolute text-white hidden md:block z-10"
        style={{ top: "15%", left: "18%" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
        </svg>
      </div>

      {/* Decorative Sparkle — mid right */}
      <div
        className="absolute text-white hidden md:block z-10"
        style={{ top: "45%", right: "18%" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
        </svg>
      </div>

      {/* Image Stack */}
      <div
        className="relative z-10 mt-12"
        style={{ width: "280px", height: "420px", marginBottom: "40px" }}
      >
        {/* Bottom card — grey/dark, rotated right */}
        <div
          className="absolute inset-0 overflow-hidden bg-zinc-800"
          style={{
            borderRadius: "32px",
            transform: "rotate(12deg) translateX(30px) translateY(10px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
            alt="Testimonial background 1"
            fill
            className="object-cover"
            style={{ filter: "grayscale(100%)", opacity: 0.4 }}
          />
        </div>

        {/* Middle card — grey, rotated left */}
        <div
          className="absolute inset-0 overflow-hidden bg-zinc-800"
          style={{
            borderRadius: "32px",
            transform: "rotate(-9deg) translateX(-25px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
            alt="Testimonial background 2"
            fill
            className="object-cover"
            style={{ filter: "grayscale(100%)", opacity: 0.5 }}
          />
        </div>

        {/* Top card — colour portrait */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: "32px",
            transform: "rotate(0deg)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.9)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
            alt="Testimonial member"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Quote */}
      <div className="relative z-20 max-w-3xl text-center px-6">
        <p
          className="text-white/95"
          style={{
            fontFamily: "'Helvetica Now Text', 'Inter', sans-serif",
            fontSize: "clamp(18px, 2.2vw, 24px)",
            lineHeight: 1.4,
            fontWeight: 500,
            letterSpacing: "-0.03em",
          }}
        >
          "I've worked out of three different coworking spaces in Nagpur. LOFT
          <br className="hidden md:block" />
          is the first one that felt like it was actually built for someone
          serious.
          <br className="hidden md:block" />
          The energy here is completely different."
        </p>
      </div>
    </section>
  );
}
