import type { Metadata } from "next";
import "./globals.css";
import FooterSection from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "LOFT Coworks",
  description: "LOFT Coworks - Premium Coworking Space",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32" },
      { url: "/favicon.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preload" href="/fonts/CustomFont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/HelveticaNowDisplay.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/HelveticaNowDisplayBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/TimesNewRomanMTCondensed.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <div className="flex-grow">
          {children}
        </div>
        <FooterSection />
      </body>
    </html>
  );
}

