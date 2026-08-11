"use client";

import { useState, useEffect } from "react";

interface ShareArticleBoxProps {
  title: string;
  slug: string;
}

export default function ShareArticleBox({ title, slug }: ShareArticleBoxProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}/blogs/${slug}`);
    }
  }, [slug]);

  const handleCopy = async () => {
    try {
      if (shareUrl) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const handleShare = (platform: "twitter" | "linkedin" | "facebook" | "whatsapp") => {
    if (!shareUrl) return;
    const urlMap = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`,
    };
    window.open(urlMap[platform], "_blank", "noopener,noreferrer,width=600,height=500");
  };

  return (
    <div className="relative p-6 rounded-[2rem] bg-gray-50/90 backdrop-blur-md border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden group">
      {/* Decorative Brand Vignette in corner */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#5CB338]/10 blur-2xl rounded-full pointer-events-none group-hover:bg-[#5CB338]/20 transition-all duration-500" />

      {/* Title & Typography */}
      <div className="mb-5 relative z-10">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-black/40 mb-1">
          Share Article
        </p>
        <p className="font-serif text-2xl text-[#5CB338] italic font-normal leading-tight">
          Spread the perspective
        </p>
      </div>

      {/* Social Buttons Container */}
      <div className="flex items-center gap-3 relative z-10 flex-wrap">
        {/* X / Twitter */}
        <button
          onClick={() => handleShare("twitter")}
          title="Share on X (Twitter)"
          aria-label="Share on X"
          className="relative group/btn w-12 h-12 rounded-2xl bg-white border border-black/5 shadow-xs flex items-center justify-center text-black/80 hover:text-white hover:bg-black hover:border-black hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <svg className="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => handleShare("linkedin")}
          title="Share on LinkedIn"
          aria-label="Share on LinkedIn"
          className="relative group/btn w-12 h-12 rounded-2xl bg-white border border-black/5 shadow-xs flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <svg className="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </button>

        {/* Facebook */}
        <button
          onClick={() => handleShare("facebook")}
          title="Share on Facebook"
          aria-label="Share on Facebook"
          className="relative group/btn w-12 h-12 rounded-2xl bg-white border border-black/5 shadow-xs flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <svg className="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.72l-.43 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z" />
          </svg>
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => handleShare("whatsapp")}
          title="Share on WhatsApp"
          aria-label="Share on WhatsApp"
          className="relative group/btn w-12 h-12 rounded-2xl bg-white border border-black/5 shadow-xs flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <svg className="w-6 h-6 fill-current transition-colors" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.183 8.183 0 0 1-5.82 2.42c-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.08.81.82-3-.19-.31a8.214 8.214 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24zm-3.53 4.45c-.19 0-.51.07-.78.37-.27.3-1.03 1.01-1.03 2.47s1.05 2.87 1.2 3.07c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.18-1.41-.07-.12-.27-.19-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.19.3-.77.97-.95 1.16-.17.2-.35.22-.64.07-.3-.15-1.24-.46-2.37-1.46-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51z" />
          </svg>
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          title="Copy Article Link"
          aria-label="Copy Article Link"
          className={`relative group/btn w-12 h-12 rounded-2xl border shadow-xs flex items-center justify-center transition-all duration-200 cursor-pointer ${
            copied
              ? "bg-[#5CB338] text-white border-[#5CB338] scale-105"
              : "bg-white text-[#5CB338] border-black/5 hover:bg-[#5CB338] hover:text-white hover:border-[#5CB338] hover:scale-110 active:scale-95"
          }`}
        >
          {copied ? (
            <svg className="w-6 h-6 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          )}

          {/* Copied Tooltip Badge */}
          {copied && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black text-white text-[10px] font-bold rounded-md shadow-md whitespace-nowrap z-20">
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
