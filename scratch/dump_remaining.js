const fs = require('fs');
let content1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
let content2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');

const regex = /en:\s*[\"'](.*?)[\"']/g;
let match;
let lines = [];
while ((match = regex.exec(content1)) !== null) {
  if (match[1].includes('have ') || match[1].includes('has ') || match[1].includes('had ')) {
    lines.push(match[1]);
  }
}
while ((match = regex.exec(content2)) !== null) {
  if (match[1].includes('have ') || match[1].includes('has ') || match[1].includes('had ')) {
    lines.push(match[1]);
  }
}
fs.writeFileSync('remaining.txt', lines.join('\n'));
console.log('Saved to remaining.txt');
