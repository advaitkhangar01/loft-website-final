import { stories } from "@/data/stories";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import NewsletterForm from "@/components/NewsletterForm";

// Generate static params for the dynamic routes
export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Vignettes matching StoriesSection */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-black/15 blur-[80px] z-10 pointer-events-none" />
      <div className="absolute top-0 -right-48 w-1/4 h-full bg-[#5CB338]/20 blur-[140px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lime/5 blur-[100px] rounded-full -ml-48 -mb-48 z-0 pointer-events-none" />

      {/* Header Spacer / Top bar */}
      <div className="relative w-full h-[100px] md:h-[120px] bg-[#0d0d0d] overflow-hidden z-30">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <Header />
      </div>

      <article className="relative z-20 max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Back Link */}
        <div className="mb-12">
          <Link 
            href="/#stories" 
            className="group inline-flex items-center text-black/40 hover:text-black font-body text-xs md:text-sm uppercase tracking-[0.2em] transition-all"
          >
            <span className="mr-3 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Stories
          </Link>
        </div>

        {/* Story Header */}
        <header className="mb-16">
          <h1 className="font-heading text-4xl md:text-7xl font-bold text-black tracking-tight leading-[1.1] mb-10 max-w-4xl">
            {story.title}
          </h1>
          
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-white/40 backdrop-blur-md border border-black/5 shadow-sm font-body text-sm md:text-base text-black/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#5CB338]/10 flex items-center justify-center">
                <span className="text-[#5CB338] text-xs font-bold">{story.author[0]}</span>
              </div>
              <span className="font-bold text-black">{story.author}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
            <span>{story.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black/10" />
            <span className="text-[#5CB338] font-medium">{story.readTime}</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2.4/1] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden mb-20 shadow-2xl shadow-black/5">
          <Image 
            src={story.image} 
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-16">
          <div className="font-body text-lg md:text-xl text-black/80 leading-[1.7] space-y-10 max-w-3xl">
            {story.content.map((paragraph, index) => (
              <p 
                key={index} 
                className={index === 0 ? "first-letter:text-5xl first-letter:font-heading first-letter:float-left first-letter:mr-3 first-letter:text-black first-letter:leading-none pt-1" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sidebar Info / Social? */}
          <div className="hidden lg:flex flex-col gap-8 sticky top-32 h-fit">
            <div className="p-8 rounded-[2rem] bg-gray-50 border border-black/5">
              <p className="font-heading text-sm uppercase tracking-widest text-black/40 mb-4">Share Story</p>
              <div className="flex gap-4">
                {['tw', 'li', 'fb'].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-all">
                    <span className="text-xs font-bold uppercase">{social}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Subscription (Matching StoriesSection) */}
        <div className="mt-32 pt-24 border-t border-black/5">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-black mb-4">
              Never miss a story.
            </h2>
            <p className="font-body text-lg text-black/60">
              Join 5,000+ builders getting our weekly perspectives from the room.
            </p>
          </div>

          <div className="mb-24 flex justify-center w-full">
            <NewsletterForm 
              buttonText="subscribe" 
              shadowClass="shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              buttonPaddingClass="py-4"
            />
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-12 flex flex-col items-center text-center">
          <p className="font-serif text-4xl md:text-5xl text-[#5CB338] mb-8 italic">
            Ready to start your own story?
          </p>
          <Link 
            href="/#contact"
            className="group relative inline-flex items-center gap-3 bg-black text-white px-12 py-5 rounded-full font-body font-bold text-lg overflow-hidden transition-all hover:pr-14"
          >
            <span className="relative z-10">Book a Tour</span>
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">→</span>
          </Link>
        </div>
      </article>
    </main>
  );
}

