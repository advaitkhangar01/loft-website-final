const xlsx = require("xlsx");
const fs = require("fs");

const workbook = xlsx.readFile("D:/Office/Softwares-Office-Clients/loft-website-final/LOFT_80_Blogs.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const rawData = xlsx.utils.sheet_to_json(sheet);

const images = [
  "/assets/blogs/coworking_office_1786107635637.jpg",
  "/assets/blogs/productivity_desk_1786107650786.jpg",
  "/assets/blogs/meeting_collaboration_1786107670957.jpg",
  "/assets/blogs/focus_space_1786107687468.jpg",
  "/assets/blogs/community_event_1786107715047.jpg"
];

// Date formatter
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

const blogs = rawData.slice(0, 10).map((row, i) => {
  // Start from July 1, 2026 and increment by 5 days
  const targetDate = new Date("2026-07-01");
  targetDate.setDate(targetDate.getDate() + (i * 5));
  
  return {
    id: String(4 + i), // Existing blogs are 1, 2, 3
    slug: row.slug || `blog-${4 + i}`,
    title: row.title || "Untitled",
    excerpt: row.short_description || "Read more about this topic.",
    image: images[i % 5],
    date: formatDate(targetDate), // July 1, 2026 format
    readTime: "5 min read",
    author: row.author_name || "Team LOFT",
    tags: row.tags ? row.tags.split(",").map(t => t.trim().split(" ")[0]) : ["LOFT"],
    content: (row.content || "").split("\n\n").filter(Boolean)
  };
});

fs.writeFileSync("extracted_blogs.json", JSON.stringify(blogs, null, 2));
console.log("Done extracting 10 blogs.");
