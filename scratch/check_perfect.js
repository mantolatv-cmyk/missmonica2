const fs = require('fs');
let content1 = fs.readFileSync('../data/scenarios1.ts', 'utf8');
let content2 = fs.readFileSync('../data/scenarios2.ts', 'utf8');
const regex = /english:\s*[\"'](.*?)[\"'][\s\S]*?B1:\s*\{\s*en:\s*[\"'](.*?)[\"']/g;
let match;
let count = 0;
while ((match = regex.exec(content1)) !== null) {
  if (match[2].includes('have ') || match[2].includes('has ') || match[2].includes('had ')) {
    console.log(match[1], ':', match[2]);
    count++;
  }
}
while ((match = regex.exec(content2)) !== null) {
  if (match[2].includes('have ') || match[2].includes('has ') || match[2].includes('had ')) {
    console.log(match[1], ':', match[2]);
    count++;
  }
}
console.log('Total with have/has/had:', count);
