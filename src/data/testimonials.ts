export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I've worked out of three different coworking spaces in Nagpur. LOFT is the first one that felt like it was actually built for someone serious. The energy here is completely different.",
    author: "Arjun Mehta",
    role: "Founder, TechFlow",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    quote: "LOFT is where we built our MVP. The focus in the room is contagious. You don't just get a desk; you get a high-performance environment where everyone is building something meaningful.",
    author: "Sarah D'Souza",
    role: "Product Lead, Nexa",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    quote: "The network here is insane. I met my co-founder and our first investor right here in the kitchen. LOFT isn't just a workspace, it's the heart of Nagpur's startup ecosystem.",
    author: "Rohan Khanna",
    role: "CEO, Sparkly",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    quote: "What sets LOFT apart is the attention to detail. From the lighting to the acoustics, everything is designed to help you do your best work. It's the standard for modern offices.",
    author: "Priya Iyer",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
  }
];
