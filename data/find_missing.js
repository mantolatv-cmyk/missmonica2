const fs = require('fs');
const m = [];
['scenarios1.ts', 'scenarios2.ts'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  // Match flashcards that don't have the `levels:` property
  const r = /\{\s*english:\s*["']([^"']+)["']\s*,\s*portuguese:\s*["']([^"']+)["']\s*\}/g;
  let match;
  while ((match = r.exec(c)) !== null) {
    m.push(match[1]);
  }
});
fs.writeFileSync('./missing.json', JSON.stringify(m, null, 2));
console.log(m.length + ' missing flashcards');
