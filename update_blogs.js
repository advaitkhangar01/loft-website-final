const fs = require('fs');

const extracted = JSON.parse(fs.readFileSync('extracted_blogs.json', 'utf8'));

// Convert the extracted JSON back to TS array format
let newBlogsTS = '';
for (const blog of extracted) {
  newBlogsTS += `  {
    id: "${blog.id}",
    slug: "${blog.slug}",
    title: \`${blog.title.replace(/`/g, '\\`')}\`,
    excerpt: \`${blog.excerpt.replace(/`/g, '\\`')}\`,
    image: "${blog.image}",
    date: "${blog.date}",
    readTime: "${blog.readTime}",
    author: "${blog.author}",
    tags: ${JSON.stringify(blog.tags)},
    content: [
${blog.content.map(p => `      \`${p.replace(/`/g, '\\`')}\``).join(',\n')}
    ]
  },
`;
}

let existingFile = fs.readFileSync('src/data/blogs.ts', 'utf8');
// Find where the array ends
const closingBracketIndex = existingFile.lastIndexOf('];');

if (closingBracketIndex !== -1) {
  // Ensure there's a comma after the last existing item
  let modifiedContent = existingFile.substring(0, closingBracketIndex);
  if (!modifiedContent.trim().endsWith(',')) {
    modifiedContent += ',\n';
  }
  modifiedContent += newBlogsTS + '];\n';
  fs.writeFileSync('src/data/blogs.ts', modifiedContent);
  console.log('Successfully updated src/data/blogs.ts');
} else {
  console.log('Could not find the end of the array');
}
