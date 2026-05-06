import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex items-center px-12 py-8 pointer-events-none">
      
      {/* Logo Container (Left) */}
      <div className="flex-1 pointer-events-auto">
        <Link href="/" className="inline-flex items-center relative w-[160px] h-[55px]">
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
        {[
          { name: "Location", href: "/#location" },
          { name: "Spaces", href: "/#spaces" },
          { name: "Community", href: "/#community" },
          { name: "Contact Us", href: "/#contact" },
          { name: "Account", href: "#" },
        ].map((item) => (
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
      <div className="flex-1" />
      
    </nav>
  );
}
