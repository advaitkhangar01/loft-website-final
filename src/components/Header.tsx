import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center px-12 py-8 pointer-events-none">
      
      {/* Logo Container (Left) */}
      <div className="flex-1 pointer-events-auto">
        <Link href="/" className="inline-flex items-center relative w-[160px] h-[50px] md:w-[200px] md:h-[64px]">
          <Image 
            src="/logo.png" 
            alt="LOFT Logo" 
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
      </div>
      
      {/* Nav Links (Center) */}
      <div className="flex gap-12 pointer-events-auto justify-center">
        {["Location", "Spaces", "Community", "Contact Us", "Account"].map((item) => (
          <Link 
            key={item} 
            href="#" 
            className="text-white text-[16px] font-body hover:text-brand-lime transition-colors tracking-tight"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Empty spacer to balance flex (Right) */}
      <div className="flex-1" />
      
    </nav>
  );
}
