export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  content: string[]; // Array of paragraphs
}

export const blogs: Blog[] = [
  {
    id: "1",
    slug: "architecture-of-focus-spaces-deep-work",
    title: "The Architecture of Focus: Designing Spaces for Deep Work",
    excerpt: "Explore how environment shapes ambition, how ambient conditions impact output, and the exact design choices we made at LOFT to enable flow state.",
    image: "/assets/blogs/focus.png",
    date: "October 30, 2026",
    readTime: "5 min read",
    author: "LOFT Design Team",
    tags: ["Space", "Productivity", "Focus"],
    content: [
      "In an era dominated by notifications and open-plan offices, deep work has become a rare commodity. Yet, the most valuable products and companies are built in periods of uninterrupted focus. At LOFT, we don't view a workspace as merely a desk and a chair; we view it as a cognitive tool designed to facilitate flow state.",
      "The architecture of focus is built upon two core pillars: visual quietness and spatial boundaries. Traditional offices opt for massive, open floor plans that invite distraction. Our cabins, by contrast, are enclosed using acoustic glass that keeps the visual connection to the vibrant community outside while keeping the auditory environment pristine.",
      "Lighting is another critical variable. Fluorescent ceiling lights are the enemy of prolonged focus. We utilize low-glare warm ambient lighting paired with direct task lights at each workspace. This creates a high-contrast zone of focus on your desk while allowing the surrounding space to fade into a softer, calming illumination.",
      "Finally, physical touchpoints matter. The texture of our tables, the ergonomics of our seating, and even the subtle scent of fresh coffee in the air are calibrated to trigger a Pavlovian transition into work mode the moment you sit down. Ambition requires the right environment to flourish."
    ]
  },
  {
    id: "2",
    slug: "bootstrapping-vs-vc-finding-right-pace",
    title: "Bootstrapping vs. VC: Finding the Right Pace for Your Company",
    excerpt: "A deep dive into the two major startup funding paradigms. Learn the trade-offs of hyper-growth vs. sustainable profitability from founders inside our cabins.",
    image: "/assets/blogs/scaling.png",
    date: "November 5, 2026",
    readTime: "6 min read",
    author: "Aditya Sen",
    tags: ["Startup", "Funding", "Growth"],
    content: [
      "Walk through the cabins of LOFT on any given afternoon, and you'll find two fundamentally different types of builders. In one cabin, a founder is preparing a pitch deck for a Series A round, eyeing aggressive market capture. In the cabin right next door, another founder is reviewing a profitable balance sheet, having bootstrapped their way to $20k MRR.",
      "There is no single correct way to build a company, but there is a correct pace for your specific market and ambition. Venture capital is fuel for rocket ships. If you are building a product in a winner-take-all market where speed-to-market is the primary determinant of success, taking institutional capital makes absolute sense.",
      "However, venture capital comes with a clock. Once you raise, you are no longer just building a business; you are building an asset that must either go public or get acquired to return capital to investors. This path demands hyper-growth, often at the expense of unit economics and team stability.",
      "Bootstrapping, on the other hand, grants you the ultimate luxury: control. You answer only to your customers. Your growth is funded by revenue, which forces you to build a product people are actually willing to pay for from day one. It may take longer to reach scale, but the foundation is exceptionally robust.",
      "Before choosing a path, ask yourself: What does success look like for you? If it is building a sustainable, highly-profitable business that you control, bootstrap. If it is pursuing a massive market opportunity with a high risk of failure but astronomical returns, VC is your ally."
    ]
  },
  {
    id: "3",
    slug: "tier-2-cities-secret-weapon-modern-founders",
    title: "Why Tier-2 Cities are the Secret Weapon for Modern Founders",
    excerpt: "How building outside tier-1 metros offers unprecedented advantages in runway, talent retention, and deep operational focus.",
    image: "/assets/blogs/cities.png",
    date: "November 12, 2026",
    readTime: "4 min read",
    author: "LOFT Editorial",
    tags: ["Ecosystem", "Nagpur", "Talent"],
    content: [
      "For the past decade, the playbook for starting a tech company in India was rigid: pack your bags, move to Bangalore, Pune, or Gurgaon, and compete in the hyper-crowded talent wars. But as remote work matured and infrastructure caught up, a new breed of founders realized that building in a tier-2 city is no longer a compromise—it is a competitive advantage.",
      "The most immediate benefit is runway. In cities like Nagpur, the cost of living and operational overhead is a fraction of what you would pay in a tier-1 metro. This lower burn rate gives founders the most valuable asset in the early stages of a startup: time. You can afford to experiment, pivot, and find true product-market fit without the pressure of an impending cash crunch.",
      "Secondly, talent dynamics are fundamentally different. In Bangalore, employee retention is notoriously difficult, with engineers jumping ship for marginal salary increases. In tier-2 cities, when you offer a talented developer the chance to work on challenging, global products without having to leave their hometown, their loyalty and engagement are incredibly high. You build a team that stays together for years, not months.",
      "Finally, tier-2 cities offer freedom from the noise. The constant networking events, panels, and startup gossip of tier-1 metros can be a massive distraction. Building in a tier-2 city like Nagpur allows you to put your head down, focus purely on customer feedback, and build your product in peace. The quiet builders are the ones making the real noise."
    ]
  }
];
