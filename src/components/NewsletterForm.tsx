"use client";

import { useState } from "react";
import SuccessModal from "./SuccessModal";

interface NewsletterFormProps {
  buttonText?: string;
  shadowClass?: string;
  buttonPaddingClass?: string;
}

export default function NewsletterForm({
  buttonText = "submit",
  shadowClass = "shadow-[0_10px_50px_rgba(0,0,0,0.08)]",
  buttonPaddingClass = "py-3",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "newsletter",
          email,
        }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setShowSuccess(true);
      setEmail("");
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <form
        onSubmit={handleSubscribe}
        className={`bg-white rounded-full ${shadowClass} flex items-center p-2 w-full max-w-2xl group border border-gray-50 focus-within:border-[#5CB338]/30 transition-all duration-300`}
      >
        <input
          type="email"
          placeholder="your email"
          className="bg-transparent flex-grow px-8 font-body text-black/80 outline-none placeholder:text-black/40"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-[#1a1a1a] text-white px-10 ${buttonPaddingClass} rounded-full font-body font-semibold hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95`}
        >
          {isSubmitting ? "submitting..." : buttonText}
        </button>
      </form>
      {errorMsg && (
        <p className="text-red-500 font-body text-sm mt-2">{errorMsg}</p>
      )}

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Subscribed!"
        message="Thank you for subscribing to Stories From the Room. We will send weekly perspectives to your email address shortly."
      />
    </div>
  );
}
