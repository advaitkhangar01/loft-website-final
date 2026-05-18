"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Request Received.",
  message = "Thank you for reaching out. Our team is reviewing your details and will get back to you shortly.",
}: SuccessModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Glassmorphic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-[#111111] border border-white/10 rounded-[32px] p-8 md:p-10 max-w-md w-full overflow-hidden text-center shadow-2xl z-10"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-radial-glow opacity-30 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-radial-glow opacity-30 pointer-events-none" />

            {/* Glowing Success Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="w-20 h-20 rounded-full border border-[var(--color-brand-lime)]/30 bg-[var(--color-brand-lime)]/10 flex items-center justify-center text-[var(--color-brand-lime)] mx-auto mb-8 shadow-[0_0_30px_rgba(159,240,26,0.15)]"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </motion.div>

            {/* Title */}
            <h3 className="font-serif text-white text-4xl leading-none tracking-tight mb-4 select-none">
              {title}
            </h3>

            {/* Message Body */}
            <p className="font-body text-white/70 text-base leading-relaxed mb-8 max-w-xs mx-auto">
              {message}
            </p>

            {/* Got It Button */}
            <button
              onClick={onClose}
              className="w-full rounded-full border border-white/20 bg-transparent py-4 text-base font-body text-white font-medium hover:border-[var(--color-brand-lime)] hover:text-[var(--color-brand-lime)] hover:bg-[var(--color-brand-lime)]/5 active:scale-[0.98] transition-all cursor-pointer"
            >
              Got it, thanks!
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
