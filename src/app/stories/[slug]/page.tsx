import { stories } from "@/data/stories";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

// Generate static params for the dynamic routes
export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = stories.find((s) => s.slug === params.slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header wrapper with dark background so the white text is visible */}
      <div className="relative w-full h-[120px] bg-[#0d0d0d] overflow-hidden">
        {/* Background Grid for header section */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <Header />
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Back Link */}
        <Link 
          href="/#stories" 
          className="inline-flex items-center text-black/60 hover:text-[#5CB338] font-body text-sm uppercase tracking-widest mb-12 transition-colors"
        >
          ← Back to Stories
        </Link>

        {/* Story Header */}
        <header className="mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-black tracking-tight leading-tight mb-8">
            {story.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 font-body text-black/60 border-t border-black/10 pt-6">
            <span className="font-semibold text-black">{story.author}</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span>{story.date}</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span className="text-[#5CB338]">{story.readTime}</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden mb-16">
          <Image 
            src={story.image} 
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Story Content */}
        <div className="font-body text-lg md:text-xl text-black/80 leading-relaxed space-y-8 max-w-3xl mx-auto">
          {story.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="mt-24 pt-12 border-t border-black/10 flex flex-col items-center text-center">
          <p className="font-serif text-3xl md:text-4xl text-black mb-6">
            Ready to start your own story?
          </p>
          <Link 
            href="/#contact"
            className="rounded-full bg-[#1a1a1a] text-white px-10 py-4 font-body font-semibold hover:bg-[#5CB338] transition-colors"
          >
            Book a Tour
          </Link>
        </div>
      </article>
    </main>
  );
}
