"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ hideAfterHero = false }: { hideAfterHero?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!hideAfterHero) return;

    const handleScroll = () => {
      // Hide header when scrolled past hero section (approx window.innerHeight - 100)
      if (window.scrollY > window.innerHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call once to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideAfterHero]);

  // Framer Motion variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1 as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
        delayChildren: 0.1,
        staggerChildren: 0.08,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  const menuItems = [
    { name: "Location", href: "/#location" },
    { name: "Spaces", href: "/#spaces" },
    { name: "Community", href: "/#community" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 py-5 md:px-12 md:py-8 pointer-events-none transition-all duration-500 ease-in-out ${
        isVisible || isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
        {/* Logo Container (Left) */}
        <div className="flex-1 pointer-events-auto">
          <Link href="/" className="inline-flex items-center relative w-[120px] h-[40px] md:w-[160px] md:h-[55px]">
            <Image 
              src="/logo.png" 
              alt="LOFT Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>
        
        {/* Nav Links (Center) - Hidden on Mobile */}
        <div className="hidden md:flex gap-12 pointer-events-auto justify-center">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-white text-[16px] font-body hover:text-brand-lime transition-colors tracking-tight"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Empty spacer to balance flex (Right) */}
        <div className="hidden md:block flex-1" />

        {/* Hamburger Menu Button (Mobile Right) */}
        <div className="flex md:hidden pointer-events-auto z-[120]">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none cursor-pointer"
          >
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 w-full h-screen bg-[#0d0d0d] z-[90] flex flex-col justify-center px-8 md:hidden backdrop-blur-2xl bg-black/95 bg-grid"
          >
            {/* Soft Ambient Radial Glow behind the links */}
            <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-60" />

            <div className="flex flex-col gap-8 relative z-10">
              {menuItems.map((item) => (
                <motion.div key={item.name} variants={linkVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-[clamp(44px,8vw,64px)] font-normal text-white hover:text-brand-lime transition-colors leading-none tracking-tight block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Micro-animated Sparkle inside overlay */}
            <motion.div 
              className="absolute bottom-16 right-12 text-brand-lime text-[40px] pointer-events-none select-none"
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              ✦
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

