export interface Story {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  content: string[]; // Array of paragraphs
}

export const stories: Story[] = [
  {
    id: "1",
    slug: "nagpur-startup-city",
    title: "Why Nagpur is Quietly Becoming a Startup City and Most People Haven't Noticed Yet",
    image: "/assets/stories/nagpur.png",
    date: "October 12, 2026",
    readTime: "4 min read",
    author: "LOFT Editorial",
    content: [
      "There's a subtle shift happening in the streets of Nagpur. What was once seen purely as a logistical hub or a quiet retirement city is slowly building a foundation for something much bigger. Founders aren't just leaving for Bangalore or Pune anymore; many are choosing to stay, build, and scale from right here.",
      "The narrative of building a startup often centers around the struggle of surviving in an expensive, hyper-competitive tier-1 city. But there's a counter-movement happening. Building in a tier-2 city offers distinct advantages: lower burn rates, a closely-knit community, and a hungry talent pool looking for challenging opportunities.",
      "At LOFT, we've seen this first-hand. In the past few months alone, we've had deep-tech AI startups, innovative D2C brands, and SaaS companies working out of our cabins. They aren't building small regional businesses; they are building global products.",
      "The ecosystem is still nascent, but the ambition is undeniable. The infrastructure is catching up, the mindset is shifting, and the quiet builders are starting to make some noise. Nagpur is no longer just a dot on the map; it's becoming a destination for those who want to focus and build without the noise."
    ]
  },
  {
    id: "2",
    slug: "pricing-freelance-work",
    title: "How to Price Your Freelance Work Without Underselling",
    image: "/assets/stories/freelance.png",
    date: "October 18, 2026",
    readTime: "6 min read",
    author: "Alex Morgan",
    content: [
      "One of the hardest conversations any freelancer has is the one about money. Specifically, how much to charge. It's a delicate balance between knowing your worth and fearing you might lose the client if your number is too high.",
      "The most common mistake early freelancers make is hourly billing. While it seems fair, it punishes efficiency. If you get faster at your job, you get paid less. The shift to value-based pricing changes the entire dynamic. You aren't billing for your time; you are billing for the value of the problem you are solving.",
      "When a client asks for a quote, they aren't just paying for the deliverables. They are paying for your years of experience, the software you use, your reliability, and the peace of mind that you will deliver on time. Factor these into your baseline.",
      "Start by determining your Minimum Acceptable Rate (MAR). This is the absolute lowest you can go while still covering your bills and making a profit. Never go below this number. From there, price based on the project's impact. If your design is going to be the face of a million-dollar ad campaign, price accordingly.",
      "Don't be afraid of the word 'no'. A client who balks at a reasonable rate was likely going to be difficult to work with anyway. Stand firm, communicate your value clearly, and the right clients will respect your pricing."
    ]
  },
  {
    id: "3",
    slug: "diary-of-a-day-at-loft",
    title: "An Honest Diary of a Day at LOFT — What Actually Happens Here",
    image: "/assets/stories/office.png",
    date: "October 24, 2026",
    readTime: "5 min read",
    author: "LOFT Community Team",
    content: [
      "8:30 AM: The first few early birds arrive. There's a quiet hum in the air. The coffee machine is working overtime, and the only sounds are the clicking of mechanical keyboards and the soft lo-fi beats playing in the common area. This is the golden hour for deep work.",
      "11:00 AM: The space is fully alive now. The phone booths are occupied, and there's a lively discussion happening in the community lounge. It's interesting to see a freelance designer brainstorming with a fintech founder. These spontaneous collisions are exactly why this space was built.",
      "1:30 PM: Lunchtime. The pantry gets crowded. Tupperware boxes are opened, and food is shared. The conversation shifts from runway and burn rates to weekend plans and the best local food spots. It's a reminder that behind every ambitious project are people who just want to connect.",
      "4:00 PM: The afternoon slump is real, but a fresh pot of coffee brings a second wave of energy. A small group has gathered near the whiteboard in the meeting room, mapping out a user flow. The energy is focused. You can literally feel things being built.",
      "7:00 PM: The formal workday ends for most, but not for everyone. A few founders are still at their desks, entirely in the zone. The lights dim slightly, the music shifts to something more ambient. It's in these quiet evening hours that some of the best work happens. This is LOFT."
    ]
  }
];
