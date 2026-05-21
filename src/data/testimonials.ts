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
    image: "/assets/testimonials/arjun_mehta.jpg"
  },
  {
    id: 2,
    quote: "LOFT is where we built our MVP. The focus in the room is contagious. You don't just get a desk; you get a high-performance environment where everyone is building something meaningful.",
    author: "Sarah D'Souza",
    role: "Product Lead, Nexa",
    image: "/assets/testimonials/sarah_dsouza.jpg"
  },
  {
    id: 3,
    quote: "The network here is insane. I met my co-founder and our first investor right here in the kitchen. LOFT isn't just a workspace, it's the heart of Nagpur's startup ecosystem.",
    author: "Rohan Khanna",
    role: "CEO, Sparkly",
    image: "/assets/testimonials/rohan_khanna.jpg"
  },
  {
    id: 4,
    quote: "The infrastructure at LOFT is world-class. From the flawless acoustics to the high-speed network, it has everything our team needs to stay focused and build high-quality products.",
    author: "Mahesh Deshmukh",
    role: "CTO, CloudScale",
    image: "/assets/testimonials/mahesh_deshmukh.jpeg"
  }
];
